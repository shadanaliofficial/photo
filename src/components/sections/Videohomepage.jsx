import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './VideoHomepage.css';

const VideoHomepage = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    let currentIndex = 0;
    let isTransitioning = false;

    // Ensure all videos are muted (required for autoplay)
    videos.forEach(video => {
      if (video) {
        video.muted = true;
      }
    });

    // Set initial visibility
    gsap.set(video1Ref.current, { opacity: 1, zIndex: 3 });
    gsap.set(video2Ref.current, { opacity: 0, zIndex: 2 });
    gsap.set(video3Ref.current, { opacity: 0, zIndex: 1 });

    const safePlay = (video) => {
      if (!video) return;

      video.currentTime = 0;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
    };

    const transitionToNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const currentVideo = videos[currentIndex];
      const nextIndex = (currentIndex + 1) % videos.length;
      const nextVideo = videos[nextIndex];

      safePlay(nextVideo);

      const tl = gsap.timeline({
        onComplete: () => {
          currentVideo.pause();
          currentIndex = nextIndex;
          isTransitioning = false;
        }
      });

      tl.to(nextVideo, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, 0)
      .to(currentVideo, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      gsap.set(nextVideo, { zIndex: 3 });
      gsap.set(currentVideo, { zIndex: 1 });
    };

    const checkProgress = () => {
      const currentVideo = videos[currentIndex];
      if (currentVideo && !isTransitioning) {
        const timeRemaining = currentVideo.duration - currentVideo.currentTime;

        if (timeRemaining <= 1 && timeRemaining > 0) {
          transitionToNext();
        }
      }
    };

    // Wait until first video is ready before playing
    const handleLoaded = () => {
      safePlay(video1Ref.current);
    };

    video1Ref.current.addEventListener('loadeddata', handleLoaded);

    const interval = setInterval(checkProgress, 100);

    return () => {
      clearInterval(interval);
      video1Ref.current?.removeEventListener('loadeddata', handleLoaded);

      videos.forEach(video => {
        if (video) video.pause();
      });
    };
  }, []);

  return (
    <section className="video-homepage">
      <div className="video-homepage__container">
        <div className="video-homepage__wrapper">

          <video
            ref={video1Ref}
            className="video-homepage__video"
            muted
            playsInline
            autoPlay
            preload="auto"
          >
            <source src="/videos/01.mp4" type="video/mp4" />
          </video>

          <video
            ref={video2Ref}
            className="video-homepage__video"
            muted
            playsInline
            autoPlay
            preload="auto"
          >
            <source src="/videos/02.mp4" type="video/mp4" />
          </video>

          <video
            ref={video3Ref}
            className="video-homepage__video"
            muted
            playsInline
            autoPlay
            preload="auto"
          >
            <source src="/videos/03.mp4" type="video/mp4" />
          </video>

        </div>
      </div>
    </section>
  );
};

export default VideoHomepage;

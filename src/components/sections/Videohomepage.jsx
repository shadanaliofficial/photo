import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './VideoHomepage.css';

const VideoHomepage = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    let currentIndex = 0;
    let isTransitioning = false;
    
    // Set initial states
    gsap.set(video1Ref.current, { opacity: 1, zIndex: 3 });
    gsap.set(video2Ref.current, { opacity: 0, zIndex: 2 });
    gsap.set(video3Ref.current, { opacity: 0, zIndex: 1 });

    const playVideo = (index) => {
      const video = videos[index];
      video.currentTime = 0;
      video.play();
    };

    const transitionToNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const currentVideo = videos[currentIndex];
      const nextIndex = (currentIndex + 1) % 3;
      const nextVideo = videos[nextIndex];
      
      // Start next video
      playVideo(nextIndex);
      
      // Smooth crossfade
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
      
      // Update z-index
      gsap.set(nextVideo, { zIndex: 3 });
      gsap.set(currentVideo, { zIndex: 1 });
    };

    // Monitor video progress
    const checkProgress = () => {
      const currentVideo = videos[currentIndex];
      if (currentVideo && !isTransitioning) {
        const timeRemaining = currentVideo.duration - currentVideo.currentTime;
        // Start transition 1 second before video ends
        if (timeRemaining <= 1 && timeRemaining > 0) {
          transitionToNext();
        }
      }
    };

    // Start first video
    playVideo(0);
    
    // Check progress frequently
    const interval = setInterval(checkProgress, 100);

    // Cleanup
    return () => {
      clearInterval(interval);
      videos.forEach(video => {
        if (video) {
          video.pause();
        }
      });
    };
  }, []);

  return (
    <section className="video-homepage">
      <div className="video-homepage__container">
        <div className="video-homepage__wrapper">
          {/* Video Layer 1 */}
          <video
            ref={video1Ref}
            className="video-homepage__video"
            muted
            playsInline
          >
            <source src="/videos/01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Layer 2 */}
          <video
            ref={video2Ref}
            className="video-homepage__video"
            muted
            playsInline
          >
            <source src="/videos/02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Layer 3 */}
          <video
            ref={video3Ref}
            className="video-homepage__video"
            muted
            playsInline
          >
            <source src="/videos/03.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Overlay
          <div className="video-homepage__overlay">
            <h2 className="video-homepage__title">SOUL+CINEMA</h2>
            <div className="video-homepage__content">
              <p className="video-homepage__text">
                Every wedding is unique and so are our films. For past 8 years HOTC has set new
              </p>
              <p className="video-homepage__text">
                benchmarks of
              </p>
              <p className="video-homepage__text">
                of storytelling within wedding realm and beyond. We are fortunate to have experienced so
              </p>
              <p className="video-homepage__text">
                unique cultures and traditions across 25 countries and to document stories that
              </p>
              <p className="video-homepage__text">
                continuously overwhelm us.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VideoHomepage;
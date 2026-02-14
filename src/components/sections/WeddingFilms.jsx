import React, { useState, useRef, useEffect } from 'react';
import './WeddingFilms.css';

const WeddingFilms = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const playerRef = useRef(null);

  // Video data - Add your Vimeo video IDs here
  const videos = [
    {
      id: 1,
      coverImage: '/src/assets/images/video-pictures/1.avif',
      vimeoId: '1164325848'
    },
    {
      id: 2,
      coverImage: '/src/assets/images/video-pictures/2.avif',
      vimeoId: '1164325976' // Replace with actual Vimeo ID
    },
    {
      id: 3,
      coverImage: '/src/assets/images/video-pictures/3.avif',
      vimeoId: '1164326211' // Replace with actual Vimeo ID
    },
    {
      id: 4,
      coverImage: '/src/assets/images/video-pictures/4.avif',
      vimeoId: '1164326361' // Replace with actual Vimeo ID
    },
    {
      id: 5,
      coverImage: '/src/assets/images/video-pictures/5.avif',
      vimeoId: '1164326281' // Replace with actual Vimeo ID
    }
  ];

  // Open video modal
  const handlePlayClick = (videoId) => {
    setActiveVideo(videoId);
  };

  // Close modal
  const handleCloseModal = () => {
    setActiveVideo(null);
    // Destroy player to stop video
    if (playerRef.current) {
      playerRef.current = null;
    }
  };

  // Initialize Vimeo player when modal opens
  useEffect(() => {
    if (activeVideo && window.Vimeo) {
      const iframe = document.getElementById('vimeo-player');
      playerRef.current = new window.Vimeo.Player(iframe);

      // Listen for video end
      playerRef.current.on('ended', () => {
        handleCloseModal();
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [activeVideo]);

  // Load Vimeo Player API
  useEffect(() => {
    if (!window.Vimeo) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const activeVideoData = videos.find(v => v.id === activeVideo);

  return (
    <section className="wedding-films">
      <div className="wedding-films__container">
        <h2 className="wedding-films__heading">Wedding Films</h2>
        <div className="wedding-films__grid">
          {videos.map((video) => (
            <div key={video.id} className="wedding-films__item">
              <div className="wedding-films__thumbnail">
                <img
                  src={video.coverImage}
                  alt={`Wedding Film ${video.id}`}
                  className="wedding-films__image"
                />
                <button
                  className="wedding-films__play-button"
                  onClick={() => handlePlayClick(video.id)}
                  aria-label="Play video"
                >
                  <svg
                    className="wedding-films__play-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5L19 12L8 19V5Z" fill="white" stroke="white" strokeWidth="1" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && activeVideoData && (
        <div className="wedding-films__modal">
          <button
            className="wedding-films__close-button"
            onClick={handleCloseModal}
            aria-label="Close video"
          >
            <svg
              className="wedding-films__close-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          
          <div className="wedding-films__video-wrapper">
            <iframe
              id="vimeo-player"
              src={`https://player.vimeo.com/video/${activeVideoData.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              className="wedding-films__video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingFilms;
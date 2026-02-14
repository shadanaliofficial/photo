import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

const PortfolioPreview = () => {
  const portfolioData = [
    {
      id: 1,
      title: "MUKTA & GIRISH",
      subtitle: "Capturing Eternal Moments: Mukta & Girish",
      subtitle2: "Enchanting Wedding Celebration",
      image: "/images/wedding1/cover.avif",
      slug: "wedding1"
    },
    {
      id: 2,
      title: "DEEPIKA & SANDESH",
      subtitle: "Capturing Eternal Moments: Deepika & Sandesh",
      subtitle2: "Enchanting Wedding Celebration",
      image: "/images/wedding2/cover.avif",
      slug: "wedding2"
    },
    {
      id: 3,
      title: "PRATIBHA & VISHWAS",
      subtitle: "Capturing Eternal Moments: Pratibha & Vishwas",
      subtitle2: "Enchanting Wedding Celebration",
      image: "/images/wedding3/cover.avif",
      slug: "wedding3"
    }
  ];

  return (
    <>
      {/* HERO HEADING SECTION */}
      <section className="portfolio-hero">
        <img 
          src="/images/page-hero/portfolio.avif" 
          alt="Portfolio" 
          className="portfolio-hero__image" 
        />

        <div className="portfolio-hero__overlay">
          <h1 className="portfolio-hero__title"></h1>
        </div>
      </section>

      {/* EXISTING SECTION — UNCHANGED */}
      <section className="portfolio-preview-section">
        <div className="portfolio-preview-container">
          <h2 className="portfolio-title"></h2>

          <div className="portfolio-grid">
            {portfolioData.map((album, index) => (
              <div 
                className="portfolio-card" 
                key={album.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >

                <Link to={`/album/${album.slug}`} className="portfolio-card__frame">
                  <div className="portfolio-card__arch">
                    <img 
                      src={album.image} 
                      alt={album.title}
                      className="portfolio-image"
                    />
                  </div>
                </Link>

                <div className="portfolio-content">
                  <h3 className="couple-name">{album.title}</h3>
                  <p className="wedding-subtitle">{album.subtitle}</p>
                  <p className="wedding-subtitle">{album.subtitle2}</p>

                  <Link 
                    to={`/album/${album.slug}`} 
                    className="view-details-btn"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPreview;

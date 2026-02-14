import React from 'react';
import { Link } from 'react-router-dom';
import './portfolioPreview.css';

const PortfolioPreview = () => {
  const portfolioData = [
    {
      id: 1,
      title: "Mukta & Girish",
      subtitle: "Capturing Eternal Moments: Vidhya & Manish",
      subtitle2: "Enchanting Wedding Celebration",
      image: "/images/wedding1/cover.avif",
      slug: "wedding1"
    },
    {
      id: 2,
      title: "Deepika & Sandesh",
      subtitle: "Capturing Eternal Moments: Vidhya & Manish",
      subtitle2: "Enchanting Wedding Celebration",
      image: "/images/wedding2/cover.avif",
      slug: "wedding2"
    },
    {
      id: 3,
      title: "Pratibha & Vishwas",
      subtitle: "Capturing Eternal Moments: Vidhya & Manish",
      subtitle2: "Enchanting Wedding Celebration",
      image: "/images/wedding3/cover.avif",
      slug: "wedding3"
    }
  ];

  return (
    <section className="portfolio-preview-section">
      <div className="portfolio-preview-container">
        <h2 className="portfolio-title">Portfolio</h2>
        
        <div className="portfolio-grid">
          {portfolioData.map((album, index) => (
            <div 
              className="portfolio-card" 
              key={album.id}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="portfolio-card__frame">
                <div className="portfolio-card__arch">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="portfolio-image"
                  />
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="couple-name">{album.title}</h3>
                <p className="wedding-subtitle">{album.subtitle}</p>
                <p className="wedding-subtitle">{album.subtitle2}</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/portfolio" className="see-more-btn">
          See More
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPreview;
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { weddingAlbums } from "../data/weddingAlbums";
import "./album.css";

export default function AlbumPage() {
  const { albumId } = useParams();
  const images = weddingAlbums[albumId];

  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  if (!images) return <h2>Album not found</h2>;

  // Group images into rows based on layout
  const rows = [];
  let i = 0;

  while (i < images.length) {
    const current = images[i];

    if (current.layout === "horizontal") {
      rows.push({ type: "single", image: current });
      i++;
    } else if (current.layout === "vertical") {
      const next = images[i + 1];

      if (next && next.layout === "vertical") {
        rows.push({ type: "pair", images: [current, next] });
        i += 2;
      } else {
        rows.push({ type: "single-vertical", image: current });
        i++;
      }
    }
  }

  return (
    <>
      <section className="album-page">
        <div className="album-canvas">
          {rows.map((row, index) => (
            <div key={index} className="album-row">
              {row.type === "single" ? (
                <div className="img horizontal">
                  <img
                    src={row.image.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    onClick={() => setSelectedImage(row.image.src)}
                  />
                </div>
              ) : row.type === "single-vertical" ? (
                <div className="img vertical single-vertical">
                  <img
                    src={row.image.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    onClick={() => setSelectedImage(row.image.src)}
                  />
                </div>
              ) : (
                <div className="vertical-pair">
                  <div className="img vertical">
                    <img
                      src={row.images[0].src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onClick={() =>
                        setSelectedImage(row.images[0].src)
                      }
                    />
                  </div>
                  <div className="img vertical">
                    <img
                      src={row.images[1].src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onClick={() =>
                        setSelectedImage(row.images[1].src)
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <span className="close-btn">✕</span>
          <img
            src={selectedImage}
            alt="Full view"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

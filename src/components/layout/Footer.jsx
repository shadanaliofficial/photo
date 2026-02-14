import "./footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

import img1 from "../../assets/images/footer/1.avif";
import img2 from "../../assets/images/footer/2.avif";
import img3 from "../../assets/images/footer/3.avif";
import img5 from "../../assets/images/footer/5.avif";
import img6 from "../../assets/images/footer/6.avif";
import img7 from "../../assets/images/footer/7.avif";
import img8 from "../../assets/images/footer/8.avif";
import img9 from "../../assets/images/footer/9.avif";
import img10 from "../../assets/images/footer/10.avif";
import img11 from "../../assets/images/footer/11.avif";
import img12 from "../../assets/images/footer/12.avif";
import img13 from "../../assets/images/footer/13.avif";
import img14 from "../../assets/images/footer/14.avif";
import img15 from "../../assets/images/footer/15.avif";
import img16 from "../../assets/images/footer/16.avif";
import img17 from "../../assets/images/footer/17.avif";
import img18 from "../../assets/images/footer/18.avif";
import img19 from "../../assets/images/footer/19.avif";
import img20 from "../../assets/images/footer/20.avif";
import img21 from "../../assets/images/footer/21.avif";
import img22 from "../../assets/images/footer/22.avif";

export default function Footer() {
  const instaHandle = "@karthikphotography1";
  const instaUrl = "https://www.instagram.com/karthikphotography1/";

  const instaImages = [
    { img: img1, link: instaUrl },
    { img: img2, link: instaUrl },
    { img: img3, link: instaUrl },
    { img: img5, link: instaUrl },
    { img: img6, link: instaUrl },
    { img: img7, link: instaUrl },
    { img: img8, link: instaUrl },
    { img: img9, link: instaUrl },
    { img: img10, link: instaUrl },
    { img: img11, link: instaUrl },
    { img: img12, link: instaUrl },
    { img: img13, link: instaUrl },
    { img: img14, link: instaUrl },
    { img: img15, link: instaUrl },
    { img: img16, link: instaUrl },
    { img: img17, link: instaUrl },
    { img: img18, link: instaUrl },
    { img: img19, link: instaUrl },
    { img: img20, link: instaUrl },
    { img: img21, link: instaUrl },
    { img: img22, link: instaUrl },
  ];

  const sliderItems = [...instaImages, ...instaImages];

  const trackRef = useRef(null);
  let resumeTimer;

  const pauseThenResume = () => {
    const track = trackRef.current;
    track.style.animationPlayState = "paused";

    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      track.style.animationPlayState = "running";
    }, 1200);
  };

  const slideWithMomentum = (direction) => {
  const slider = trackRef.current.parentElement;

  pauseThenResume();

  slider.scrollBy({
    left: -direction * 340, // about one image width
    behavior: "smooth",
  });
};

  return (
    <footer className="footer">
      {/* INSTAGRAM STRIP */}
      <section className="footerInsta">
        <div className="footerInsta__head">
          <h2 className="footerInsta__title">Follow Me On Instagram</h2>
          <a
            className="footerInsta__handle"
            href={instaUrl}
            target="_blank"
            rel="noreferrer"
          >
            {instaHandle}
          </a>
        </div>

        <div className="footerInsta__slider">
          <div className="footerInsta__track" ref={trackRef}>
            {sliderItems.map((item, index) => (
              <a
                key={index}
                className="footerInsta__slide"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.img} alt="Instagram post" />
                <div className="footerInsta__overlay">
                  <FaInstagram className="footerInsta__igIcon" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Arrows
        <div className="footerInsta__arrows">
          <button onClick={() => slideWithMomentum(1)} className="instaArrow">
            ‹
          </button>
          <button onClick={() => slideWithMomentum(-1)} className="instaArrow">
            ›
          </button>
        </div> */}
      </section>

      {/* MAIN FOOTER */}
      <section className="footerMain">
        <div className="footerMain__container">
          <div className="footerMain__social">
            <a href="https://www.facebook.com/Karthik.Photography" target="_blank" rel="noreferrer" className="socialIcon socialIcon--facebook">
              <FaFacebookF />
            </a>
            <a href={instaUrl} target="_blank" rel="noreferrer" className="socialIcon socialIcon--instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@karthikphotography1/videos" target="_blank" rel="noreferrer" className="socialIcon socialIcon--youtube">
              <FaYoutube />
            </a>
            <a href="https://wa.me/916360742026" target="_blank" rel="noreferrer" className="socialIcon socialIcon--whatsapp">
              <FaWhatsapp />
            </a>
          </div>

          <nav className="footerMain__nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
          </nav>

          <p className="footerMain__copy">
            Copyright © 2025 Karthik Photography
          </p>
        </div>
      </section>
    </footer>
  );
}

import "./hero.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import display1 from "../../assets/images/hero/Display1.avif";
import display2 from "../../assets/images/hero/Display2.avif";
import display3 from "../../assets/images/hero/Display3.jpg.avif";

export default function Hero() {
  const imagesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // set initial state
    gsap.set(imagesRef.current, { opacity: 0 });
    gsap.set(imagesRef.current[0], { opacity: 1 });

    imagesRef.current.forEach((img, i) => {
      const next = imagesRef.current[(i + 1) % imagesRef.current.length];

      tl.to(img, {
        opacity: 0,
        duration: 1.8,
        ease: "power2.inOut",
        delay: 2.5,
      })
      .to(
        next,
        {
          opacity: 1,
          duration: 1.8,
          ease: "power2.inOut",
        },
        "<"
      );
    });

  }, []);

  return (
    <section className="hero">
      {[display1, display2, display3].map((img, i) => (
        <img
  key={i}
  ref={(el) => (imagesRef.current[i] = el)}
  src={img}
  className="hero-image"
  alt="Hero visual"
  loading={i === 0 ? "eager" : "lazy"}
  fetchpriority={i === 0 ? "high" : "auto"}
/>
      ))}

      <div className="hero-overlay"></div>
    </section>
  );
}

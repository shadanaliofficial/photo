import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutMosaicPremium.css";

gsap.registerPlugin(ScrollTrigger);

// ✅ 25 JPEG placeholders (keep same names)
import p01 from "../../assets/about/p01.jpeg";
import p02 from "../../assets/about/p02.jpeg";
import p03 from "../../assets/about/p03.jpeg";
import p04 from "../../assets/about/p04.jpeg";
import p05 from "../../assets/about/p05.jpeg";
import p06 from "../../assets/about/p06.jpeg";
import p07 from "../../assets/about/p07.jpeg";
import p08 from "../../assets/about/p08.jpeg";
import p09 from "../../assets/about/p09.jpeg";
import p10 from "../../assets/about/p10.jpeg";
import p11 from "../../assets/about/p11.jpeg";
import p12 from "../../assets/about/p12.jpeg";
import p13 from "../../assets/about/p13.jpeg";
import p14 from "../../assets/about/p14.jpeg";
import p15 from "../../assets/about/p15.jpeg";
import p16 from "../../assets/about/p16.jpeg";
import p17 from "../../assets/about/p17.jpeg";
import p18 from "../../assets/about/p18.jpeg";
import p19 from "../../assets/about/p19.jpeg";
import p20 from "../../assets/about/p20.jpeg";
import p21 from "../../assets/about/p21.jpeg";
import p22 from "../../assets/about/p22.jpeg";
import p23 from "../../assets/about/p23.jpeg";
import p24 from "../../assets/about/p24.jpeg";
import p25 from "../../assets/about/p25.jpeg";

export default function AboutMosaicPremium() {
  const sectionRef = useRef(null);

  const images = useMemo(
    () => [
      p01, p02, p03, p04, p05,
      p06, p07, p08, p09, p10,
      p11, p12, p13, p14, p15,
      p16, p17, p18, p19, p20,
      p21, p22, p23, p24, p25,
    ],
    []
  );

  // ✅ 12 premium statements from your about content
  const quotes = useMemo(
    () => [
      "Leading provider of wedding photography & films in Bangalore.",
      "Capturing the beauty and emotion of weddings — naturally.",
      "A passionate team of photographers & cinematographers.",
      "Innovative approach. Timeless storytelling.",
      "Packages designed for different budgets and needs.",
      "Customised services so every couple gets exactly what they want.",
      "Traditional Indian weddings to modern ceremonies — covered.",
      "Every moment captured beautifully, frame by frame.",
      "Candid emotions, cinematic visuals.",
      "Luxury weddings deserve luxury storytelling.",
      "Where memories become art.",
      "Your love story, preserved forever.",
    ],
    []
  );

  /**
   * ✅ PREMIUM CURATED EDITORIAL LAYOUT
   * Less clutter. More rhythm. Better hierarchy.
   *
   * Sizes:
   *  sm = 1x1
   *  md = 2x1  (bigger quote tiles)
   *  lg = 2x2  (hero / cinematic images)
   */
  const blocks = useMemo(
    () => [
      // ===== ROW CLUSTER 1
      { type: "img", src: images[0], size: "lg", parallax: true },
      { type: "text", text: quotes[0], size: "md" },
      { type: "img", src: images[1], size: "sm" },
      { type: "img", src: images[2], size: "sm" },
      { type: "img", src: images[3], size: "md" },
      { type: "text", text: quotes[1], size: "md" },

      // ===== HERO CENTER
      {
        type: "hero",
        size: "lg",
        top: "Karthik Photography & Films",
        big: "ABOUT",
        sub: "Wedding photography & films in Bangalore",
      },

      // ===== ROW CLUSTER 2
      { type: "img", src: images[4], size: "md" },
      { type: "img", src: images[5], size: "sm" },
      { type: "img", src: images[6], size: "sm" },
      { type: "text", text: quotes[2], size: "md" },
      { type: "img", src: images[7], size: "md" },
      { type: "text", text: quotes[3], size: "md" },

      // ===== CINEMATIC ANCHOR
      { type: "img", src: images[8], size: "lg", parallax: true },
      { type: "img", src: images[9], size: "sm" },
      { type: "img", src: images[10], size: "sm" },
      { type: "text", text: quotes[4], size: "md" },
      { type: "img", src: images[11], size: "md" },

      // ===== CLUSTER 3
      { type: "text", text: quotes[5], size: "md" },
      { type: "img", src: images[12], size: "sm" },
      { type: "img", src: images[13], size: "sm" },
      { type: "img", src: images[14], size: "md" },
      { type: "text", text: quotes[6], size: "md" },

      // ===== FINAL ANCHOR + WRAP
      { type: "img", src: images[15], size: "lg", parallax: true },
      { type: "text", text: quotes[7], size: "md" },
      { type: "img", src: images[16], size: "sm" },
      { type: "img", src: images[17], size: "sm" },
      { type: "img", src: images[18], size: "md" },

      { type: "text", text: quotes[8], size: "md" },
      { type: "img", src: images[19], size: "md" },
      { type: "img", src: images[20], size: "sm" },
      { type: "img", src: images[21], size: "sm" },

      { type: "text", text: quotes[9], size: "md" },
      { type: "img", src: images[22], size: "md" },
      { type: "text", text: quotes[10], size: "md" },
      { type: "img", src: images[23], size: "sm" },
      { type: "img", src: images[24], size: "sm" },

      { type: "text", text: quotes[11], size: "md" },
    ],
    [images, quotes]
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray(".mosaicTile");
      gsap.set(tiles, { opacity: 0, y: 36, scale: 0.985 });

      // ✅ premium reveal
      gsap.to(tiles, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // ✅ parallax on large tiles
      const parallaxImgs = gsap.utils.toArray(
        ".mosaicTile[data-parallax='true'] img"
      );

      parallaxImgs.forEach((img) => {
        gsap.fromTo(
          img,
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // ✅ IMPORTANT for image-heavy layout
      ScrollTrigger.refresh();
      window.addEventListener("load", ScrollTrigger.refresh);
    }, sectionRef);

    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="aboutMosaicPremium">
      <div className="aboutMosaicPremium__grid">
        {blocks.map((block, i) => {
          if (block.type === "img") {
            return (
              <div
                key={i}
                className={`mosaicTile mosaicTile--${block.size} mosaicTile--img`}
                data-parallax={block.parallax ? "true" : "false"}
              >
                <img src={block.src} alt="portfolio" />
                <div className="mosaicTile__shade" />
              </div>
            );
          }

          if (block.type === "hero") {
            return (
              <div
                key={i}
                className={`mosaicTile mosaicTile--${block.size} mosaicTile--hero`}
              >
                <p className="mosaicHero__top">{block.top}</p>
                <h3 className="mosaicHero__big">{block.big}</h3>
                <p className="mosaicHero__sub">{block.sub}</p>
              </div>
            );
          }

          return (
            <div
              key={i}
              className={`mosaicTile mosaicTile--${block.size} mosaicTile--text`}
            >
              <p className="mosaicQuote">{block.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

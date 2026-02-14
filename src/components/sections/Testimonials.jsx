import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./testimonials.css";

import t1 from "../../assets/images/review/1.avif";
import t2 from "../../assets/images/review/2.avif";
import t3 from "../../assets/images/review/3.avif";
import t4 from "../../assets/images/review/4.avif";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const imageWrapRef = useRef(null);
  const contentWrapRef = useRef(null);

  const testimonials = [
  {
    image: t1,
    date: "",
    heading: "A Beautiful Story Told Through Frames",
    text:
      "I don’t have enough words to thank Kartik and his team. They were an absolute pleasure to work with throughout our wedding. From the very beginning, they made everything feel easy and comfortable, even with so much happening around us. They were calm, incredibly understanding and never once made us feel rushed or overwhelmed. What we loved most was how relaxed and fun the entire experience felt — there was so much warmth and laughter behind the scenes. That comfort truly shows in the photos, which capture real, beautiful moments just as they happened. We are sooo grateful to the team for capturing our day so thoughtfully and for being such a wonderful part of the journey.",
    name: "Isha & Arun",
  },
  {
    image: t2,
    date: "",
    heading: "Pure Magic — Every Picture Feels Alive",
    text:
      "We’re so glad we chose you for our wedding in Bangalore! From start to finish, the entire team was incredibly professional and cooperative. All of you were extremely patient, understood the stress and emotions that come with wedding celebrations, and made sure everything was handled with ease. The calm approach helped us enjoy our day without worry. Also, the photos and videos delivered were outstanding! Everything captured with so much detail, emotion, and creativity. Every time we look back at them, we relive those moments. Thank you, Karthik and the entire team for your dedication and for giving us memories we’ll cherish forever. Highly recommended!",
    name: "Deepika & Sandesh",
  },
  {
    image: t3,
    date: "",
    heading: "Beyond Photography — An Experience We’ll Remember",
    text:
      "I first came across Karthik Photography at a friend’s wedding, and I was already impressed by how organised, warm, and lively the entire team was. I instantly decided I want them only.  When it came to my own wedding, working with them felt effortless. They’re extremely punctual, easy to coordinate with, and very patient in understanding what you want. What really stood out was the effort the entire teams heartily puts in and how well they understood our aesthetic and Karthik and his team is accommodative, never fussy, and creates a very comfortable space, which is so important when someone is capturing such an emotional and important day. The quality of the photos, videos, and albums is excellent, and the team comes well-prepared with great manpower. I’m extremely happy with the results and truly couldn’t have hoped for better. Highly recommend Karthik Photography",
    name: "Rachana & Nidhaga",
  },
  {
    image: t4,
    date: "",
    heading: "A Beautiful Story Told Through Frames",
    text:
      "There just aren’t enough words to possibly describe how amazing each and every photo that karthik has photographed .He has a magical way of finding the perfect angle, lighting and of course expressions. I would never hesitate to recommend him to anyone who wants a true professional photos and videos amazing skills,innovative ideas and never compromise with the outfits..he creates a very new concept’s for all the couples.. And by the end of the shoots karthik and his team have been a part of our family the coincidence is my husband name is also karthik everytime I used to call karthik both were also responding the whole team is just amazing. Even my cousin also had karthik photographer for her wedding…many of my cousins are waiting to have their wedding shoots by karthik I could say that my wedding was never this good without the team. Waiting for upcoming events to hand over him. Thank you karthik for making my wedding soooooooooooooooooo beautifully by capturing each and every shoot precisely. Lots of love to you - By Karthik BE and Pooja DK.",
    name: "Pooja & Karthik",
  },
];

  const item = testimonials[active];

  // smooth animation whenever active changes
  useLayoutEffect(() => {
    const imgEl = imageWrapRef.current;
    const contentEl = contentWrapRef.current;
    if (!imgEl || !contentEl) return;

    // kill any running animation for smoothness
    gsap.killTweensOf([imgEl, contentEl]);

    const tl = gsap.timeline();

    tl.fromTo(
      imgEl,
      { opacity: 0, y: 16, scale: 0.985 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
    ).fromTo(
      contentEl,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      "-=0.45"
    );

    return () => tl.kill();
  }, [active]);

  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">Testimonials</h2>

      <div className="testimonials__container">
        {/* LEFT IMAGE */}
        <div className="testimonials__left">
          <div ref={imageWrapRef} className="testimonials__anim">
            <div className="testimonialsArch">
              <div className="testimonialsArch__frame">
                <div className="testimonialsArch__arch">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="testimonials__right">
          <div className="testimonialsBox">
            <div ref={contentWrapRef} className="testimonials__anim">
              <p className="testimonialsBox__date">{item.date}</p>

              <h3 className="testimonialsBox__title">{item.heading}</h3>

              <p className="testimonialsBox__text">{item.text}</p>

              <p className="testimonialsBox__name">{item.name}</p>
            </div>

            {/* DOTS */}
            <div className="testimonialsDots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonialsDots__dot ${
                    i === active ? "is-active" : ""
                  }`}
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

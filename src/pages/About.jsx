import "./about.css";
import { useEffect, useState } from "react";
import leftDoor from "/images/door-left.jpeg";
import rightDoor from "/images/door-right.jpeg";
import awardImg from "/images/award.png";

export default function About() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const zone = document.querySelector(".doorZone");
    const section = document.querySelector(".doorReveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only open when intersecting (centered)
        if (entry.isIntersecting) {
          section.classList.add("open");
        } else {
          section.classList.remove("open");
        }
      },
      {
        threshold: 0.6, // ← Needs 60% in view (more centered)
        rootMargin: "-10% 0px -10% 0px", // ← Must be more centered vertically
      }
    );

    observer.observe(zone);

    return () => {
      observer.disconnect();
    };
  }, []);

  const faqs = [
    {
      question: "What Types Of Photography Services Do You Offer?",
      answer: "We offer a wide range of photography services, including portrait photography, wedding photography, event photography, commercial photography, product photography, and more."
    },
    {
      question: "How Much Do Your Photography Services Cost?",
      answer: "Our pricing varies depending on the type of service, duration, and specific requirements. We offer customized packages to suit different budgets, so feel free to contact us for a quote."
    },
    {
      question: "Can You Travel For Destination Weddings Or Events?",
      answer: "Absolutely! We love capturing memories in new locations. We are available for destination weddings and events and will tailor a package to meet your needs."
    },
    {
      question: "Do You Provide Digital Copies Of The Photos?",
      answer: "Yes, all our packages include high-resolution digital copies of the edited photos. You'll receive the images in a secure online gallery for easy downloading and sharing.Toggle Content"
    },
    {
      question: "How Soon Can We Expect To Receive The Final Photos?",
      answer: "The turnaround time for photo delivery depends on the type of shoot and the number of images taken. Typically, for events, it takes around 2-4 weeks, while portrait sessions may be delivered sooner."
    },
    {
      question: "What Equipment Do You Use, And Do You Have Backup Gear?",
      answer: "We use top-of-the-line professional cameras, lenses, and lighting equipment to ensure the best results. Yes, we always carry backup equipment to ensure a smooth shooting experience."
    }
  ];

  return (
    <>
      {/* HERO IMAGE SECTION */}
      <section className="about-hero">
        <img
          src="/images/page-hero/About.jpg"
          alt="About"
          className="about-hero__image"
        />
        <div className="about-hero__overlay">
          <h1 className="about-hero__title"></h1>
        </div>
      </section>

      {/* DOOR REVEAL */}
      <section className="doorReveal">
        <div className="doorZone">
          <div className="door door--left">
            <img src={leftDoor} alt="" />
          </div>
          <div className="door door--right">
            <img src={rightDoor} alt="" />
          </div>

          <div className="doorContent">
            <div className="aboutBlock">
              <h2>Karthik Photography & Films</h2>
              <p>
                Karthik Photography & Films is a leading provider of wedding
                photography and films services in Bangalore.
              </p>
              <p>
                We are known for our innovative approach to capturing the beauty and emotion of weddings, Our team consists of
highly skilled photographers and cinematographers who have a passion for creating stunning imagery.

              </p>
              <p>
                The company offers a range of packages to suit different budgets and needs. We also provide customised services
to ensure that every couple gets exactly what they want. Whether it’s a traditional Indian wedding or a modern
Western-style ceremony, Karthik Photography & Films has the expertise and experience to capture every moment
beautifully.
              </p>
            </div>
          </div>
        </div>

        <div className="awardBlock">
          <h3>Recognised In</h3>
          <img src={awardImg} alt="Award" />
        </div>
      </section>

      {/* FAQ */}
      <section className="faqSection">
        <h2 className="faqTitle">FAQ</h2>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faqItem ${open === i ? "open" : ""}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faqQuestion">
              <span className={`faqArrow ${open === i ? "open" : ""}`}>▸</span>
              <h3>{faq.question}</h3>
            </div>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
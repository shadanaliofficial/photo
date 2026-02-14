import "./contact.css";

export default function Contact() {
  return (
    <>
      {/* HERO IMAGE SECTION */}
      <section className="contact-hero">
        <img
          src="/images/page-hero/Contact.avif"   // put image in public/images
          alt="Contact"
          className="contact-hero__image"
        />

        <div className="contact-hero__overlay">
          <h1 className="contact-hero__title"></h1>
        </div>
      </section>

      {/* EXISTING CONTENT (UNCHANGED) */}
      <section className="contactWrap">

        <h1 className="contactTitle"></h1>

        <div className="contactText">
          <h2>Karthik Photography & Films</h2>

          <p>
            Please fill in the form below and provide as much details as possible to help us create an accurate quote.
          </p>

          <p>
            We will try to get back within 48hrs, give us a call on the number below if you don’t hear from us or if its a last minute enquiry.
          </p>

          <p>
            Please go through our FAQ section to find answers to some common questions.
          </p>

          <div className="contactMeta">
            <span>hello@karthikphotography.in</span>
            <span>+91 6360742026</span>
            <span>Bangalore</span>
          </div>
        </div>

        <div className="formOuter">
          <form className="contactForm">

            <label>Name (Required)</label>
            <input />

            <label>Email Address (Required)</label>
            <input />

            <label>Phone (Required)</label>
            <input />

            <label>Estimated Guest Count (Required)</label>
            <input />

            <label>
              Tell Us More About Your Wedding – Event Flow, Venues (Required)
            </label>
            <textarea />

            <label>Location Of The Wedding (Required)</label>
            <input />

            <label>Event Dates (Required)</label>
            <input />

            <p className="serviceTitle">What Services Are You Looking For ?</p>

            <div className="serviceOptions">

              <label className="serviceOption">
                <input type="radio" name="service" />
                Photography
              </label>

              <label className="serviceOption">
                <input type="radio" name="service" />
                Films
              </label>

              <label className="serviceOption">
                <input type="radio" name="service" />
                Both Photography and Films
              </label>

            </div>

            <button>Submit</button>

          </form>
        </div>

      </section>
    </>
  );
}

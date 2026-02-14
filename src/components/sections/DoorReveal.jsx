import "./doorReveal.css";

import leftImg from "../../assets/images/classic-moments/portfolio3.webp";   // replace with your portrait image
import rightImg from "../../assets/images/classic-moments/portfolio2.webp"; // replace with your landscape image

export default function ModernApproach() {
  return (
    <section className="modernApproach">
      <div className="modernApproach__container">
        {/* heading */}
        <h2 className="modernApproach__heading">
          <span className="modernApproach__headingTop">CLASSIC MOMENTS</span>
          <span className="modernApproach__headingMid"></span>
          <span className="modernApproach__headingBottom">CONTEMPORARY FRAMES</span>
        </h2>

        {/* content */}
        <div className="modernApproach__grid">
          <div className="modernApproach__img modernApproach__img--left">
            <img src={leftImg} alt="Portrait" />
          </div>

          <div className="modernApproach__text">
            <p>
              Karthik Photography & Films is a leading provider of wedding photography
              and films services in Bangalore.
            </p>

            <p>
              We are known for our innovative approach to capturing the beauty and
              emotion of weddings. Our team consists of highly skilled photographers and
              cinematographers who have a passion for creating stunning imagery.
            </p>

            <p>
              The company offers a range of packages to suit different budgets and needs.
              We also provide customised services to ensure that every couple gets exactly
              what they want.
            </p>
          </div>

          <div className="modernApproach__img modernApproach__img--right">
            <img src={rightImg} alt="Landscape" />
          </div>
        </div>

      </div>
    </section>
  );
}

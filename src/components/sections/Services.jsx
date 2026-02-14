import "./services.css";

export default function Services() {
  const services = [
    {
      title: "Wedding\nPhotography",
      desc:
        "Capturing all the magical moments of a wedding from the pre-wedding shoots to the actual ceremony",
    },
    {
      title: "Portrait\nPhotography",
      desc:
        "Providing professional portrait sessions for individuals, families, couples, and professionals.",
    },
    {
      title: "Fashion\nPhotography",
      desc:
        "Working with models, designers, and brands to produce captivating fashion images for editorial, catalogs",
    },
    {
      title: "Birthday\nPhotography",
      desc:
        "Unforgettable birthday memories captured by our expert photographer, preserved forever.",
    },
    {
      title: "Event\nPhotography",
      desc:
        "Covering various events such as birthdays, gatherings, and other special occasions",
    },
  ];

  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__heading">Our Services</h2>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="serviceCard" key={index}>
              <h3 className="serviceCard__title">
                {service.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <p className="serviceCard__desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

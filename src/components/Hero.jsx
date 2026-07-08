import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Premium <span>Car Painting</span> & Body Works
        </h1>

        <p className="hero-description">
          Give your vehicle a brand-new look with expert spray painting,
          accident repairs, dent removal, polishing, and body restoration in
          Entebbe, Uganda.
        </p>

        <p className="hero-sub">
          ✨ Trusted craftsmanship • Premium finishes • Customer satisfaction
        </p>

        <div className="hero-buttons">
          <a href="#services" className="btn primary">
            Explore Services
          </a>

          <a
            href="https://wa.me/256745937627"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
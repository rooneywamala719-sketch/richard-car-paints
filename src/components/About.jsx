import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-text">
          <h2 className="title">About Richard Car Paints</h2>

          <p className="subtitle">
            Richard Car Paints is a trusted automotive body repair and painting
            workshop located in Entebbe, Uganda. We are committed to delivering
            high-quality workmanship using premium automotive paints and modern
            repair techniques.
          </p>

          <p>
            Whether your vehicle needs a complete repaint, dent removal, scratch
            repair, polishing, or accident restoration, our experienced team is
            ready to bring it back to life with a professional finish.
          </p>

          <button className="about-btn">
            Learn More
          </button>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car Painting"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
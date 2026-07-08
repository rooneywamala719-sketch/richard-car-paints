import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>
            Richard <span>Car Paints</span>
          </h2>
          <p>
            Professional car painting, body repairs, polishing and accident
            restoration in Entebbe, Uganda.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Entebbe, Uganda</p>
          <p>📞 +256 753 010 833</p>
          <p>✉️ info@richardcarpaints.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Richard Car Paints. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
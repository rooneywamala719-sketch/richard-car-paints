import "./Map.css";

function Map() {
  return (
    <section id="location" className="map-section">
      <div className="map-header">
        <h2 className="title">Visit Richard Car Paints</h2>
        <p className="subtitle">
          We are located near Innophine Hotel, Entebbe, Uganda.
        </p>
      </div>

      <div className="map-wrapper">
        {/* Google Map */}
        <div className="map-container">
          <iframe
  title="Richard Car Paints Location"
  src="https://www.google.com/maps?q=Innophine+Hotel+Entebbe+Uganda&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>
        </div>

        {/* Business Details */}
        <div className="location-details">
          <h3>Richard Car Paints</h3>

          <p>
            📍 Near Innophine Hotel,<br />
            Entebbe, Uganda
          </p>

          <p>📞 +256 753 010 833</p>

          <p>📧 info@richardcarpaints.com</p>

          <p>🕒 Monday – Saturday</p>
          <p>8:00 AM – 6:00 PM</p>

          <a
            href="https://maps.app.goo.gl/A3m6HQqkfLvCcMe86"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default Map;
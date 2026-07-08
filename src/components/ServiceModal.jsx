function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <h2>{service.title}</h2>
        <p>{service.desc}</p>

        <p style={{ marginTop: "15px", color: "#ccc" }}>
          We provide high-quality professional service in Entebbe using premium materials and expert technicians.
        </p>

        <button onClick={onClose} className="close-btn">
          Close
        </button>

      </div>
    </div>
  );
}

export default ServiceModal;
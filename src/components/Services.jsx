import { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";
import "./Services.css";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: "Full Car Painting", desc: "Complete vehicle repainting with premium finishes." },
    { title: "Scratch Repair", desc: "Remove scratches and restore original paint." },
    { title: "Dent Removal", desc: "Professional body dent fixing and panel beating." },
    { title: "Polishing", desc: "Make your car shine like new." },
  ];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="title">Our Services</h2>
      <p className="subtitle">Click any service to view details</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            onClick={() => setSelectedService(service)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </motion.section>
  );
}

export default Services;
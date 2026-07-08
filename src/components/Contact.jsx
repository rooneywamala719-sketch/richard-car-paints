import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
      `Hello Richard Car Paints%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Message: ${form.message}`;

    window.open(
      `https://wa.me/256745937627?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section id="contact">
      <h2 className="title">Contact Us</h2>
      <p className="subtitle">Get a free quote instantly</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your car..."
          onChange={handleChange}
          required
        />

        <button type="submit">Send via WhatsApp</button>
      </form>
    </section>
  );
}

export default Contact;
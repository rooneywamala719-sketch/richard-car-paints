import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "John K.",
      text: "Amazing paint job! My car looks brand new. Highly recommend Richard Car Paints.",
    },
    {
      name: "Sarah N.",
      text: "Very professional service and fast delivery. The finish was perfect!",
    },
    {
      name: "Michael A.",
      text: "Best car painters in Entebbe. Affordable and high quality work.",
    },
  ];

  return (
    <section id="testimonials">
      <h2 className="title">What Customers Say</h2>

      <div className="testimonials-grid">
        {reviews.map((r, index) => (
          <div key={index} className="testimonial-card">
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
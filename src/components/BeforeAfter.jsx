import CompareImage from "react-compare-image";
import "./BeforeAfter.css";

function BeforeAfter() {
  return (
    <section id="beforeafter">
      <h2 className="title">Before & After Results</h2>
      <p className="subtitle">Drag to see transformation</p>

      <div className="compare-box">
        <CompareImage
          leftImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          rightImage="https://images.unsplash.com/photo-1489824904134-891ab64532f1"
        />
      </div>
    </section>
  );
}

export default BeforeAfter;
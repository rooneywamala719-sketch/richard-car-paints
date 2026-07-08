import { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    "https://images.unsplash.com/photo-1542362567-b07e54358753",
  ];

  return (
    <section id="gallery">
      <h2 className="title">Our Work Gallery</h2>
      <p className="subtitle">Click to view full image</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="gallery-img"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <motion.img
            src={selectedImage}
            className="lightbox-img"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        Richard <span>Car Paints 🚗</span>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={open ? "nav open" : "nav"}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <a href="#contact" className="quote-btn">
  Get a Quote
</a>
    </header>
  );
}

export default Navbar;
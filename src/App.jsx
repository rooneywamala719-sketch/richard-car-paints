import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
<Map />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <BeforeAfter />
      <Testimonials />
    </>
  );
}

export default App;
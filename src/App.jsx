import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Gallery />
        <Title subTitle="Testimonials" title="What Students Say" />
        <Testimonial />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;

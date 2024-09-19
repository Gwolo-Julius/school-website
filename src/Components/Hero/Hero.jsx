import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Quality Education For Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with
          knowledge, skills and experiences required in the dynamic filed of
          Education
        </p>
        <button className="btn hero_btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

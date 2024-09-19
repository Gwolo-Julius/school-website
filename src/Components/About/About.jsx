import React from "react";
import "./About.css";
import about__img from "../../assets/about.png";
import play__icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about__img} alt="about" className="about-img" />
        <img src={play__icon} alt="play icon" className="about-play" />
      </div>
      <div className="about_right">
        <h3>About university</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          desinged to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic filed of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalize
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shalping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;

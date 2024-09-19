import React, { useRef } from "react";
import "./Testimonial.css";

import back__icon from "../../assets/back-icon.png";
import next__icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonial">
      <img
        src={back__icon}
        alt="back icon"
        className="back-btn"
        onClick={slideForward}
      />
      <img
        src={next__icon}
        alt="next icon"
        className="next-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_1} alt="next icon" className="user-1" />
                <div>
                  <h3>Malley Jackie</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectiations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_2} alt="next icon" className="user-2" />
                <div>
                  <h3>Bob Deogo</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectiations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_3} alt="next icon" className="user-3" />
                <div>
                  <h3>Cynthia Sue</h3>
                  <span>Canada, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectiations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_4} alt="next icon" className="user-4" />
                <div>
                  <h3>Betty Namaganda</h3>
                  <span>Uganda, East Africa</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectiations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import "./about.scss";
import image2 from "../../assets/images/image2.png";
import bg2 from "../../assets/bg2.svg";
import dots from "../../assets/dots.svg";

const About = () => {
  return (
    <div id="About">
      <div className="section2">
        <div className="one">
          <h4>
            About me<span style={{ color: "#fd5956" }}>.</span>
          </h4>

          <div className="para">
            <p>
              I'm Justin Vaccaro and i do web design, Graphic Design, User
              Experiences. habitant et netus et malesuada fames ac turpis
              egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
              tempor sit amet.
            </p>
          </div>
        </div>

        <div className="dopic">
          <div className="dots">
            <img src={dots} alt="dots" />
          </div>

          <div className="picture">
            <img src={image2} alt="profile picture" />
          </div>
        </div>
        {/* <div className="spiral">
          <img src={bg2} alt="spiral" />
        </div> */}
        {/* <div className="another-dot">.</div> */}
      </div>
    </div>
  );
};

export default About;

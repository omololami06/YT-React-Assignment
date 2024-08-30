import React from "react";
import "./creative.scss";
import logo from "../../assets/logo.svg";

import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import tweet from "../../assets/tweet.svg";
import linkedIn from "../../assets/linkedIn.svg";
import line1 from "../../assets/line1.svg";
import image from "../../assets/image.png";
import menu from "../../assets/menu.svg";
import Portfolio from "../Portfolio/Portfolio";

const Creative = () => {
  function handleClick() {
    window.open("https://omololami06.github.io/My-Portfolio/");
  }
  return (
    <div id="Creative">
      <div className="section">
        <nav>
          <ol>
            <li>
              <span>
                <img src={logo} alt="logo" />
              </span>
            </li>
            <li>
              <span className="home">
                <a href="">Home</a>
                <a href="">Contributors</a>
                <a className="me" href="">
                  About me
                </a>
                <a href="">Services</a>
                <a href="">Portfolio</a>
                <a href="">Contact</a>
              </span>
            </li>
            <li>
              <span className="port">
                <a onClick={() => handleClick()} href="">
                  {" "}
                  Portfolio Here
                </a>
              </span>
            </li>
          </ol>
        </nav>

        <div className="both">
          <div className="left">
            <div className="hola">
              <h6>Hola! I’m </h6>
              <h4>Justin Vaccaro</h4>
            </div>

            <div className="credes">
              <div>Creative</div>
              <div className="design">
                Designer
                <span style={{ color: "#fd5956" }}>.</span>
              </div>
            </div>

            <div>
              <p>
                Since creative designers often interact with creative teams,
                managers and clients, they need strong communication skills.
              </p>
            </div>

            <div className="icons">
              <img src={fb} alt="facebook logo" />
              <img src={insta} alt="instagram logo" />
              <img src={tweet} alt="twitter logo" />
              <img src={linkedIn} alt="linkedIn logo" />
            </div>

            <button onClick={() => handleClick()}>CV Here</button>
          </div>

          <div className="right">
            <div className="image">
              <img src={image} alt="" />
            </div>
          </div>
        </div>

        <div className="line">
          <img src={line1} alt="spiral" />
        </div>
      </div>
    </div>
  );
};

export default Creative;

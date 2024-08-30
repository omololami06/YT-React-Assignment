import React from "react";
import "./footer.scss";
import footer from "../../assets/footer.svg";
import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import tweet from "../../assets/tweet.svg";
import linkedIn from "../../assets/linkedIn.svg";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="section6">
        <div className="container">
          <img src={footer} alt="" />

          <div className="contact">
            <h4>
              Contact<span style={{ color: "#fd5956" }}>.</span>
            </h4>
            <div className="truth">
              <p>
                Truth is a deep kindness that teaches us to be content in our
                everyday life and share with the people the same happiness. the
                feeling of sunday is the same everywhere: heavy, melancholy,
                standing still.
              </p>
            </div>
          </div>

          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>

          <div className="footer-icons">
            <img src={fb} alt="facebook logo" />
            <img src={insta} alt="instagram logo" />
            <img src={tweet} alt="twitter logo" />
            <img src={linkedIn} alt="linkedIn logo" />
          </div>

          <div>
            <p>© 2021 AbbVie Inc. . All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Contributors.scss";
import behance from "../../assets/behance.svg";
import google from "../../assets/google.svg";
import dribble from "../../assets/dribble.svg";
import up from "../../assets/up.svg";
import designs from "../../assets/designs.svg";

const Contributors = () => {
  return (
    <div id="Contributors">
      <div className="section4">
        <div className="one">
          <h4>
            Contributors<span style={{ color: "#fd5956" }}>.</span>
          </h4>

          <div className="port">
            <p>
              They support products that simplify and automate decent mechanic
              processes saving time for activities.
            </p>
          </div>
        </div>

        <div className="two">
          <div className="images google">
            <div>
              <img src={behance} alt="" />
            </div>
            <div>
              <img src={google} alt="" />
            </div>
            <div>
              <img src={dribble} alt="" />
            </div>
          </div>

          <div className="images labs">
            <div>
              <img src={up} alt="" />
            </div>
            <div>
              <img src={designs} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;

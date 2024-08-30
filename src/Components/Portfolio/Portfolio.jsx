import React from "react";
import "./portfolio.scss";
import cup from "../../assets/cup.svg";
import brown from "../../assets/brown.svg";
import corner from "../../assets/corner.svg";
import wall from "../../assets/wall.svg";
import flower from "../../assets/flower.svg";

const Portfolio = () => {
  return (
    <div id="Portfolio">
      <div className="section5">
        <div className="our">
          <h5>Our Regular Updated</h5>

          <div>
            <h4>Portfolio.</h4>
          </div>
        </div>

        <div className="grid-container">
          <div className="item1">{/* <img src={cup} alt="" /> */}</div>
          <div className="item2">{/* <img src={brown} alt="" /> */}</div>
          <div className="item3">{/* <img src={corner} alt="" /> */}</div>
          <div className="item4">{/* <img src={wall} alt="" /> */}</div>
          <div className="item5">{/* <img src={flower} alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

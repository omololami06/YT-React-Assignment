import React from "react";
import "./services.scss";
import u from "../../assets/u.svg";
import web from "../../assets/web.svg";
import dev from "../../assets/dev.svg";
const Services = () => {
  return (
    <div id="Services">
      <div className="section3">
        <div className="div1">
          <h4>
            Services<span style={{ color: "#fd5956" }}>.</span>
          </h4>
          <div className="parag">
            <p>
              Our team members are experts in all facets of the design industry
              including: print design, illustration, branding, identity and
              more.
            </p>
          </div>
        </div>

        <div className="div2">
          <div className="same Designed">
            <div>
              <img src={u} alt="" />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>

          <div className="same web">
            <div>
              <img src={web} alt="" />
            </div>
            <h3>Web Design</h3>
            <p>
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>

          <div className="same wp">
            <div>
              <img src={dev} alt="" />
            </div>
            <h3>WP Developing</h3>
            <p>
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

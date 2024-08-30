import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    // <div id="Nav">

    <>
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
              <a href=""> Portfolio Here</a>
            </span>
          </li>
        </ol>
      </nav>
    </>
    // </div>
  );
};

export default Nav;

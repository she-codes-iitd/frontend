import React, { useState } from "react";
import "./css/MentorDash.css";
import NavBarLoggedIn from ".././NavBarLoggedIn";

function HeaderSmall(props) {
  return (
    <div id="headersmall">
      <NavBarLoggedIn
        logo={props.logo}
        hamburger={props.hamburger}
        navMenu={props.navMenu}
        setHamburger={props.setHamburger}
        setNav={props.setNav}
      />

      <div id="small_header">
        <div className="left_comp">
          <span className="text-white">{props.heading1}</span>
        </div>
        <div className="right_comp">
          <a href={props.link} class="edit_button">
            {props.button}
          </a>
          <div className="content">
            <span className="text-white">{props.heading2}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderSmall;

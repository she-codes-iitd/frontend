import React from "react";
import { Link } from "react-router-dom";
import HeaderM from "./HeaderM";

function AssignmentStats(props) {
  return (
    <>
      <div id="contain">
        <img id="bg" className="img-fluid2" alt="" />
        <HeaderM
          logo={props.logo}
          hamburger={props.hamburger}
          navMenu={props.navMenu}
          setHamburger={props.setHamburger}
          setNav={props.setNav}
          heading={"Assignments"}
          desc={"Video Title"}
          button="+ Add Assignment"
          imglink="https://image.freepik.com/free-vector/business-man-dealing-multi-task-new-idea-working-laptop-concept-business-goals-success-satisfying-achievement_1150-39765.jpg"
        />
      </div>

      
    </>
  );
}

export default AssignmentStats;

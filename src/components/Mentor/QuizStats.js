import React from "react";
import { Link } from "react-router-dom";
import HeaderSmall from "./HeaderSmall";
import TableEntry from "./TableEntry";
function QuizStats(props) {
  return (
    <>
      <div id="contain">
        <HeaderSmall
          logo={props.logo}
          hamburger={props.hamburger}
          navMenu={props.navMenu}
          setHamburger={props.setHamburger}
          setNav={props.setNav}
          heading1={"Assignments"}
          heading2={"Course Name"}
          button="Back"
          link="/mentor/id/ongoing/currtopic/quiz"
        />
      </div>
      <div class="row-tables">
        <div className="entry-wrapper">
          <TableEntry
            serial="1"
            name="Animesh"
            marks="10"
            time="18:11"
            end="🚩"
          />
        </div>
        <div className="entry-wrapper">
          <TableEntry
            serial="2"
            name="Hsemina"
            marks="90"
            time="17:11"
            end="🚩"
          />
        </div>
        <div className="entry-wrapper">
          <TableEntry
            serial="3"
            name="Rakesh Singh Sisodiya Chauhan"
            marks="100"
            time="14:12"
          />
        </div>
      </div>
    </>
  );
}

export default QuizStats;

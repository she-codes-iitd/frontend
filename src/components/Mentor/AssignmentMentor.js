import React from "react";
import { Link } from "react-router-dom";
import HeaderM from "./HeaderM";

function AssignmentMentor(props) {
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

      <div class="courses-container">
        <div class="course">
          <div class="course-info">
            <h6>Assignment 1</h6>
            <h2>Need for JavaScript</h2>
            <Link to="/mentor/id/ongoing/currtopic/assignment/delete">
            <button class="btncourse btncourse1">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/assignment/edit">
            <button class="btncourse btncourse2">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/assignment/stats">
            <button class="btncourse btncourse3">Statistics</button>
            </Link>
            <div className= "AssDesc">
              <h6>Assignment Description</h6>
              <span>Deadline
                <a href="#" >Edit Deadline</a>
              </span>
              </div>
          </div>
        </div>

        <div class="course">
          <div class="course-info">
            <h6>Assignment 2</h6>
            <h2>Need for Coding</h2>
            <Link to="/mentor/id/ongoing/currtopic/assignment/delete">
            <button class="btncourse btncourse1">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/assignment/edit">
            <button class="btncourse btncourse2">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/assignment/stats">
            <button class="btncourse btncourse3">Statistics</button>
            </Link>
            <div className= "AssDesc">
              <h6>Assignment Description</h6>
              <span>Deadline 
                <a href="#" >Edit Deadline</a>
              </span>
              </div>
          </div>
        </div>

        <div class="course">
          <div class="course-info">
            <h6>Assignment 3</h6>
            <h2>Need for Studying</h2>
            <Link to="/mentor/id/ongoing/currtopic/assignment/delete">
            <button class="btncourse btncourse1">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/assignment/edit">
            <button class="btncourse btncourse2">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/assignment/stats">
            <button class="btncourse btncourse3">Statistics</button>
            </Link>
            <div className= "AssDesc">
              <h6>Assignment Description</h6>
              <span>Deadline
                <a href="#" >Edit Deadline</a>
              </span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentMentor;

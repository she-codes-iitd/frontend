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
          link={"/mentor/id/ongoing/currtopic/assignment/add"}
          button="+ Add Assignment"
          imglink="https://image.freepik.com/free-vector/business-man-dealing-multi-task-new-idea-working-laptop-concept-business-goals-success-satisfying-achievement_1150-39765.jpg"
        />
      </div>

      <div class="courses-container">
        
      <div className= "course">
          <div className= "quiz-left">
            <h6>Assignment 1</h6>
            <h2>Need for JavaScript</h2>
            <div className= "AssDesc">
              <h6>Assignment Description</h6>
              <div>Deadline 
                <a href="#" >Edit Deadline</a>
              </div>
            </div>
          </div>
          <div className= "quiz-right">
            <Link to="/mentor/id/ongoing/currtopic/quiz/delete">
            <button class="btncourse ">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/edit">
            <button class="btncourse ">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/stats">
            <button class="btncourse ">Statistics</button>
            </Link>
          </div>
        </div>

        <div className= "course">
          <div className= "quiz-left">
            <h6>Assignment 2</h6>
            <h2>Need for Coding</h2>
            <div className= "AssDesc">
              <h6>Assignment Description</h6>
              <div>Deadline 
                <a href="#" >Edit Deadline</a>
              </div>
            </div>
          </div>
          <div className= "quiz-right">
            <Link to="/mentor/id/ongoing/currtopic/quiz/delete">
            <button class="btncourse ">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/edit">
            <button class="btncourse ">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/stats">
            <button class="btncourse ">Statistics</button>
            </Link>
          </div>
        </div>

        <div className= "course">
          <div className= "quiz-left">
            <h6>Assignment 3</h6>
            <h2>Need for Studying</h2>
            <div className= "AssDesc">
              <h6>Assignment Description</h6>
              <div>Deadline 
                <a href="#" >Edit Deadline</a>
              </div>
            </div>
          </div>
          <div className= "quiz-right">
            <Link to="/mentor/id/ongoing/currtopic/quiz/delete">
            <button class="btncourse ">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/edit">
            <button class="btncourse ">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/stats">
            <button class="btncourse ">Statistics</button>
            </Link>
          </div>
        </div>
       </div>
    </>
  );
}

export default AssignmentMentor;

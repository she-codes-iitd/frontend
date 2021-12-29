import React from "react";
import { Link } from "react-router-dom";
import HeaderM from "./HeaderM";

function QuizMentor(props) {
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
          heading={"Quizes"}
          desc={"Video Title"}
          button="+ Add Quiz"
          imglink="https://image.freepik.com/free-vector/quiz-comic-pop-art-style_175838-505.jpg"
        />
      </div>

      <div class="courses-container">
        <div class="course">
          <div class="course-info">
            <h6>Quiz 1</h6>
            <h2>Need for JavaScript</h2>
            <Link to="/mentor/id/ongoing/currtopic/quiz/delete">
            <button class="btncourse btncourse1">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/edit">
            <button class="btncourse btncourse2">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/stats">
            <button class="btncourse btncourse3">Statistics</button>
            </Link>
            <div className= "AssDesc">
              <h6>Quiz Description</h6>
              <span>Deadline
                <a href="#" >Edit Deadline</a>
              </span>
              </div>
          </div>
        </div>

        <div class="course">
          <div class="course-info">
            <h6>Quiz 2</h6>
            <h2>Need for Coding</h2>
            <Link to="/mentor/id/ongoing/currtopic/quiz/delete">
            <button class="btncourse btncourse1">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/edit">
            <button class="btncourse btncourse2">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/stats">
            <button class="btncourse btncourse3">Statistics</button>
            </Link>
            <div className= "AssDesc">
              <h6>Quiz Description</h6>
              <span>Deadline 
                <a href="#" >Edit Deadline</a>
              </span>
              </div>
          </div>
        </div>

        <div class="course">
          <div class="course-info">
            <h6>Quiz 3</h6>
            <h2>Need for Studying</h2>
            <Link to="/mentor/id/ongoing/currtopic/quiz/delete">
            <button class="btncourse btncourse1">Delete</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/edit">
            <button class="btncourse btncourse2">Edit</button>
            </Link>
            <Link to="/mentor/id/ongoing/currtopic/quiz/stats">
            <button class="btncourse btncourse3">Statistics</button>
            </Link>
            <div className= "AssDesc">
              <h6>Quiz Description</h6>
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

export default QuizMentor;

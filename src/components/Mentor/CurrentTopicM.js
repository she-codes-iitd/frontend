import React from "react";
import { Link } from "react-router-dom";
import HeaderM from "./HeaderM";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function CurrentTopic(props) {
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
          heading={"Current Topic"}
          desc={"This topic explains you the basics of an array"}
          button="Edit Description"
          imglink="https://image.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg"
        />
      </div>

      <div className="wrapper">
        <div className="flex-container">
          <div className="boxM">
            <h4 className="inline"> Uploaded Videos</h4>
          </div>
          <div className="boxM">
            <div className="icon icon-fill ">
              <i className="fa fa-play"></i>
            </div>
            <div className="icon icon-fill">
              <i className="fa fa-plus"></i>
            </div>
            <div className="icon icon-fill">
              <i className="fa fa-plus"></i>
            </div>
            <div className="icon icon-fill">
              <i className="fa fa-check"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="courses-container">
        
        <div class="course">
          <div class="course-preview">
            <h6>Course</h6>
            <h2>JavaScript Fundamentals</h2>
            <a href="#">
              View all chapters <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div class="course-info">
            <div className="info-top">
              <div className="info-left">
                <h6>Chapter 8 </h6>
                <h2>The need for JavaScript</h2>
              </div>
              <div className="info-right">
                <div class="three_dot">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  <MoreVertIcon />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    Update
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="info-bottom">
              <Link to="/mentor/id/ongoing/currtopic/assignment">
                <button class="btncourse">Add Assignment</button>
              </Link>
              <Link to="/mentor/id/ongoing/currtopic/quiz">
                <button class="btncourse">Add Quiz</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="course">
          <div class="course-preview">
            <h6>Course</h6>
            <h2>Advanced CSS</h2>
            <a href="#">
              View all chapters <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div class="course-info">
            <div className="info-top">
              <div className="info-left">
                <h6>Chapter 2</h6>
                <h2>Flexboxs and Grids</h2>
              </div>
              <div className="info-right">
                <div class="three_dot">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  <MoreVertIcon />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    Update
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="info-bottom">
              <Link to="/mentor/id/ongoing/currtopic/assignment">
                <button class="btncourse">Add Assignment</button>
              </Link>
              <Link to="/mentor/id/ongoing/currtopic/quiz">
                <button class="btncourse">Add Quiz</button>
              </Link>
            </div>
          </div>
        </div>

        <div class="course">
          <div class="course-preview">
            <h6>Course</h6>
            <h2>Arrays and Hashmaps</h2>
            <a href="#">
              View all chapters <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div class="course-info">
            <div className="info-top">
              <div className="info-left">
                <h6>Chapter 10 </h6>
                <h2>Multi Dimensional Arrays</h2>
              </div>
              <div className="info-right">
                <div class="three_dot">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  <MoreVertIcon />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    Update
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="info-bottom">
              <Link to="/mentor/id/ongoing/currtopic/assignment">
                <button class="btncourse">Add Assignment</button>
              </Link>
              <Link to="/mentor/id/ongoing/currtopic/quiz">
                <button class="btncourse">Add Quiz</button>
              </Link>
            </div>
          </div>
        </div>
        
        <div class="course">
          <div class="course-preview">
            <h6>Course</h6>
            <h2>General Life</h2>
            <a href="#">
              View all chapters <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div class="course-info">
            <div className="info-top">
              <div className="info-left">
                <h6>Chapter 9 </h6>
                <h2>The need for Studying</h2>
              </div>
              <div className="info-right">
                <div class="three_dot">
                <button
                  type="button"
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  <MoreVertIcon />
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Delete
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    Update
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="info-bottom">
              <Link to="/mentor/id/ongoing/currtopic/assignment">
                <button class="btncourse">Add Assignment</button>
              </Link>
              <Link to="/mentor/id/ongoing/currtopic/quiz">
                <button class="btncourse">Add Quiz</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default CurrentTopic;

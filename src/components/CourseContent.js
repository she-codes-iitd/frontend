import react from "react";
import Header3 from "./Header3";
import '../css/CourseContent.css';
import { Link, Route, Routes } from "react-router-dom";
import YouTube from 'react-youtube';

function courseContent(props) {
    const opts = {
        height: '500',
        width: '870',
        
      };
    return (
        <>
            <div id="contain">

                <Header3 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
            </div>
            <div className="below-nav-bar">
                <div className="left-top">
                    
                    <YouTube videoId="Tn6-PIqc4UM" opts={opts} />


                </div>
                <div className="left-bottom">
                    <p className="name">Topic Name</p>
                    <p className="text">
                        usgeukgAQUSYFUYGFYUGUYFGSJEHJugaecfykjgbjszgfbjhg sfjgjyvsz sejfgsjgfvh jhawdvjmfdv adwvfjaewyqfwjdgsvfhvswjhavdhj
                    </p>
                </div>
                <div className="right">
                    <button className="tab1">Video 1</button>
                    <hr />
                    <button className="other">
                        <Link to="/student-dashboard/ongoing/topics/topic/quiz">
                            Quiz 1
                        </Link>
                    </button>
                    <hr />
                    <button className="other">Assign 1</button>
                    <hr />
                    <button className="tab1">Video 2</button>
                    <hr />
                    <button className="other">Quiz 2</button>
                    <hr />
                    <button className="other">Assign 2</button>
                    <hr />
                    <button className="tab1">Video 3</button>
                    <hr />
                    <button className="other">Quiz 3</button>
                    <hr />
                    <button className="other">Assign 3</button>

                    <button className="dbt">Ask A Doubt</button>
                </div>
            </div>
        </>
    );
}

export default courseContent;
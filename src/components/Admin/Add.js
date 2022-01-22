import React from "react";
import NavBarLoggedIn from "../NavBarLoggedIn.js";
import './css/add.css'
import { Link } from "react-router-dom";

const Add = (props) => {

    return (
        <>
            <NavBarLoggedIn logo={props.logo} />
            <div className="assignment_header">
                <div className="assignment_heading">Add assignment or quiz</div>
                <div className="header_items">
                    <div>Topic Name</div>
                    <button className="assignment_back_button">Back</button>
                </div>
            </div>
                <div className="add_buttons">
                    <Link to={"/admin/courses/topics/assignment"}>
                        <button className="add_assignment_btn">Add Assignment</button>
                    </Link>
                    <Link to={"/admin/courses/topics/quiz"}>
                        <button className="add_quiz_btn">Add Quiz</button>
                    </Link>
                    <Link to={"/admin/courses/topics/video"}>
                        <button className="add_video_btn">Add Video</button>
                    </Link>
                </div>
        </>
    )
}

export default Add;
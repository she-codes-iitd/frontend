import React from "react";
import NavBarLoggedIn from "../NavBarLoggedIn.js";
import './css/add.css'

const Assignment = (props) => {

    return (
        <>
            <NavBarLoggedIn logo={props.logo} />
            <div className="assignment_header">
                <div className="assignment_heading">Assignment</div>
                <div className="header_items">
                    <div>Course Name</div>
                    <button className="assignment_back_button">Back</button>
                </div>
            </div>
            <div className="assignment_body">
                <div className="assignment_data">
                    <div className="assignment_name_div">
                        <label className="assignment_name_label" for="assignment_name">Assignment Name:</label>
                        <textarea className="assignment_name_input" id="assignment_name" type="text" placeholder="Enter name here!" required autofocus></textarea>
                    </div>
                    <div className="assignment_description_div">
                        <label className="assignment_description_label" for="assignment_description">Assignment Description:</label>
                        <textarea className="assignment_description_input" id="assignment_description" type="" placeholder="Enter description here!" required></textarea>
                    </div>
                </div>
                <button className="add_assignment_button">Add Assignment</button>
            </div>
        </>
    )
}

export default Assignment;
import React from "react";
import NavBarLoggedIn from "../NavBarLoggedIn.js";
import './css/add.css'

const Quiz = (props) => {

    return (
        <>
            <NavBarLoggedIn logo={props.logo} />
            <div className="assignment_header">
                <div className="assignment_heading">Add Video</div>
                <div className="header_items">
                    <div>Course Name</div>
                    <button className="assignment_back_button">Back</button>
                </div>
            </div>
            <div className="video_data">
                    <div className="video_name_div">
                        <label className="video_name_label" for="video_name">Video Topic:</label>
                        <textarea className="video_name_input" id="video_name" type="text" placeholder="Enter name here!" required autofocus></textarea>
                    </div>
                    <div className="video_description_div">
                        <label className="video_description_label" for="video_description">Video Description:</label>
                        <textarea className="video_description_input" id="video_description" type="" placeholder="Enter description here!" required></textarea>
                    </div>
                </div>
            <div className="v_body">
                <div className="video_heading">Upload Here</div>
                <div className="video_upload">
                    <input type="file"></input>
                </div>
            </div>
            <button className="video_submit_button">Submit</button>
        </>
    )
}
    
export default Quiz;
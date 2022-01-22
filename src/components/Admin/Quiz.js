import React from "react";
import NavBarLoggedIn from "../NavBarLoggedIn.js";
import './css/add.css'

const Quiz = (props) => {

    return (
        <>
            <NavBarLoggedIn logo={props.logo} />
            <div className="assignment_header">
                <div className="assignment_heading">Quiz No. X</div>
                <div className="header_items">
                    <div>Course Name</div>
                    <button className="assignment_back_button">Back</button>
                </div>
            </div>
            <div className="quiz_body">
                <div className="quiz_data">
                    <div className="quiz_question">
                        <label className="quiz_question_label" for="quiz_question">Question:</label>
                        <textarea className="quiz_question_input" id="quiz_question" type="text" placeholder="Type question here!" required autofocus></textarea>
                    </div>
                    <div className="quiz_options">
                        <label className="quiz_option_label" for="quiz_option1">Option 1:</label>
                        <textarea className="quiz_option_input" id="quiz_option1" type="" placeholder="Enter description here!" required></textarea>
                    </div>
                    <div className="quiz_options">
                        <label className="quiz_option_label" for="quiz_option2">Option 2:</label>
                        <textarea className="quiz_option_input" id="quiz_option2" type="" placeholder="Enter description here!" required></textarea>
                    </div>
                    <div className="quiz_options">
                        <label className="quiz_option_label" for="quiz_option3">Option 3:</label>
                        <textarea className="quiz_option_input" id="quiz_option3" type="" placeholder="Enter description here!" required></textarea>
                    </div>
                    <div className="quiz_options">
                        <label className="quiz_option_label" for="quiz_option4">Option 4:</label>
                        <textarea className="quiz_option_input" id="quiz_option4" type="" placeholder="Enter description here!" required></textarea>
                    </div>
                </div>
                <div className="quiz_buttons">
                    <button className="quiz_next_question_button">Next Question</button>
                    <button className="quiz_finish_button">Submit Assignment</button>
                </div>
            </div>
        </>
    )
}

export default Quiz;
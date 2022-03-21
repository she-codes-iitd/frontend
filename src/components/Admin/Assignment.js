import React from "react";
import axios from "axios";
import { useState } from "react";
import NavBarLoggedIn from "../NavBarLoggedIn.js";
import './css/add.css'

const Assignment = (props) => {
	const [err, setError] = useState("");
	const [newAssign, setNewAssign] = useState("");
	const [newAssignDec, setNewAssignDec] = useState("");
	const reloadPage = () => {
		const timeLimit = 3;
		let i = 0;
		const timer = setInterval(function () {
			i++;
			if (i == timeLimit)
				window.location.reload(false);
		}, 1000);
	}

	const PostData = async (e) => {
		try {
			e.preventDefault();
			console.clear();

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios
				.post(`/courses/add_assignment`, {
					courseToAdd: newAssign
				},
					config
				);

			if (data.success === false) {
				console.log(data);
				throw data;
			}
			reloadPage();
		}
		catch (err) {
			setError(err.response.data.message);
		}
		// setUser("");
	}


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
			<form onSubmit={PostData}>
				<div className="assignment_body">
					<div className="assignment_data">
						<div className="assignment_name_div">
							<label className="assignment_name_label" for="assignment_name">Assignment Name:</label>
							<textarea className="assignment_name_input" name="newAssign" id="assignment_name" type="text" placeholder="Enter name here!" required autofocus></textarea>
						</div>
						<div className="assignment_description_div">
							<label className="assignment_description_label" for="assignment_description">Assignment Description:</label>
							<textarea className="assignment_description_input" name="newAssignDesc" id="assignment_description" type="" placeholder="Enter description here!" required></textarea>
						</div>
					</div>
					<button className="add_assignment_button" type="submit">Add Assignment</button>
				</div>
			</form>
		</>
	)
}

export default Assignment;
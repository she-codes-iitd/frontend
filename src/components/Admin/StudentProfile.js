import React from "react";
import SimpleNav from "../simpleNav";
import './css/studentProfile.css'
import IMAGE from '../../imgs/mentor.png'
import { Link } from "react-router-dom";

const StudentProfile = (props) => {
	return (
		<div>
			<SimpleNav logo={props.logo} />
			<header className="profile py-5">
				<div className="container">
					<div className="row d-flex justify-content-around">
						<div className="col-md-6">
							<h3>Student Name</h3>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum provident quidem, earum beatae nemo ut laudantium placeat nihil aperiam nulla. Veniam sapiente, ipsum provident earum ipsa explicabo eius assumenda nostrum?
						</div>
						<div className="col-md-2 d-flex justify-content-center align-items-center">
							<img src={IMAGE} alt="Image" className="img-fluid rounded-circle" />
						</div>
					</div>
				</div>
			</header >
			<div className="mentor-work">
				<div className="work-quantity">
					<div className="container my-3">
						<div className="row text-center">
							<div className="col-md-4">
								<h3>Number of courses done</h3>
							</div>
							<div className="col-md-4">
								<h3>Lectures Watched</h3>
							</div>
							<div className="col-md-4">
								<h3>Task done</h3>
							</div>
						</div>
						<div className="row text-center">
							<div className="col-md-4">
								<h1 className="display-1">8</h1>
							</div>
							<div className="col-md-4">
								<h1 className="display-1">9</h1>
							</div>
							<div className="col-md-4">
								<h1 className="display-1">16</h1>
							</div>
						</div>
					</div>
				</div>
                
                <br/>

				<div className="hour-table">
					<div className="container my-3">
						<h3>Performance in current course</h3>
						<ul className="px-4 w-100">
							<li className="headings row mb-3">
								<div className="col-md-4 text-center">Topic</div>
								<div className="col-md-4 text-center">Grade</div>
								<div className="col-md-4 text-center">Remark</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-4 text-center">Topic</div>
								<div className="col-md-4 text-center">Grade</div>
								<div className="col-md-4 text-center">Remark</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-4 text-center">Topic</div>
								<div className="col-md-4 text-center">Grade</div>
								<div className="col-md-4 text-center">Remark</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-4 text-center">Topic</div>
								<div className="col-md-4 text-center">Grade</div>
								<div className="col-md-4 text-center">Remark</div>
							</li>
						</ul>
					</div>
				</div>

                <br/>

                <div className="hour-table">
					<div className="container my-3">
						<h3>Performance report</h3>
						<ul className="px-4 w-100">
							<li className="headings row mb-3">
								<div className="col-md-3 text-center">Course</div>
								<div className="col-md-3 text-center">Grade</div>
								<div className="col-md-3 text-center">Task Done</div>
                                <div className="col-md-3 text-center">Remarks</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-3 text-center">Course</div>
								<div className="col-md-3 text-center">Grade</div>
								<div className="col-md-3 text-center">Task Done</div>
                                <div className="col-md-3 text-center">Remarks</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-3 text-center">Course</div>
								<div className="col-md-3 text-center">Grade</div>
								<div className="col-md-3 text-center">Task Done</div>
                                <div className="col-md-3 text-center">Remarks</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-3 text-center">Course</div>
								<div className="col-md-3 text-center">Grade</div>
								<div className="col-md-3 text-center">Task Done</div>
                                <div className="col-md-3 text-center">Remarks</div>
							</li>
						</ul>
					</div>
				</div>

			</div>

		</div >
	)
}

export default StudentProfile;
import React from "react";
import SimpleNav from "../simpleNav";
import './css/mentorProfile.css'
import IMAGE from '../../imgs/mentor.png'
import { Link } from "react-router-dom";

const MentorProfile = (props) => {
	return (
		<div>
			<SimpleNav logo={props.logo} />
			<header className="profile py-5">
				<div className="container">
					<div className="row d-flex justify-content-around">
						<div className="col-md-6">
							<h3>Mentor Name</h3>
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
								<h3>Number of Hours</h3>
							</div>
							<div className="col-md-4">
								<h3>No. of Mentees Assigned</h3>
							</div>
							<div className="col-md-4">
								<h3>Doubts Solved</h3>
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
				<div className="hour-table">
					<div className="container my-3">
						<h3>Hours Per Week</h3>
						<ul className="px-4 w-100">
							<li className="headings row mb-3">
								<div className="col-md-2 text-center">Mon</div>
								<div className="col-md-2 text-center">Tue</div>
								<div className="col-md-2 text-center">Wed</div>
								<div className="col-md-2 text-center">Thu</div>
								<div className="col-md-2 text-center">Fri</div>
								<div className="col-md-2 text-center">Sat</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-2 text-center">Mon</div>
								<div className="col-md-2 text-center">Tue</div>
								<div className="col-md-2 text-center">Wed</div>
								<div className="col-md-2 text-center">Thu</div>
								<div className="col-md-2 text-center">Fri</div>
								<div className="col-md-2 text-center">Sat</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-2 text-center">Mon</div>
								<div className="col-md-2 text-center">Tue</div>
								<div className="col-md-2 text-center">Wed</div>
								<div className="col-md-2 text-center">Thu</div>
								<div className="col-md-2 text-center">Fri</div>
								<div className="col-md-2 text-center">Sat</div>
							</li>
							<li className="items row mb-2">
								<div className="col-md-2 text-center">Mon</div>
								<div className="col-md-2 text-center">Tue</div>
								<div className="col-md-2 text-center">Wed</div>
								<div className="col-md-2 text-center">Thu</div>
								<div className="col-md-2 text-center">Fri</div>
								<div className="col-md-2 text-center">Sat</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mentees">
				<div className="container my-3">
					<h3>Name of Mentees</h3>
					<ul className="px-4 w-100">
						<li className="menteeNames row mb-2">
							Student 1
						</li>
						<li className="menteeNames row mb-2">
							Student 2
						</li>
						<li className="menteeNames row mb-2">
							Student 3
						</li>
					</ul>
					<Link to="/admin/freshlyenrolledstudents">
						<button className="yellow-button ms-3">+ Add a Mentee</button>
					</Link>
				</div>
			</div>

		</div >
	)
}

export default MentorProfile;
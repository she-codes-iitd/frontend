import React, { useState, useEffect } from "react";
import SimpleNav from "../simpleNav";
import './css/studentProfile.css';
import NavBarLoggedIn from '../NavBarLoggedIn';
import IMAGE from '../../imgs/mentor.png';
import { Link } from "react-router-dom";

const StudentProfile = (props) => {

	var [user, setUser] = useState({
		email: "", name: "", admission_number: "", _class: "", school: "", dob: "", phone: "", topics: ""
	});

	useEffect(() => {
		fetch('/student/profile')
			.then(res => res.json())
			.then(data => setUser(data["student"]))
		console.log(user);
	}, []);

	return (
		<div>
			<NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			<header className="profile py-5 pb-4">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-6 text-center">
							<h1>Welcome, Student Name!</h1>
						</div>
						{/* <div className="col-md-2 d-flex justify-content-center align-items-center">
							<img src={IMAGE} alt="Image" className="img-fluid rounded-circle" />
						</div> */}
					</div>
				</div>
			</header >

			<div className="container mt-2">
				<div className="row">
					<h1>User Details : </h1>
					{/* <div className="input-group col-md-5">
						<input type="text" value="NAME" className="d-inline p-2 px-3 w-100 informationStudent" disabled readonly />
					</div> */}
					<div className="input-group mb-3">
						<span className="input-group-text labelinformationStudent" id="basic-addon1">Name</span>
						<input type="text" className="form-control informationStudent" value={user.name} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text labelinformationStudent" id="basic-addon1">Email</span>
						<input type="text" className="form-control informationStudent" value={user.email} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text labelinformationStudent" id="basic-addon1">School</span>
						<input type="text" className="form-control informationStudent" value={user.school} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text labelinformationStudent" id="basic-addon1">Class</span>
						<input type="text" className="form-control informationStudent" value={user._class} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text labelinformationStudent" id="basic-addon1">No. of Topics Studied</span>
						<input type="text" className="form-control informationStudent" value={user.topics} aria-label="Username" aria-describedby="basic-addon1" disabled readOnly />
					</div>
				</div>
			</div>

		</div >
	)
}

export default StudentProfile;
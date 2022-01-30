import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderM from "./HeaderM";

function Dashboard(props) {
	useEffect(() => {
		fetch('/volunteer/profile').then(res => res.json()).then(user => console.log(user))
	}, [])

	return (
		<>
			<div id="contain">
				<img id="bg" className="img-fluid2" alt="" />
				<HeaderM logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav}
					heading={"Dashboard"} desc={"View and Edit everything"} button="Back to Login"
					link="/id" />
			</div>

			<div class="grid">
				<div class="item">
					<Link to="/mentor/id/grading" />
					<img src='https://image.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg' alt='' />
					<div class="item__overlay">
						<h3 id="person1" aria-hidden="true">Grading</h3>
						<div class="item__body">
							<p>Visit and edit all the grades.</p>
						</div>
					</div>
				</div>

				<div class="item">
					<Link to="/mentor/id/diy" />
					<img src='https://image.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg' alt='' />
					<div class="item__overlay">
						<h3 id="person2" aria-hidden="true">DIY for students</h3>
						<div class="item__body">
							<p>Do It Yourself for students.</p>
						</div>
					</div>
				</div>
				<div class="item">
					<Link to="/mentor/id/ongoing" />
					<img src='https://image.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg' alt='' />
					<div class="item__overlay">
						<h3 id="person3" aria-hidden="true">Ongoing Courses</h3>
						<div class="item__body">
							<p>Courses still being taught.</p>
						</div>
					</div>
				</div>
				<div class="item">
					<Link to="/mentor/id/completed" />
					<img src='https://image.freepik.com/free-vector/done-concept-illustration_114360-3060.jpg' alt='' />
					<div class="item__overlay">
						<h3 id="person4" aria-hidden="true">Completed Courses</h3>
						<div class="item__body">
							<p>The courses which you have completed.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
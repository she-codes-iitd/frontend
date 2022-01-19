import React from 'react';
import { Link } from 'react-router-dom';
import '../css/All.css';
import '../css/Courses.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

function CoursesTab(props) {

	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div class="container grid-container-all">
				<div class='row'>
					<div class="col-md-4">
						<div class="col-md-4 grid-item-all">
							<Link to="/student-dashboard/ongoing">
								Ongoing Courses
							</Link>
						</div>
					</div>
					<div class="col-md-4">
						<div class="col-md-4 grid-item-all">
							<Link to="/student-dashboard/completed">
								Completed Courses
							</Link>
						</div>
					</div>
					<div class="col-md-4">
						<div class="col-md-4 grid-item-all">
							<Link to="/student-dashboard/all">
								All Courses
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CoursesTab;
import React from 'react';
import { Link } from 'react-router-dom';
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
			<div class="grid-container-main">
				<Link to="/student-dashboard/ongoing">
					<div class="grid-item-main">Ongoing Courses

					</div>
				</Link>
				<Link to="/student-dashboard/completed">
					<div class="grid-item-main">Completed Courses

					</div>
				</Link>
				<Link to="/student-dashboard/all">
					<div class="grid-item-main">

						All courses


					</div>
				</Link>
			</div>
		</>
	);
}

export default CoursesTab;
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
			<div className="grid-container-main">
				<Link to="/id/ongoing">
					<div className="grid-item-main">Ongoing Courses

					</div>
				</Link>
				<Link to="/id/completed">
					<div className="grid-item-main">Completed Courses

					</div>
				</Link>
				<Link to="/id/all">
					<div className="grid-item-main">

						All courses


					</div>
				</Link>
			</div>
		</>
	);
}

export default CoursesTab;
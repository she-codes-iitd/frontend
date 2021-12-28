import React from "react";
import NavBarLoggedIn from './NavBarLoggedIn';
import '../css/assignments.css';
import BeforeSubmit from "./assignments/BeforeSubmit";
import AfterSubmit from "./assignments/AfterSubmit";
import SubmissionHistory from "./assignments/SubmissionHistory";

const Assignments = (props) => {
	return (
		<div className='body-assignment'>
			<div id="contain">
				<NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div className="container my-4 d-flex justify-content-center">
				<div className="assignment p-4 w-100">
					<div className="d-flex justify-content-between">
						<div>
							<h3>Assignment Title</h3>
							<h6>Description</h6>
						</div>
						<div>
							<h5>Deadline</h5>
						</div>
					</div>
					<BeforeSubmit />
				</div>
			</div>
			{/* <Link to="/id/ongoing/topic">
				<button className='go-back'>Go Back</button>
			</Link> */}
		</div>
	)
}

export default Assignments;
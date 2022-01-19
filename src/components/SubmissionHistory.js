import React from "react";
import NavBarLoggedIn from './NavBarLoggedIn';
import '../css/assignments.css';
import { Link } from "react-router-dom";

const SubmissionHistory = (props) => {
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
					<div className="latest my-5">
						<h6 className="submitted">
							Latest Submission
						</h6>
						<ul className="px-4 w-100">
							<li className="row yellow-bg mb-3">
								<div className="col-md-3 text-center">FileName.pdf</div>
								<div className="col-md-3 text-center">02:32pm</div>
								<div className="col-md-3 text-center">04th Oct 2021</div>
								<div className="col-md-3 text-center">Not Graded</div>
							</li>
						</ul>
					</div>
					<div className="previous my-5">
						<h6 className="submitted">
							Previous Submissions
						</h6>
						<ul className="px-4 w-100">
							<li className="row mb-3">
								<div className="col-md-3 text-center">FileName.pdf</div>
								<div className="col-md-3 text-center">02:32pm</div>
								<div className="col-md-3 text-center">04th Oct 2021</div>
								<div className="col-md-3 text-center">Not Graded</div>
							</li>

							<li className="row mb-3">
								<div className="col-md-3 text-center">FileName.pdf</div>
								<div className="col-md-3 text-center">02:32pm</div>
								<div className="col-md-3 text-center">04th Oct 2021</div>
								<div className="col-md-3 text-center">Not Graded</div>
							</li>
						</ul>
					</div>
					<Link to="/id/ongoing/topics/topic">
						<button className='blue-button'>Back</button>
					</Link>
				</div>
			</div>
			{/* <Link to="/id/ongoing/topic">
				<button className='go-back'>Go Back</button>
			</Link> */}
		</div>
	);
}

export default SubmissionHistory;
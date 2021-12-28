import React from "react";
import { Link } from "react-router-dom";

const SubmissionHistory = () => {
	return (
		<>
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
		</>
	);
}

export default SubmissionHistory;
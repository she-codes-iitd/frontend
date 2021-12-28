import React from "react";

const AfterSubmit = (props) => {
	return (
		<>
			<ul className="p-4 w-100">
				<li className="row mb-3">
					<div className="col-md-3 text-center">FileName.pdf</div>
					<div className="col-md-3 text-center">02:32pm</div>
					<div className="col-md-3 text-center">04th Oct 2021</div>
					<div className="col-md-3 text-center">Not Graded</div>
				</li>
			</ul>
			<h6 className="text-center submitted">
				Your assignment has been submitted!
			</h6>
			<div className="d-flex justify-content-center">
				<div>
					<button className="yellow-button">Edit Submission</button>
					<button className="yellow-button ms-3">View Submission History</button>
				</div>
			</div>
		</>
	);
}

export default AfterSubmit;
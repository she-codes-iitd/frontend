import React from "react";
import { Link } from "react-router-dom";
import { ImageConfig } from "./config/ImageConfig";

const AfterSubmit = (props) => {
	const fileList = props.myFiles;

	const print = () => {
		console.log(props.myFiles);
	}

	return (
		<>
			<ul className="p-4 w-100">
				<li className="row mb-3">
					<div className="col-md-3 text-center" onClick={print}>FileName.pdf</div>
					<div className="col-md-3 text-center">02:32pm</div>
					<div className="col-md-3 text-center">04th Oct 2021</div>
					<div className="col-md-3 text-center">Not Graded</div>
				</li>
			</ul>
			{/* {
				fileList.map((item, index) => (
					<div key={index} className="drop-file-preview__item">
						<img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
						<div className="drop-file-preview__item__info">
							<p className='mb-0'>{item.name}</p>
							<p className="mb-0">{parseFloat(item.size / (1024)).toFixed(2)} KB</p>
						</div>
					</div>
				))
			} */}
			<h6 className="text-center submitted mb-4">
				Your assignment has been submitted!
			</h6>
			<div className="d-flex justify-content-center">
				<div>
					<button className="yellow-button">Edit Submission</button>
					<Link to="/id/ongoing/topics/topic/assignments/history">
						<button className="yellow-button ms-3">View Submission History</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default AfterSubmit;
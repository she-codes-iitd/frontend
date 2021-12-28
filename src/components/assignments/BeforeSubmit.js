import { create } from "@mui/material/styles/createTransitions";
import React, { useRef, useEffect, useState } from "react";
import DropFileInput from './drop-file-input/DropFileInput'

const BeforeSubmit = () => {

	const onFileChange = (files) => {
		console.log(files);
	}

	// const uploadAssignment = useRef(null);
	// const [spanText, setText] = useState("Drag and drop your files here!");
	// const [enter, setEnter] = useState(true);

	// const check = () => {
	// 	if (uploadAssignment.current === null || uploadAssignment.current.files.length === 0) {
	// 		if (enter === false) {
	// 			setEnter(true);
	// 		}
	// 		if (spanText !== "Drag and drop your files here!") {
	// 			setText("Drag and drop your files here!");
	// 		}
	// 	}
	// 	else {
	// 		if (enter === true) {
	// 			setEnter(false);
	// 		}
	// 		if (spanText === "Drag and drop your files here!") {
	// 			setText(uploadAssignment.current.files[0].name);
	// 		}
	// 	}
	// }

	return (
		<div id="upload">
			{/* <form action="#">
				<div className="file-upload text-blue">
					<span>
						{spanText}
						{enter &&
							<>
								<br />
								<small><small>Max Size : 20MB</small></small>
							</>
						}
					</span>
					<input type="file" className="uploadAssignment" id="upload-btn" ref={uploadAssignment} onChange={check} />
				</div>

				<div className="d-flex justify-content-between">
					<div>
						<button className="blue-button">Clear Submission</button>
					</div>
					<div>
						<button className="yellow-button me-3"><i className="fas fa-plus"></i> Add Submission</button>
						<input type="submit" className="yellow-button" value="Submit" />
					</div>
				</div>
			</form> */}
			<DropFileInput
				onFileChange={(files) => onFileChange(files)}
			/>
		</div>
	);
}

export default BeforeSubmit;
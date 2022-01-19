import React, { useRef, useEffect, useState } from "react";
import DropFileInput from './drop-file-input/DropFileInput'

const BeforeSubmit = (props) => {
	const [clear, setClear] = useState(false);
	const onFileChange = (files) => {
		props.onFileChange(files);
	}

	const toggleClear = () => {
		if (clear === false) {
			setClear(true);
		}
		else {
			setClear(false);
		}
	}

	return (
		<>
			<div id="upload">
				<DropFileInput
					onFileChange={(files) => onFileChange(files)} toggleClear={toggleClear} clear={clear}
				/>
			</div>
			<div className="d-flex justify-content-between mt-5">
				<div>
					<button className="blue-button" onClick={toggleClear}>Clear Submission</button>
				</div>
				<div>
					<button className="yellow-button me-3 mb-2"><i className="fas fa-plus"></i> Add Submission</button>
					<button className="yellow-button" onClick={props.submit}>Submit</button>
				</div>
			</div>
		</>
	);
}

export default BeforeSubmit;
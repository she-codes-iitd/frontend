import React, { useState } from "react";
import Captcha from "../Captcha";

const Page2 = (props) => {
	const HandleInputs = (e) => {
		props.HandleInputs(e);
	}

	const [isDisabled, setDisable] = useState(true);
	const [isCaptcha, setCaptcha] = useState(false);
	const [error, setError] = useState("");

	const buttonWork = () => {
		setCaptcha(true);
		setDisable(false);
	}

	const prevPage = () => {
		props.changePage('one');
	}

	const validate = () => {
		if (!props.user.email) {
			setError("Email is required");
		}
		else if (!props.user.name) {
			setError("Name is required");
		}
		else if (!props.user.password) {
			setError("Password is required");
		}
		else if (!props.user.phone) {
			setError("Contact No. is required");
		}
		else if (!props.user.admission_number) {
			setError("Admission No. is required");
		}
		else if (!props.user.dob) {
			setError("Date of Birth is required");
		}
		else if (!props.user.school) {
			setError("School Name is required");
		}
		else if (!props.user._class) {
			setError("Class is required");
		}
		else if (!props.user.district) {
			setError("District is required");
		}
		else if (!props.user.state) {
			setError("State is required");
		}
		else {
			setError("");
		}
	}

	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<input type="text" name="admission_number" placeholder="Admission Number" className="form-control my-2" onChange={HandleInputs} defaultValue={props.user.admission_number} required />
				</div>
				<div className="col-md-6">
					<input type="text" name="dob" placeholder="Date of Birth" onFocus={(e) => e.target.type = 'date'} className="form-control my-2" onChange={HandleInputs} defaultValue={props.user.dob} required />
				</div>
				<div className="col-md-6">
					<input type="text" name="school" placeholder="School Name" className="form-control my-2" onChange={HandleInputs} defaultValue={props.user.school} required />
				</div>
				<div className="col-md-6">
					<input type="number" name="_class" placeholder="Class" className="form-control my-2" onChange={HandleInputs} defaultValue={props.user._class} required />
				</div>
				<div className="col-md-6">
					<input type="text" name="district" placeholder="District" className="me-2 form-control my-2" onChange={HandleInputs} defaultValue={props.user.district} required />
				</div>
				<div className="col-md-6">
					<input type="text" name="state" placeholder="State" className="form-control my-2" onChange={HandleInputs} defaultValue={props.user.state} required />
				</div>
			</div>
			<small className="d-flex justify-content-center mt-3">
				<Captcha buttonWork={buttonWork} />
			</small>
			<small className={"d-flex justify-content-center"}>
				<small className="red-text">*ERRORS</small>
			</small>
			<div className="d-flex justify-content-between">
				<button className="button my-4 blue-text" onClick={prevPage}>
					<small><i className="fas fa-arrow-left"></i></small> Back
				</button>
				<button className="button my-4 blue-text" type="submit" disabled={isDisabled}>
					Register
				</button>
			</div>
		</>
	)
}

export default Page2;
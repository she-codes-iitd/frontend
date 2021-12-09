import React, { useState } from "react";

const Page1 = (props) => {
	const HandleInputs = (e) => {
		props.HandleInputs(e);
	}

	const [isSame, setSame] = useState(true);
	const error = "Passwords do not match"

	const nextPage = (e) => {
		e.preventDefault();
		if (props.user.cpassword === props.user.password) {
			if (isSame === false) {
				setSame(true);
			}
			props.changePage('two');
		}
		else {
			if (isSame === true) {
				setSame(false);
			}
		}
	}

	return (
		<>
			<div className="form-group">
				<input type="text" name="name" placeholder="Full Name" className="form-control my-3" onChange={HandleInputs} defaultValue={props.user.name} required />
			</div>
			<div className="row">
				<div className="col-md-6">
					<input type="email" name="email" placeholder="Email" className="form-control" onChange={HandleInputs} defaultValue={props.user.email} required />
				</div>
				<div className="col-md-6">
					<input type="string" name="phone" placeholder="Contact Number" className="form-control" pattern="[0-9]{10}" onChange={HandleInputs} defaultValue={props.user.phone} required />
				</div>
			</div>
			<div className="form-group">
				<input type="password" name="password" placeholder="Password" className="form-control my-3" onChange={HandleInputs} defaultValue={props.user.password} required />
			</div>
			<div className="form-group">
				<input type="password" name="cpassword" placeholder="Confirm Password" className="form-control my-3" defaultValue={props.user.cpassword} onChange={HandleInputs} required />
			</div>
			<small className={isSame ? "d-none" : "d-flex justify-content-center"}>
				<small className="red-text">*{error}</small>
			</small>
			<div className="d-flex justify-content-end" onClick={nextPage}>
				<button className="button my-3 blue-text" onClick={nextPage}>
					Next <small><i className="fas fa-arrow-right"></i></small>
				</button>
			</div>
			<div className="text-center my-2">
				<a href="#" data-bs-toggle="modal" data-bs-target={`#signIn${props.name}`}>Already a User? Sign in here!</a>
			</div>
		</>
	)
}

export default Page1;
import React, { useState } from "react";
import axios from "axios";
import instance from "../axios";
import Captcha from "./Captcha";
import Loading from './Loading'
import Verify from "./Verify";

const SignUpForm = (props) => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [registered, setRegistered] = useState(false);
	const [isDisabled, setDisable] = useState(true);
	// const [isCaptcha, setCaptcha] = useState(false);

	const buttonWork = () => {
		setDisable(false);
	}

	const [user, setUser] = useState({
		email: "", password: "", name: "", admission_number: "", _class: "", school: "", dob: "", phone: "", district: "", state: "", cpassword: ""
	});

	let name, value;

	const HandleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const reloadPage = () => {
		const timeLimit = 5;
		let i = 0;
		const timer = setInterval(function () {
			i++;
			if (i == timeLimit)
				window.location.reload(false);
		}, 1000);
	}

	const PostData = async (e) => {
		try {
			e.preventDefault();
			console.clear();
			console.log(user);

			if (user.password !== user.cpassword) {
				throw "*Passwords do not match";
			}

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			setLoading(true);

			const { data } = await axios
				.post(`/student/register`, {
					email: user.email,
					password: user.password,
					name: user.name,
					admission_number: user.admission_number,
					_class: user._class,
					school: user.school,
					dob: user.dob,
					phone: user.phone,
					district: user.district,
					state: user.state
				},
					config
				);

			setLoading(false);
			if (data.success === false) {
				throw data;
				// console.log(data.message);
			}
			setRegistered(true);
			reloadPage();
		}
		catch (err) {
			setLoading(false);
			setError(err.message);
			console.log(err);
		}
		// setUser("");
	}

	return (
		<div className="modal fade" id={`signUp${props.name}`} tabIndex="-1" aria-labelledby="signInLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-body">

						<div className="container card_forms">
							<div className="card my-3">
								<h2 className="my-4 text-center">Sign Up as a {props.name}</h2>
								<div className="container">

									<form onSubmit={PostData} className="signupforms">
										<>
											<div className="form-group">
												<input type="text" name="name" placeholder="Full Name" className="form-control my-3" onChange={HandleInputs} defaultValue={user.name} required />
											</div>
											<div className="row">
												<div className="col-md-6">
													<input type="email" name="email" placeholder="Email" className="form-control" onChange={HandleInputs} defaultValue={user.email} required />
												</div>
												<div className="col-md-6">
													<input type="string" name="phone" placeholder="Contact Number" className="form-control" pattern="[0-9]{10}" title="Should be of 10 digits each from 0 to 9" onChange={HandleInputs} defaultValue={user.phone} required />
												</div>
											</div>
											<div className="form-group">
												<input type="password" name="password" placeholder="Password" className="form-control my-3" onChange={HandleInputs} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" defaultValue={user.password} title="Password must be of atleast 8 characters and contain atleast one uppercase letter, one lowercase letter and one number." required />
											</div>
											<div className="form-group">
												<input type="password" name="cpassword" placeholder="Confirm Password" className="form-control my-3" defaultValue={user.cpassword} onChange={HandleInputs} required />
											</div>
										</>
										<>
											<div className="row">
												<div className="col-md-6">
													<input type="text" name="admission_number" placeholder="Admission Number" className="form-control my-2" onChange={HandleInputs} defaultValue={user.admission_number} required />
												</div>
												<div className="col-md-6">
													<input type="text" name="dob" placeholder="Date of Birth" onFocus={(e) => e.target.type = 'date'} className="form-control my-2" onChange={HandleInputs} defaultValue={user.dob} required />
												</div>
												<div className="col-md-6">
													<input type="text" name="school" placeholder="School Name" className="form-control my-2" onChange={HandleInputs} defaultValue={user.school} required />
												</div>
												<div className="col-md-6">
													<input type="number" name="_class" placeholder="Class" className="form-control my-2" onChange={HandleInputs} defaultValue={user._class} min="1" max="12" required />
												</div>
												<div className="col-md-6">
													<input type="text" name="district" placeholder="District" className="me-2 form-control my-2" onChange={HandleInputs} defaultValue={user.district} required />
												</div>
												<div className="col-md-6">
													<input type="text" name="state" placeholder="State" className="form-control my-2" onChange={HandleInputs} defaultValue={user.state} required />
												</div>
											</div>
											<small className="d-flex justify-content-center mt-3">
												<Captcha buttonWork={buttonWork} />
											</small>
											<small className={"d-flex justify-content-center"}>
												<small className="red-text">{error}</small>
											</small>
											<div className="text-center my-2">
												<a href="#" data-bs-toggle="modal" data-bs-target={`#signIn${props.name}`}>Already a User? Sign in here!</a>
											</div>
											{registered && <Verify />}
											<div className="d-flex justify-content-center">
												<button className="button my-4 blue-text" type="submit" disabled={isDisabled}>
													Register &nbsp;
													{loading && <Loading />}
												</button>
											</div>
										</>
									</form>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpForm;
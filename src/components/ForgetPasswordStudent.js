import React, { useState } from "react";
import axios from "axios";
import Captcha from "./Captcha";
import Loading from './Loading'
import Verify from "./Verify";

const ForgetPasswordStudentForm = (props) => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [registered, setRegistered] = useState(false);
	const [isDisabled, setDisable] = useState(true);
	// const [isCaptcha, setCaptcha] = useState(false);

	const buttonWork = () => {
		setDisable(false);
	}

	const [user, setUser] = useState({
		email: "" , newPassword: ""
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

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			setLoading(true);

			const { data } = await axios
				.post(`/student/forget`, {
					email: user.email,
					newPassword: user.newPassword
				},
					config
				);

			setLoading(false);
			console.log(data);
			if (data.success === false) {
				console.log(data);
				throw data;
			}
			setRegistered(true);
			reloadPage();

			// let currPage = window.location.href;
			// currPage = currPage.split('?')[0];
			// currPage = currPage.split('#')[0];
			// window.location.href = currPage + "id";
		}
		catch (err) {
			setLoading(false);
			setError(err.response.data.message);
		}
		// setUser("");
	}

	return (
		<div className="modal fade" id={`ForgetPasswordStudent`} tabIndex="-1" aria-labelledby="ForgetPasswordLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-body">

						<div className="container card_forms">
							<div className="card my-3">
								<h2 className="my-4 text-center">Forget Password</h2>
								<div className="container">

									<form onSubmit={PostData} className="signinforms">
										<>
											<div className="form-group">
												<input type="email" placeholder="Enter Your Email Address" name="email" className="form-control my-3" onChange={HandleInputs} required />
											</div>
											<div className="form-group">
												<input type="password" name="newPassword" placeholder="Enter New Password" className="form-control mt-3" onChange={HandleInputs} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" defaultValue={user.newPassword} required />
												<small><small><small className="blue-text">*Must be of atleast 8 characters containing atleast one uppercase letter, one lowercase letter and one number.</small></small></small>
											</div>
										</>
										<>
											<small className="d-flex justify-content-center mt-3">
												<Captcha buttonWork={buttonWork} />
											</small>
											<small className={"d-flex justify-content-center"}>
												<small className="red-text">{error}</small>
											</small>
											<div className="d-flex justify-content-center">
												<button className="button my-4 blue-text" type="submit" disabled={isDisabled}>
													Send Mail
													{loading && <Loading />}
												</button>

											</div>
											<div className="text-center my-2">
												<a data-bs-toggle="modal" data-bs-target={`#signInStudent`}>Sign in here as Student</a>
											</div>
											{registered && <Verify />}
											
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

export default ForgetPasswordStudentForm;
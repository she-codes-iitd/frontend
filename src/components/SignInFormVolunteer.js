import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from './Loading'

const SignInForm = (props) => {
	const [user, setUser] = useState({
		email: "", password: ""
	});

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	const userInfo = localStorage.getItem("sheCodesUserInfo");
	// 	if (userInfo) {

	// 	}
	// }, [])

	let name, value;

	const HandleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const Login = async (e) => {
		try {
			e.preventDefault();
			console.clear();
			// console.log(user);

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			setLoading(true);

			const { data } = await axios
				.post(`volunteer/login`, {
					email: user.email,
					password: user.password
				},
					config
				);
			setLoading(false);
			console.log(data);
			if (data.success === false) {
				console.log(data);
				throw data;
			}

			let currPage = window.location.href;
			currPage = currPage.split('?')[0];
			currPage = currPage.split('#')[0];
			window.location.href = currPage + "mentor/id";
			// localStorage.setItem("sheCodesUserInfo", JSON.stringify(data));
		}
		catch (err) {
			setLoading(false);
			setError(err.response.data.message);
		}
		// setUser("");
	}

	return (
		<div className="modal fade" id={`signIn${props.name}`} tabIndex="-1" aria-labelledby="signInLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-body">

						<div className="container card_forms">
							<div className="card my-3">
								<h2 className="my-4 text-center">Sign in as a {props.name}</h2>
								<div className="container">


									<form onSubmit={Login} className="signinforms">
										<div className="form-group">
											<input type="email" placeholder="Email" name="email" className="form-control my-3" onChange={HandleInputs} required />
										</div>
										<div className="form-group">
											<input type="password" placeholder="Password" name="password" className="form-control my-3" onChange={HandleInputs} required />
										</div>
										<div className="text-end">
											<small><a href="#">Forgot Password?</a></small>
										</div>
										<small className={"d-flex justify-content-center"}>
											<small className="red-text">{error}</small>
										</small>
										<button type="submit" className="button my-4 blue-text mx-auto">
											Sign in &nbsp;
											{loading && <Loading />}
										</button>
										<div className="text-center my-3">
											<a data-bs-toggle="modal" data-bs-target={`#signUp${props.name}`}>First Time? Sign Up Here</a>
										</div>
										<div className="text-center my-3">
											<a data-bs-toggle="modal" data-bs-target={`#signIn${props.notname}`}>Sign in as a {props.notname}, instead?</a>
										</div>
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

export default SignInForm;
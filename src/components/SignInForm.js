import React, { useState } from 'react'
import axios from 'axios';

const SignInForm = (props) => {
	const [user, setUser] = useState({
		email: "", password: ""
	});

	let name, value;

	const HandleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const PostData = async () => {
		try {
			console.clear();
			console.log(user);
			// const { name, email, username, password } = user;

			await axios
				.post(`/student/login`, {
					email: user.email,
					password: user.password
				})
		}
		catch (err) {
			console.log(err);
		}
		setUser("");
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

									<form onSubmit={PostData} className="signinforms">
										<div className="form-group">
											<input type="email" placeholder="Email" className="form-control my-3" onChange={HandleInputs} required />
										</div>
										<div className="form-group">
											<input type="password" placeholder="Password" className="form-control my-3" onChange={HandleInputs} required />
										</div>
										<div className="text-end">
											<small><a href="#">Forgot Password?</a></small>
										</div>
										<button type="submit" className="button my-4 blue-text mx-auto">Sign in</button>
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
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {
	// const history = useHistory();
	const [user, setUser] = useState({
		name: "", email: "", username: "", password: ""
	});

	let name, value;

	const HandleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const PostData = async (e) => {
		e.preventDefault();

		const { name, email, username, password } = user;
		const res = await fetch("/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name, email, username, password
			})
		});

		const data = await res.json();

		if (data.status === 422 || !data) {
			window.alert("Invalid Registration");
		}
		else {
			window.alert("Registration Successful");

			// history.push("/login");
		}
	}

	return (
		<div class="modal fade" id={`signUp${props.name}`} tabindex="-1" aria-labelledby="signInLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-body">

						<div class="container card_forms">
							<div class="card my-3">
								<h2 class="my-4 text-center">Sign Up as a {props.name}</h2>
								<div class="container">
									<form method="POST" class="signinforms">
										<div class="form-group">
											<input type="text" placeholder="Full Name" class="form-control my-3" />
										</div>
										<div class="form-group">
											<input type="text" placeholder="Username" class="form-control my-3" />
										</div>
										<div class="form-group">
											<input type="email" placeholder="Email Address" class="form-control my-3" />
										</div>
										<div class="form-group">
											<input type="password" placeholder="Password" class="form-control my-3" />
										</div>
										<button onClick={PostData} class="mx-auto my-5">Register</button>
										<div class="text-center my-3">
											<a href="#" data-bs-toggle="modal" data-bs-target={`#signIn${props.name}`}>Already a User? Sign in here!</a>
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

export default SignUpForm;
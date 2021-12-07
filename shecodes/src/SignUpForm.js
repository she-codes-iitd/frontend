import React from "react";

const SignUpForm = (props) => {
	return (
		<div class="modal fade" id={`signUp${props.name}`} tabindex="-1" aria-labelledby="signInLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-body">

						<div class="container card_forms">
							<div class="card my-3">
								<h2 class="my-4 text-center">Sign Up as a {props.name}</h2>
								<div class="container">
									<form action="#" class="signinforms">
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
										<button action="#" class="mx-auto my-5">Sign Up</button>
										<div class="text-center my-3">
											<a href="#">Already a User? Sign In</a>
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
import React from 'react'

const SignInForm = (props) => {
	return (
		<div className="modal fade" id={`signIn${props.name}`} tabIndex="-1" aria-labelledby="signInLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-body">

						<div className="container card_forms">
							<div className="card my-3">
								<h2 className="my-4 text-center">Sign in as a {props.name}</h2>
								<div className="container">

									<form action="#" className="signinforms">
										<div className="form-group">
											<input type="text" placeholder="Username" className="form-control my-3" />
										</div>
										<div className="form-group">
											<input type="password" placeholder="Password" className="form-control my-3" />
										</div>
										<div className="text-end">
											<small><a href="#">Forgot Password?</a></small>
										</div>
										<input type="submit" className="button mx-auto my-5" value="Sign in" />
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
import React, { useState } from "react";
import axios from "axios";
import Page1 from "./SignUp/Page1";
import Page2 from "./SignUp/Page2";
import instance from "../axios";

const SignUpForm = (props) => {
	const [page, setPage] = useState('one');

	const [user, setUser] = useState({
		email: "", password: "", name: "", admission_number: "", _class: "", school: "", dob: "", phone: "", district: "", state: "", cpassword: ""
	});

	let name, value;

	const HandleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const PostData = async (e) => {
		try {
			e.preventDefault();
			console.clear();
			console.log(user);
			// const { name, email, username, password } = user;

			await axios
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
				})
		}
		catch (err) {
			console.log(err);
		}
		setUser("");
	}

	const changePage = (curPage) => {
		setPage(curPage);
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

									<form className="signupforms">
										{page === 'one' ?
											<Page1 name={props.name} notname={props.notname} changePage={changePage} HandleInputs={HandleInputs} user={user} />
											:
											<Page2 name={props.name} notname={props.notname} changePage={changePage} HandleInputs={HandleInputs} user={user} PostData={PostData} />}
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
import React from 'react'

const Join = () => {
	return (
		<div id="join" className="text-center">
			<div className="container">

				<h2>Welcome to SheCodes</h2>
				<div className="container">
					<div className="row d-flex justify-content-around">
						<div id="join_student" className="col-md-4 mb-3">
							<h5 className="text-white">Join as</h5>
							<h3>Student</h3>
							<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
								consequatur porro hic
								dicta.</p>
							<a data-bs-toggle="modal" data-bs-target="#signInStudent" className="sign_in_button">Sign in</a>
						</div>
						<div id="join_teacher" className="col-md-4 mb-3">
							<h5 className="text-white">Join as</h5>
							<h3>Teacher</h3>
							<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
								consequatur porro hic dicta.</p>
							<a className="sign_in_button" data-bs-toggle="modal" data-bs-target="#signInVolunteer">Sign in</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Join;
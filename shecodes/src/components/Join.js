import React from 'react'

const Join = () => {
	return (
		<div id="join" class="text-center">
			<div class="container">

				<h2>Welcome to SheCodes</h2>
				<div class="container">
					<div class="row">
						<div class="col-md-1"></div>
						<div id="join_student" class="col-md-4">
							<h5 class="text-white">Join as</h5>
							<h3>Student</h3>
							<p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
								consequatur porro hic
								dicta.</p>
							<a href="#" data-bs-toggle="modal" data-bs-target="#signInStudent" class="sign_in_button">Sign in</a>
						</div>
						<div class="col-md-2"></div>
						<div id="join_teacher" class="col-md-4">
							<h5 class="text-white">Join as</h5>
							<h3>Teacher</h3>
							<p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
								consequatur porro hic dicta.</p>
							<a href="#" class="sign_in_button" data-bs-toggle="modal" data-bs-target="#signInVolunteer">Sign in</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Join;
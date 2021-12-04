import React from 'react'

const Join = () => {
	return (
		<div id="join" className="text-center">
			<div className="container">
				<h2>Welcome to SheCodes</h2>
				<div className="container">
					<div className="row">
						<div className="col-md-1"></div>
						<div id="join_student" className="col-md-4">
							<h5 className="text-white">Join as</h5>
							<h3>Student</h3>
							<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
								consequatur porro hic
								dicta.</p>
							<a href="#" className="sign_in_button">Sign in</a>
						</div>
						<div className="col-md-2"></div>
						<div id="join_teacher" className="col-md-4">
							<h5 className="text-white">Join as</h5>
							<h3>Teacher</h3>
							<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
								consequatur porro hic dicta.</p>
							<a href="#" className="sign_in_button">Sign in</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Join;
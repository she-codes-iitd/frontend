import React from 'react'

const About = () => {
	return (
		<div id="about" className="text-center d-flex flex-column align-items-center specify-margin">
			<div id="about_text" className="my-auto">
				<h1>Learn on your<br />class schedule</h1>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Facere, ad minus quisquam dolore officia
					expedita.</p>
				<a data-bs-toggle="modal" data-bs-target="#signUpStudent" className="btn">Join Now</a>
			</div>
		</div>
	)
}

export default About;
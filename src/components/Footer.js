import React from 'react'
import logo from '../imgs/logo.png'
const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row d-flex justify-content-between">
					<div className="col-md-3 mb-3 d-flex flex-column align-items-center">
						<img src={logo} href="#" style={{ cursor: "pointer" }} height="35px" width="193.73px" alt="SheCodes" />
						<h4>An initiative by NSS IIT Delhi</h4>
					</div>
					<div className="col-md-3 d-flex justify-content-center">
						<div className="row">
							<div className="col-3 d-flex justify-content-center">
								<a href="https://www.linkedin.com" rel="noreferrer" target="_blank" className="element"><i className="fab fa-linkedin-in"></i></a>
							</div>
							<div className="col-3 d-flex justify-content-center">
								<a href="https://www.fackebook.com" rel="noreferrer" target="_blank" className="fb-element"><i
									className="fab fa-facebook-f"></i></a>
							</div>
							<div className="col-3 d-flex justify-content-center">
								<a href="https://www.twitter.com" rel="noreferrer" target="_blank" className="element"><i className="fab fa-twitter"></i></a>
							</div>
							<div className="col-3 d-flex justify-content-center">
								<a href="https://www.instagram.com" rel="noreferrer" target="_blank" className="element"><i className="fab fa-instagram"></i></a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5 mx-auto text-center pb-3" id="copyright">
					<a href="mailto:abcd@gmail.com" id="contact">abcd@gmail.com</a> <br />
					All rights reserved. NSS IIT Delhi. <span id="year">{new Date().getFullYear()}</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
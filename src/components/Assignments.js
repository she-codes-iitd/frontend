import React, { useState } from "react";
import NavBarLoggedIn from './NavBarLoggedIn';
import '../css/assignments.css';
import BeforeSubmit from "./assignments/BeforeSubmit";
import AfterSubmit from "./assignments/AfterSubmit";
import { Link } from "react-router-dom";
import { ImageConfig } from "./assignments/config/ImageConfig";

const Assignments = (props) => {
	const [submitted, setSubmitted] = useState(false);
	const [myFiles, setFiles] = useState([]);
	const onFileChange = (files) => {
		if (myFiles !== files) {
			setFiles(files);
		}
		// myFiles = files;
		// console.log(myFiles);
		// props.files = files;
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (myFiles.length === 0) {
			console.log("EMPTY");
		}
		else {
			console.log("FILES HERE");
			console.log(myFiles);
			if (submitted === false) {
				setSubmitted(true);
			}
		}
	}

	const print = () => {
		console.log(myFiles);
	}

	return (
		<div className='body-assignment'>
			<div id="contain">
				<NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div className="container my-4 d-flex justify-content-center">
				<div className="assignment p-4 w-100">
					<div className="d-flex justify-content-between">
						<div>
							<h3>Assignment Title</h3>
							<h6>Description</h6>
						</div>
						<div>
							<h5>Deadline</h5>
						</div>
					</div>
					{submitted
						// ? <AfterSubmit files={myFiles} />
						? <>
							<ul className="p-4 w-100">
								{
									myFiles.map((item, index) => (
										<>
											{/* <div key={index} className="drop-file-preview__item">
											<img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
											<div className="drop-file-preview__item__info">
												<p className='mb-0'>{item.name}</p>
												<p className="mb-0">{parseFloat(item.size / (1024)).toFixed(2)} KB</p>
											</div>
										</div> */}
											<li key={index} className="row mb-3">
												<div className="col-md-3 text-center" onClick={print}>{item.name}</div>
												<div className="col-md-3 text-center">02:32pm</div>
												<div className="col-md-3 text-center">04th Oct 2021</div>
												<div className="col-md-3 text-center">Not Graded</div>
											</li>
										</>
									))
								}
							</ul>
							<h6 className="text-center submitted mb-4">
								Your assignment has been submitted!
							</h6>
							<div className="d-flex justify-content-center">
								<div>
									<button className="yellow-button">Edit Submission</button>
									<Link to="/id/ongoing/topics/topic/assignments/history">
										<button className="yellow-button ms-3">View Submission History</button>
									</Link>
								</div>
							</div>
						</>
						: <BeforeSubmit onFileChange={(files) => onFileChange(files)} submit={onSubmit} />
					}
				</div>
			</div>
			{/* <Link to="/id/ongoing/topic">
				<button className='go-back'>Go Back</button>
			</Link> */}
		</div>
	)
}

export default Assignments;
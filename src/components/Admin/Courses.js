import React, { useState } from "react";
import axios from "axios";
import SimpleNav from "../simpleNav";
import './css/lists.css';
import { Link } from "react-router-dom";

const Courses = (props) => {
	const [error, setError] = useState("");
	const [newCourse, setNewCourse] = useState("");
	const HandleInputs = (e) => {
		setNewCourse(e.target.value);
		console.log(e.target.value);
	}

	const [course1, setCourse1] = useState({
		name: "Course1"
	});
	const [course2, setCourse2] = useState({
		name: "Course2"
	});
	const [course3, setCourse3] = useState({
		name: "Course3"
	});
	const [courses, setCourse] = useState([course1, course2, course3]);

	const reloadPage = () => {
		const timeLimit = 3;
		let i = 0;
		const timer = setInterval(function () {
			i++;
			if (i == timeLimit)
				window.location.reload(false);
		}, 1000);
	}


	const PostData = async (e) => {
		try {
			e.preventDefault();
			console.clear();

			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios
				.post(`/courses/add_course`, {
					courseToAdd: newCourse
				},
					config
				);

			if (data.success === false) {
				console.log(data);
				throw data;
			}
			reloadPage();
		}
		catch (err) {
			setError(err.response.data.message);
		}
		// setUser("");
	}


	return (
		<>
			<div className="light-blue-bg">
				<SimpleNav logo={props.logo} />
				<div className='container Mentors my-3'>
					<h1 className="mentor_heading display-4">Courses</h1>
					<ul className="px-4 w-100">
						<li className="headings row mb-3">
							<div className="col-md-3 text-center">Name</div>
							{/* <div className="col-md-3 text-center">College Name</div>
						<div className="col-md-3 text-center">College ID</div>
						<div className="col-md-3 text-center">Hours/day</div> */}
						</li>
						{
							courses.map((item, index) => (
								<>
									{/* <div key={index} className="drop-file-preview__item">
											<img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
											<div className="drop-file-preview__item__info">
												<p className='mb-0'>{item.name}</p>
												<p className="mb-0">{parseFloat(item.size / (1024)).toFixed(2)} KB</p>
											</div>
										</div> */}
									<Link to={"/admin/courses/topics"}>
										<li className="items row mb-3">
											<div className="col-md-3 text-center">{item.name}</div>
											{/* <div className="col-md-3 text-center">{item.collegeName}</div>
										<div className="col-md-3 text-center">{item.collegeID}</div>
										<div className="col-md-3 text-center">{item.hours}</div> */}
										</li>
									</Link>
								</>
							))
						}
					</ul>
					<form onSubmit={PostData} >
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<input type="text" name="newCourse" className="form-control" onChange={HandleInputs} placeholder="Type the course name you want to add" />
								</div>
								<div className="col-md-4">
									<button type="submit" className="yellow_button">Add Course</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>

	)
}

export default Courses;
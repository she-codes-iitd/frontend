import React, { useState } from "react";
import SimpleNav from "./simpleNav";
import '../css/lists.css';

const Students = (props) => {
	const [student1, setStudent1] = useState({
		name: "Student1",
		schoolName: "IITD",
		courseEnrolled: "2020CS",
		admissionNo: "2"
	});
	const [student2, setStudent2] = useState({
		name: "Student2",
		schoolName: "IITB",
		courseEnrolled: "2020MT",
		admissionNo: "4"
	});
	const [students, setStudent] = useState([student1, student2]);

	return (
		<div className="light-blue-bg">
			<SimpleNav logo={props.logo} />
			<div className='container Students my-3'>
				<h1 className="student_heading display-4">Freshly Enrolled Students</h1>
				<ul className="px-4 w-100">
					<li className="headings row mb-3">
						<div className="col-md-3 text-center">Name</div>
						<div className="col-md-3 text-center">School Name</div>
						<div className="col-md-3 text-center">Course Enrolled</div>
						<div className="col-md-3 text-center">Admission Number</div>
					</li>
					{
						students.map((item, index) => (
							<>
								{/* <div key={index} className="drop-file-preview__item">
											<img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
											<div className="drop-file-preview__item__info">
												<p className='mb-0'>{item.name}</p>
												<p className="mb-0">{parseFloat(item.size / (1024)).toFixed(2)} KB</p>
											</div>
										</div> */}
								<li className="items row mb-3">
									<div className="col-md-3 text-center">{item.name}</div>
									<div className="col-md-3 text-center">{item.schoolName}</div>
									<div className="col-md-3 text-center">{item.courseEnrolled}</div>
									<div className="col-md-3 text-center">{item.admissionNo}</div>
								</li>
							</>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Students;
import React from 'react';
import { Link } from 'react-router-dom';
import SimpleNav from '../simpleNav';

function Dashboard(props) {
	return (
		<>
			<SimpleNav logo={props.logo} />
			<div className="container mt-4">
				<div className="row d-flex justify-content-around align-items-center">
					<div className="col-md-3 item">
						<Link to="/admin/mentors">
							<img src='https://image.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg' alt='' className='img-fluid admin-img admin-img' />
						</Link>
					</div>
					<div className="col-md-3 item">
						<Link to="/admin/students">
							<img src='https://image.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg' alt='' className='img-fluid admin-img' />
						</Link>
					</div>
					<div className="col-md-3 item">
						<Link to="/admin/courses">
							<img src='https://image.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg' alt='' className='img-fluid admin-img' />
						</Link>
					</div>
				</div>
				<div className="row d-flex justify-content-around text-center">
					<div className="col-md-3 item">
						<Link to="/admin/mentors">
							<div className="item__overlay">
								<h3 id="person1" aria-hidden="true">Mentors</h3>
								<div className="item__body">
									<p>See a list of mentors</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-3 item">
						<Link to="/admin/students">
							<div className="item__overlay">
								<h3 id="person2" aria-hidden="true">Students</h3>
								<div className="item__body">
									<p>See a list of enrolled students</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-3 item">
						<Link to="/admin/courses">
							<div className="item__overlay">
								<h3 id="person3" aria-hidden="true">Courses</h3>
								<div className="item__body">
									<p>All Courses taught</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
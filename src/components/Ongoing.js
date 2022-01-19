import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import '../css/All.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

function findName(id, courses) {
	for (var i = 0; i < courses.length; ++i) {
		if (courses[i]["_id"] === id) {
			return courses[i]["name"];
		}
	}
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

function Ongoing(props) {
	var [mycourses, setMyCourses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/student/profile')
			.then(res => res.json())
			.then(data => setMyCourses(data["student"]["courses"]))


	}, []);
	var [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/courses/')
			.then(res => res.json())
			.then(data => setCourses(data["courses"]))
	}, []);

	mycourses = mycourses.filter(onlyUnique);
	courses = courses.filter(onlyUnique);
	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div class="container grid-container-all">
			
				{mycourses.map((course) => {
					return (
						
							<div class='row'><div class="col-md-4 grid-item-all">
							<Link to="/student-dashboard/ongoing/topics">{findName(course, courses)}</Link>
							
							</div>
							</div>
						
					);
				})}
			</div>

		</>
	);
}


export default Ongoing;
import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import Mentors from './components/Admin/Mentors'
import FreshlyEnrolledStudents from './components/Admin/FreshlyEnrolledStudents';
import MentorProfile from './components/Admin/MentorProfile';
import Students from './components/Admin/Students';
import Courses from './components/Admin/Courses';
import Topics from './components/Admin/Topics';
import StudentProfile from './components/Admin/StudentProfile';
import Assignment from './components/Admin/Assignment';
import Quiz from './components/Admin/Quiz';
import Add from './components/Admin/Add';
import Video from './components/Admin/Video';

function Admin() {
	const [hamburger, setHamburger] = useState(false)
	const [navMenu, setNav] = useState(false)

	const closeHamburger = () => {
		if (hamburger === true) {
			setHamburger(false);
		}
		if (navMenu === true) {
			setNav(false);
		}
	}

	return (

		<div onClick={closeHamburger}>
			<Routes>
				<Route path="/" element={<Dashboard logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/mentors/" element={<Mentors logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/mentors/Mentor1" element={<MentorProfile logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/students/" element={<Students logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/freshlyenrolledstudents/" element={<FreshlyEnrolledStudents logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/students/Student1" element={<StudentProfile logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/courses/topics/assignment" element={<Assignment logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/courses/topics/quiz" element={<Quiz logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/courses/" element={<Courses logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/courses/topics/" element={<Topics logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/courses/topics/add" element={<Add logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/courses/topics/video" element={<Video logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
			</Routes>



		</div>
	);
}

export default Admin;
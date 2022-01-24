
import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';

import CoursesTab from './components/CoursesTab';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ongoing from './components/Ongoing';
import Completed from './components/Completed';
import OngoingTopics from './components/OngoingTopics';
import AllCourses from './components/AllCourses';
import CourseContent from './components/CourseContent';
import Instruct from './components/quiz/Instruct'
import Grade from './components/quiz/Grade';
import Review from './components/quiz/Review';
import Qns from './components/quiz/Qns';
import Assignments from './components/Assignments'
import SubmissionHistory from './components/SubmissionHistory';
import StudentProfile from './components/Admin/StudentProfile';
import MentorProfile from './components/Admin/MentorProfile';

function Id() {
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
				<Route path="/" element={<CoursesTab logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route exact path="/all" element={<AllCourses logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route exact path="/ongoing" element={<Ongoing logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route exact path="/completed" element={<Completed logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route exact path="/ongoing/topics" element={<OngoingTopics logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route exact path="/ongoing/topics/topic" element={<CourseContent logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />

				<Route path="/ongoing/topics/topic/quiz" element={<Instruct logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/ongoing/topics/topic/quiz/attempt" element={<Qns logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/ongoing/topics/topic/quiz/review" element={<Review logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/ongoing/topics/topic/quiz/grade" element={<Grade logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/ongoing/topics/topic/assignments" element={<Assignments logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/ongoing/topics/topic/assignments/history" element={<SubmissionHistory logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />

				<Route path="/student" element={<StudentProfile logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} admin={false} />} />
				<Route path="/mentor" element={<MentorProfile logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} admin={false} />} />
			</Routes>

		</div >
	);
}

export default Id;

import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';

import CoursesTab from './components/CoursesTab';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ongoing from './components/Ongoing';
import AllCourses from './components/AllCourses';
import CourseContent from './components/CourseContent';
import Instruct from './components/quiz/Instruct'
import Grade from './components/quiz/Grade';
import Review from './components/quiz/Review';
import Qns from './components/quiz/Qns';

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
				<Route exact path="/ongoing/topic" element={<CourseContent logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />

				<Route path="/ongoing/topic/quiz" element={<Instruct logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
				<Route path="/ongoing/topic/quiz/attempt" element={<Qns logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
				<Route path="/ongoing/topic/quiz/review" element={<Review logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
				<Route path="/ongoing/topic/quiz/grade" element={<Grade logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />

			</Routes>



		</div>
	);
}

export default Id;


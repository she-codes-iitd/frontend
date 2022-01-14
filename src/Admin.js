
import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';
import CoursesTab from './components/CoursesTab';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mentors from './components/Mentors';
import Students from './components/Students';
import MentorProfile from './components/MentorProfile';


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
				<Route path="/" element={<CoursesTab logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/mentors/" element={<Mentors logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/mentors/Mentor1" element={<MentorProfile logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route path="/students/" element={<Students logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />

			</Routes>



		</div>
	);
}

export default Admin;
import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import Mentors from './components/Admin/Mentors'
import Students from './components/Admin/Students';
import MentorProfile from './components/Admin/MentorProfile';

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

			</Routes>



		</div>
	);
}

export default Admin;
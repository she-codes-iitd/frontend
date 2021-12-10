import id_page from '../src/imgs/Group19.png'
import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';
import Header2 from './components/Header2';
import CoursesTab from './components/CoursesTab';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ongoing from './components/Ongoing';

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
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />
			</div>
			<Routes>
				<Route path="/" element={<CoursesTab logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
				<Route exact path="/ongoing" element={<Ongoing logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />} />
			</Routes>



		</div>
	);
}

export default Id;

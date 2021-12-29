import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Mentor/Dashboard';
import Grading from './components/Mentor/GradingM';
import Ongoing from './components/Mentor/OngoingM';
import CurrentTopic from './components/Mentor/CurrentTopicM';
import AssignmentMentor from './components/Mentor/AssignmentMentor';
import QuizMentor from './components/Mentor/QuizMentor';

function Mentor() {
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
				<Route path="/grading" element={<Grading logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
                <Route path="/ongoing" element={<Ongoing logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
				<Route path="/ongoing/currtopic" element={<CurrentTopic logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
				<Route path="/ongoing/currtopic/assignment" element={<AssignmentMentor logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
				<Route path="/ongoing/currtopic/quiz" element={<QuizMentor logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />}  />
			</Routes>
		</div>
	);
}

export default Mentor;


import front_bg_up from '../src/imgs/front_bg_up.jpg'
import './App.css';
import logo from '../src/imgs/logo.png'
import React, { useState } from 'react';
import Header2 from './components/Header2';
import CoursesTab from './components/CoursesTab';

function App() {
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

		<div className="App" onClick={closeHamburger}>
			<div id="contain">
				<img src={front_bg_up} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />
				<CoursesTab />
			</div>
			

		</div>
	);
}

export default App;

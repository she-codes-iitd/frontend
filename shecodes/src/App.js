import front_bg from '../src/imgs/front_bg.jpg'
import './App.css';
import Footer from './components/Footer';
import React, { useState } from 'react';
import Header from './components/Header'
import LoggedInToggle from './components/LoggedInToggle';
import teardrop from '../src/imgs/teardrop.png'

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

	const [isLoggedIn, setLoggedIn] = useState(false);

	return (

		<div className="App" onClick={closeHamburger}>
			<div id="contain">
				<img src={front_bg} id="bg" className="img-fluid" alt="" />
				<Header isLoggedIn={isLoggedIn} logo={teardrop} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav}/>
				<LoggedInToggle isLoggedIn={isLoggedIn} />
			</div>
			<Footer />

		</div>
	);
}

export default App;

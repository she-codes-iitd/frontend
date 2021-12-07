import front_bg from '../src/imgs/front_bg.jpg'
import './App.css';
import logo from '../src/imgs/logo.png'
import Footer from './components/Footer';
import React, { useState } from 'react';
import Header from './components/Header'
import ScrollButton from './components/ScrollButton';
import About from './components/About';
import Initiative from './components/Initiative';
import Join from './components/Join';
import Gallery from './components/Gallery';

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
				<img src={front_bg} id="bg" className="img-fluid" alt="" />
				<Header logo={logo} hamburger={hamburger} navMenu={navMenu} setHamburger={setHamburger} setNav={setNav} />
				<ScrollButton />
				<About />
				<Initiative />
				<Join />
				<Gallery />

			</div>
			<Footer />

		</div>
	);
}

export default App;

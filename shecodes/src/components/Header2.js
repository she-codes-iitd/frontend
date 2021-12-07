import React, { useState } from 'react'
import NavBarLoggedIn from './NavBarLoggedIn';


function Header2(props) {

	return (
		<div id="header" style={{position: 'absolute'}}>
			
			<NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />

			<div className="container" id="para_learn">
				<h1 id="learn" className="text-white">
					<span className="yellow-text">Learn </span>on your <br /> class <span className="yellow-text">schedule</span>
				</h1>
				<p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quaerat eius voluptate
					officiis tempora corporis?</p>
			</div>
		</div>
	);
}
export default Header2;
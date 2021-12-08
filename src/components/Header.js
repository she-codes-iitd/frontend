import React from 'react'
import NavBar2 from './NavBar2'

function Header(props) {

	return (
		<div id="header">
			
			<NavBar2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			
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
export default Header;
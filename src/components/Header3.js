import React from 'react'
import NavBarLoggedIn from './NavBarLoggedIn';
import '../css/ongoingtopic.css'

function Header3(props) {

	return (
		<div id="header2">
			
			<NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />

		</div>
	);
}
export default Header3;
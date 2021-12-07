import React, { useState } from 'react'
import NavBar2 from './NavBar2'
import Logo from './Logo'
import logo from '../imgs/logo.png';
import NavBarLoggedIn from './NavBarLoggedIn';


function Header(props) {

const openHamburger = () => {
    if (props.hamburger === false) {
        props.setHamburger(true);
    }
    if (props.navMenu === false) {
        props.setNav(true);
    }
}


return (
    <div id="header">
    {props.isLoggedIn ?<NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav}/> : 
    <NavBar2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav}/>}
    
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
import React, { useState } from 'react'
import './css/MentorDash.css';
import NavBarLoggedIn from '.././NavBarLoggedIn';

function HeaderM(props) {

	return (
		<div id = "header2">			
            <NavBarLoggedIn logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />

                    <div className="container" id="para_learn">
                        <h1 id="learn" className="text-white">
                            <span class="yellow-text">{props.heading}</span>
                        </h1>
                        <p className="text-white">{props.desc}</p>
                        <div className = "btn_cont">
                        <a href={props.link} class="edit_button">{props.button}</a>
                        </div>
                        
                    </div>
            
                    <div className="imageholder">
                        <img src={props.imglink} alt=""/>
                    </div>

        </div>
	);
}
export default HeaderM;

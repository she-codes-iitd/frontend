import React from 'react';
import { Link } from 'react-router-dom';
import '../css/All.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

function Ongoing(props) {

	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div class="grid-container-all">
            <Link to="/student-dashboard/ongoing/topics">
				<div class="grid-item-all">1
				
				</div>
                </Link>
				<div class="grid-item-all">2
				
				</div>
				<div class="grid-item-all">3
				
				
				</div>
			</div>

		</>
	);
}

export default Ongoing;
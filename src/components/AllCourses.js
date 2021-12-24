import React from 'react';
import { Link } from 'react-router-dom';
import '../css/All.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

function AllCourses(props) {

	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div class="grid-container-all">
				<div class="grid-item-all">1
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">2
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">3
				
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">4
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">5
				
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">6
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">7
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">8
				<button className='btn btn-primary'>Enroll</button>
				</div>
				<div class="grid-item-all">9
				
				<button className='btn btn-primary'>Enroll</button>
				</div>
			</div>

		</>
	);
}

export default AllCourses;
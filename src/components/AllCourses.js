import React from 'react';
import {Link } from 'react-router-dom';
import '../css/Courses.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

function AllCourses(props) {

	return (
		<>
					<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<section class="cards-wrapper">
				<nav>
					<Link to="/id/ongoing">
						<div class="container commoncard card1">

							
								<div class="text" style={{color: "black"}}>Course 1</div>
							
                            <button class="btn btn-primary">Enroll</button>
						</div>
					</Link>
					<Link to="/id/ongoing">
						<div class="container commoncard card4">

						<div class="text" style={{color: "black"}}>Course 1</div>
                            <button class="btn btn-primary">Enroll</button>
						</div>
					</Link>

					<Link to="/id/completed">
						<div class="container commoncard card2">

						<div class="text" style={{color: "black"}}>Course 1</div>
                            <button class="btn btn-primary">Enroll</button>

						</div>
					</Link>
					<Link to="/id/all">
						<div class="container commoncard card3">
						<div class="text" style={{color: "black"}}>Course 1</div>
                            <button class="btn btn-primary">Enroll</button>
						</div>
					</Link>
				</nav>
			</section>
		</>
	);
}

export default AllCourses;
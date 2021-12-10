import React from 'react';
import {Link } from 'react-router-dom';
import '../css/Courses.css';

function CoursesTab(props) {

	return (
		<>
			<section class="cards-wrapper">
				<nav>
					<Link to="/id/ongoing">
						<div class="container commoncard card1">

							<div class="overlay">
								<div class="text">Ongoing Courses</div>
							</div>
						</div>
					</Link>
					<Link to="/id/completed">
						<div class="container commoncard card2">

							<div class="overlay">
								<div class="text">Completed Courses</div>
							</div>
						</div>
					</Link>
					<Link to="/id/all">
						<div class="container commoncard card3">

							<div class="overlay">
								<div class="text">All Courses</div>
							</div>
						</div>
					</Link>
				</nav>
			</section>
		</>
	);
}

export default CoursesTab;
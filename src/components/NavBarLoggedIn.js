import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Logo from './Logo';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import '../css/NavbarLoggedIn.css';

function NavBarLoggedIn(props) {
	const openHamburger = () => {
		if (props.hamburger === false) {
			props.setHamburger(true);
		}
		if (props.navMenu === false) {
			props.setNav(true);
		}
	}

	const [value, onChange] = useState(new Date());
	const [isLoggedIn, setLogged] = useState(true);

	function toggleSignIn() {

		setLogged(() => {
			fetch('http://localhost:3000/student/logout')
				.then(res => res.json())
				.then(response => window.location = "/"
				);
		});
	}

	return (
		<div style={{ backgroundColor: "#16324f" }}>
			<div id="navbar" className="container">
				<div className="row pt-3">


					<Logo img={props.logo} />
					<div className="col-md-6 ms-5 d-flex justify-content-around align-items-center">
						<div className="d-flex justify-content-center flex-column">
							<a className="p-2 pb-1" style={{ backgroundColor: "#16324f", color: "#ffde73", borderStyle: "none" }}><SearchIcon /></a>

						</div>
						<div className="d-flex justify-content-center">
							<div className="p-2 pb-1">
								<div className="btn-group">
									<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#16324f", color: "#ffde73", borderStyle: "none" }}>
										<CalendarTodayIcon />
									</button>
									<ul className="dropdown-menu" style={{ width: '250px' }}>
										<li><a className="dropdown-item"><Calendar onChange={onChange} value={value} /></a></li>
									</ul>
								</div>


							</div>
							<div className="line mx-auto"></div>
						</div>
						<div className="d-flex justify-content-center">
							<a className="p-2 pb-1" style={{ backgroundColor: "#16324f", color: "#ffde73", borderStyle: "none" }}><QuestionMarkIcon /></a>
							<div className="line mx-auto"></div>
						</div>
						<div className="d-flex justify-content-center">
							<a className="p-2 pb-1" style={{ backgroundColor: "#16324f", color: "#ffde73", borderStyle: "none" }}><NotificationsIcon /></a>
							<div className="line mx-auto"></div>
						</div>
					</div>
					<div className="col-md-2 ms-auto">
						<div className="d-flex justify-content-center align-items-center">


							<div className="btn-group">
								<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#16324f", color: "#ffde73", borderStyle: "none" }}>
									<PersonIcon />
								</button>
								<ul className="dropdown-menu">
									<li>
										<Link to="/id/student">
											<a className="dropdown-item" style={{ color: "#043059" }}>Student</a>
										</Link>
									</li>
									<li>
										<Link to="/id/mentor">
											<a className="dropdown-item" style={{ color: "#043059" }}>Mentor</a>
										</Link>
									</li>
									<li>
									</li>
									<li><hr className="dropdown-divider" /></li>
									<li><a className="dropdown-item" style={{ color: "#043059" }} onClick={toggleSignIn}>Logout</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="small-screen-nav" className="overlay-black overflow-y-hide">
				<div className="container d-flex align-items-center overflow-y-hide">
					<div id="hamburger">
						<span className="bar"></span>
						<span className="bar mid"></span>
						<span className="bar"></span>
					</div>
					<div>
						<a href="index.html" className="my-navbar-logo"><img src={props.logo} alt="" /></a>
					</div>
					<div id="toggler" className={props.hamburger ? 'show' : ''} onClick={openHamburger}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
					<ul className={props.navMenu ? 'my-nav-menu ps-0 me-auto show' : 'my-nav-menu ps-0 me-auto'}>
						<li className="my-nav-item active">
							<a href="#about" className="my-nav-link"><SearchIcon /></a>
						</li>
						<li className="my-nav-item">
							<a href="#initiative" className="my-nav-link"><CalendarTodayIcon /></a>
						</li>
						<li className="my-nav-item">
							<a href="#gallery" className="my-nav-link"><QuestionMarkIcon /></a>
						</li>
						<li className="my-nav-item">
							<a href="#contact" className="my-nav-link"><NotificationsIcon /></a>
						</li>
					</ul>
				</div>
			</div>
		</div >

	);
}

export default NavBarLoggedIn;
import logo from '../src/imgs/logo.png';
import front_bg from '../src/imgs/front_bg.jpg'
import './App.css';
import Footer from './components/Footer';
import Script from './components/scripts';

function App() {
	return (
		<div className="App">
			<div id="contain">
				<img src={front_bg} id="bg" className="img-fluid" alt="" />
				<div id="header">
					<div id="navbar" className="container">
						<div className="row pt-3">
							<div id="logo" className="col-md-3 d-flex align-items-center">
								<img src={logo} href="#" style={{ cursor: "pointer" }} height="35px" alt="SheCodes" />
							</div>
							<div className="col-md-6 ms-5 d-flex justify-content-around align-items-center">
								<div className="d-flex justify-content-center flex-column">
									<a href="#about" className="p-2 pb-1">About</a>
									<div className="active line mx-auto"></div>
								</div>
								<div className="d-flex justify-content-center">
									<a href="#initiative" className="p-2 pb-1">Initiative</a>
									<div className="line mx-auto"></div>
								</div>
								<div className="d-flex justify-content-center">
									<a href="#gallery" className="p-2 pb-1">Gallery</a>
									<div className="line mx-auto"></div>
								</div>
								<div className="d-flex justify-content-center">
									<a href="#" className="p-2 pb-1">Contact</a>
									<div className="line mx-auto"></div>
								</div>
							</div>
							<div className="col-md-2 ms-auto">
								<div className="d-flex justify-content-center align-items-center">
									<div id="button" className="px-4 btn" href="#">Sign in</div>
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
								<a href="index.html" className="my-navbar-logo"><img src={logo} alt="" /></a>
							</div>
							<div id="toggler">
								<span className="bar"></span>
								<span className="bar"></span>
								<span className="bar"></span>
							</div>
							<ul className="my-nav-menu ps-0 me-auto">
								<li className="my-nav-item active">
									<a href="#about" className="my-nav-link">About</a>
								</li>
								<li className="my-nav-item">
									<a href="#initiative" className="my-nav-link">Initiative</a>
								</li>
								<li className="my-nav-item">
									<a href="#gallery" className="my-nav-link">Gallery</a>
								</li>
								<li className="my-nav-item">
									<a href="#" className="my-nav-link">Contact</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="container" id="para_learn">
						<h1 id="learn" className="text-white">
							<span className="yellow-text">Learn </span>on your <br /> className <span className="yellow-text">schedule</span>
						</h1>
						<p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quaerat eius voluptate
							officiis tempora corporis?</p>
					</div>
				</div>

				<div id="about" className="text-center d-flex flex-column align-items-center">
					<div id="about_text" className="my-auto">
						<h1>Learn on your<br />className schedule</h1>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Facere, ad minus quisquam dolore officia
							expedita.</p>
						<a href="#" className="btn">Join Now</a>
					</div>
				</div>
				<div id="initiative">

				</div>
				<div id="join" className="text-center">
					<div className="container">

						<h2>Welcome to SheCodes</h2>
						<div className="container">
							<div className="row">
								<div className="col-md-1"></div>
								<div id="join_student" className="col-md-4">
									<h5 className="text-white">Join as</h5>
									<h3>Student</h3>
									<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
										consequatur porro hic
										dicta.</p>
									<a href="#" className="sign_in_button">Sign in</a>
								</div>
								<div className="col-md-2"></div>
								<div id="join_teacher" className="col-md-4">
									<h5 className="text-white">Join as</h5>
									<h3>Teacher</h3>
									<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis quisquam
										consequatur porro hic dicta.</p>
									<a href="#" className="sign_in_button">Sign in</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;

import React, { useState } from 'react';

const Carousel = (props) => {

	const [class1, setClass1] = useState(false)
	const [class2, setClass2] = useState(false)
	const [class3, setClass3] = useState(false)

	if (props.id === '1') {
		if (class1 === false) {
			setClass1(true);
		}
		if (class2 === true) {
			setClass2(false);
		}
		if (class3 === true) {
			setClass3(false);
		}
	}
	else if (props.id === '2') {
		if (class2 === false) {
			setClass2(true);
		}
		if (class1 === true) {
			setClass1(false);
		}
		if (class3 === true) {
			setClass3(false);
		}
	}
	else if (props.id === '3') {
		if (class3 === false) {
			setClass3(true);
		}
		if (class2 === true) {
			setClass2(false);
		}
		if (class1 === true) {
			setClass1(false);
		}
	}

	return (
		<div className="carousel slide" data-bs-pause="false" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className={class1 ? 'carousel-item active w-100 item' : 'carousel-item w-100 item'}>
					<img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" className="d-block w-100" alt="..." />
					Instagram
				</div>
				<div className={class2 ? 'carousel-item active w-100 item' : 'carousel-item w-100 item'}>
					<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG" className="d-block w-100" alt="..." />
					Microsoft
				</div>
				<div className={class3 ? 'carousel-item active w-100 item' : 'carousel-item w-100 item'}>
					<img src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg" className="d-block w-100" alt="..." />
					am just a square UwU
				</div>
			</div>
			{/* <button className="carousel-control-prev" type="button" data-bs-target=".carouselExampleControls" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target=".carouselExampleControls" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button> */}
		</div>
	)
}

export default Carousel;
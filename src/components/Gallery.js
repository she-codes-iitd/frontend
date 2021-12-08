import React from "react";
import Carousel from "./Carousel";

const Gallery = () => {
	return (
		<div id="gallery">
			<h1 className="text-center mb-4">Picture Gallery</h1>
			<div className="container d-none d-md-block" id="pc_gallery">
				<div className="row d-flex align-items-center justify-content-around">
					<div className="col-md-3 wrap text-center">
						<Carousel id='1' />
					</div>
					<div className="col-md-4 wrap text-center">
						<Carousel id='2' />
					</div>
					<div className="col-md-3 wrap text-center">
						<Carousel id='3' />
					</div>
				</div>
			</div>
			<div className="container d-block d-md-none" id="mobile_gallery">
				<div className="row d-flex align-items-center justify-content-around">
					<div className="col-md-3 wrap text-center">
						<Carousel id='1' />
					</div>
					{/* <div className="col-md-4 wrap text-center">
						<Carousel id='2' />
					</div>
					<div className="col-md-3 wrap text-center">
						<Carousel id='3' />
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Gallery;
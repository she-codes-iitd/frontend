import React from 'react'

function Logo(props) {
	return (
		<div id="logo" className="col-md-3 d-flex align-items-center">
			<img src={props.img} href="#" style={{ cursor: "pointer" }} height="35px" alt="SheCodes" />
		</div>
	);
}

export default Logo;
import React from "react";
import Logo from './Logo';

const SimpleNav = (props) => {
	return (
		<>
			<div className="d-none d-md-block blue-bg p-3">
				<Logo img={props.logo} />
			</div>
			<div className="d-block d-flex justify-content-center d-md-none blue-bg p-3">
				<Logo img={props.logo} />
			</div>
		</>
	)
}

export default SimpleNav;
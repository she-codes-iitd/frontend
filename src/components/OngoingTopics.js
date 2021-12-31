import React from "react";
import Topics from "./Topics";
import id_page from '../imgs/Group19.png'
import SingleTopic from "./SingleTopic";
import '../css/ongoingtopic.css';
import Header2 from './Header2';


function OngoingTopics(props) {
	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>

			<div className="ongoingtopic">

				<Topics />
				<SingleTopic />

			</div>

		</>

	);
}

export default OngoingTopics;
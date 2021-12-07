import React from "react";
import About from "./About";
import CoursesTab from "./CoursesTab";
import Join from "./Join";
import Initiative from "./Initiative";
import ScrollButton from "./ScrollButton";
import Gallery from "./Gallery";
import TopicsTab from "./TopicsTab";

function LoggedInToggle(props) {
	const toggle = props.isLoggedIn;
	if (toggle) {
		return (
			<div>
				<CoursesTab />
				<TopicsTab />
			</div>
		);
	} else {
		return (
			<div>
				<ScrollButton />
				<About />
				<Initiative />
				<Join />
				<Gallery />
			</div>

		);
	}
}
export default LoggedInToggle;
import React from "react";
import About from "./About";
import CoursesTab from "./CoursesTab";
import Join from "./Join";
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
                <About />
                <Join />

            </div>

        );
    }
}
export default LoggedInToggle;
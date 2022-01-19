import React from 'react';
import { Link } from 'react-router-dom';
import HeaderM from "./HeaderM";

function Ongoing(props) {
	return (
    <>
        <div id="contain">
        <img id="bg" className="img-fluid2" alt="" />
        <HeaderM logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav}
        heading = {"Ongoing"} desc={"View and update the ongoing courses"} button="Back to Dashboard" 
        link="/mentor/id" imglink="https://image.freepik.com/free-vector/grades-concept-illustration_114360-628.jpg"/>
        </div>

        <div class="grid">
	<div class="item">
  <Link to="/mentor/id/ongoing/currtopic"/>
    <img src='https://image.freepik.com/free-vector/girl-writing-journal-diary_74855-7408.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Current Topic</h3>
			<div class="item__body">
				<p>Description</p>
			</div>
		</div>
	</div>
	<div class="item">
  <Link to="/mentor/id/Ongoing/comptopic"/>
    <img src='https://image.freepik.com/free-vector/completed-concept-illustration_114360-2945.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Completed Topic</h3>
			<div class="item__body">
				<p>Description</p>
			</div>
		</div>
	</div>
	<div class="item">
  <Link to="/mentor/id/Ongoing/course3"/>
    <img src='https://image.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Schedule</h3>
			<div class="item__body">
				<p>Test/Homework/Project</p>
			</div>
		</div>
	</div>
	<div class="item">
  <Link to="/mentor/id/Ongoing/course4"/>
    <img src='https://image.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">DIY by students</h3>
			<div class="item__body">
				<p>Description</p>
			</div>
		</div>
	</div>
    </div>
</>
    );
    }

export default Ongoing;
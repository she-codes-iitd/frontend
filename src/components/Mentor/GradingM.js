import React from 'react';
import { Link } from 'react-router-dom';
import HeaderM from "./HeaderM";

function Grading(props) {
	return (
    <>
        <div id="contain">
        <img id="bg" className="img-fluid2" alt="" />
        <HeaderM logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav}
        heading = {"Grading"} desc={"Edit Grades"} button="Back to Dashboard" 
        link="/mentor/id" imglink="https://image.freepik.com/free-vector/grades-concept-illustration_114360-628.jpg"/>
        </div>

        <div class="grid">
	<div class="item">
  <Link to="/mentor/id/grading/course1"/>
    <img src='https://image.freepik.com/free-vector/grades-concept-illustration_114360-697.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Course 1</h3>
			<div class="item__body">
				<p>Assignment 1</p>
			</div>
		</div>
	</div>
	<div class="item">
  <Link to="/mentor/id/grading/course2"/>
    <img src='https://image.freepik.com/free-vector/grades-concept-illustration_114360-697.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Course 2</h3>
			<div class="item__body">
				<p>Assignment 1</p>
			</div>
		</div>
	</div>
	<div class="item">
  <Link to="/mentor/id/grading/course3"/>
    <img src='https://image.freepik.com/free-vector/grades-concept-illustration_114360-697.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Course 3</h3>
			<div class="item__body">
				<p>Assignment 1</p>
			</div>
		</div>
	</div>
	<div class="item">
  <Link to="/mentor/id/grading/course4"/>
    <img src='https://image.freepik.com/free-vector/grades-concept-illustration_114360-697.jpg' alt=''/>
		<div class="item__overlay">
			<h3 id="person1" aria-hidden="true">Course 4</h3>
			<div class="item__body">
				<p>Assignment 1</p>
			</div>
		</div>
	</div>
</div>
    </>
    );
}

export default Grading;
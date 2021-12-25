import { Link } from 'react-router-dom';
import '../css/All.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

import React, {useEffect ,useState} from 'react'
import axios from 'axios';
function AllCourses(props) {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/courses/')
			.then(res => res.json())
			.then(data => setCourses(data["courses"]))
	}, []);
	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div class="grid-container-all">
				{courses.map((course) => {
					return (<div class="grid-item-all">{course["name"]}
						<button className='btn btn-primary'>Enroll</button>
					</div>
					);
				})}
			</div>

		</>
	);


}

export default AllCourses;
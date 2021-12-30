import { Link } from 'react-router-dom';
import '../css/All.css';
import Header2 from './Header2';
import id_page from '../imgs/Group19.png'

import React, {useEffect ,useState} from 'react';
function AllCourses(props) {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/courses/')
			.then(res => res.json())
			.then(data => setCourses(data["courses"]))
	}, []);
	const requestOptions = {
		method: "POST",
	};
	function enroll (id) {
		fetch('http://localhost:3000/courses/enroll/'+id, requestOptions)
		.then(res=>res.json())
		.then(response => window.location = "/student-dashboard/ongoing");
	}
	return (
		<>
			<div id="contain">
				<img src={id_page} id="bg" className="img-fluid2" alt="" />
				<Header2 logo={props.logo} hamburger={props.hamburger} navMenu={props.navMenu} setHamburger={props.setHamburger} setNav={props.setNav} />
			</div>
			<div class="container grid-container-all">
				{courses.map((course) => {
					return (<div class="row"><div class="col-md-4 grid-item-all">{course["name"]}
						<button className='btn btn-primary' onClick={() => enroll(course["_id"])}>Enroll</button>
					</div>
					</div>
					);
				})}
			</div>

		</>
	);


}

export default AllCourses;
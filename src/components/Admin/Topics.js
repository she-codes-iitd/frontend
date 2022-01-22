import React, { useState } from "react";
import SimpleNav from "../simpleNav";
import './css/lists.css';
import { Link } from "react-router-dom";

const Topic = (props) => {
	const [topic1, setTopic1] = useState({
		name: "Topic1"
	});
	const [topic2, setTopic2] = useState({
		name: "Topic2"
	});
    const [topic3, setTopic3] = useState({
		name: "Topic3"
	});
	const [topics, setTopic] = useState([topic1, topic2, topic3]);

	return (
		<div className="light-blue-bg">
			<SimpleNav logo={props.logo} />
			<div className='container Mentors my-3'>
				<h1 className="mentor_heading display-4">Topics</h1>
				<ul className="px-4 w-100">
					<li className="headings row mb-3">
						<div className="col-md-3 text-center">Name</div>
						{/* <div className="col-md-3 text-center">College Name</div>
						<div className="col-md-3 text-center">College ID</div>
						<div className="col-md-3 text-center">Hours/day</div> */}
					</li>
					{
						topics.map((item, index) => (
							<>
								{/* <div key={index} className="drop-file-preview__item">
											<img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
											<div className="drop-file-preview__item__info">
												<p className='mb-0'>{item.name}</p>
												<p className="mb-0">{parseFloat(item.size / (1024)).toFixed(2)} KB</p>
											</div>
										</div> */}
								<Link to={"/admin/courses/topics/add"}>
									<li className="items row mb-3">
										<div className="col-md-3 text-center">{item.name}</div>
										{/* <div className="col-md-3 text-center">{item.collegeName}</div>
										<div className="col-md-3 text-center">{item.collegeID}</div>
										<div className="col-md-3 text-center">{item.hours}</div> */}
									</li>
								</Link>
							</>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default Topic;
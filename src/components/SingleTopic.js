import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleTopic.css';

function SingleTopic() {
	return (
		<div>
			<div className='topic'>topic 1</div>
			<div className='video'>current topic</div>
			
			<div className='quizass'>
				<span className='quiz'>
					Quiz
				</span>
				<span className='assn'>Assignment</span>
			</div>
		</div>
	);
}

export default SingleTopic;


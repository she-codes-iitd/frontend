import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleTopic.css';

function SingleTopic() {
	return (
		<div className='box'>
			<p className='topic'>topic 1</p>
			<p className='video'>current topic</p>
			<p className='topic'>topic desc</p>
			<p className='assn'>Assignment 1</p>
			<p className='quiz'>
				Quiz 1
			</p>
		</div>
	);
}

export default SingleTopic;


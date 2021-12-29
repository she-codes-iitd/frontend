import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignInForm from '../src/components/SignInForm';
import SignUpForm from '../src/components/SignUpForm';
import reportWebVitals from './reportWebVitals';
import Id from './Id';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Topics from './components/Topics';
import Mentor from './MentorId';

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/id/*" element={<Id />} />
			<Route path="/mentor/id/*" element={<Mentor/>}/>
			
		</Routes>
	</Router>
	,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<SignInForm name="Student" notname="Volunteer" />
		<SignInForm name="Volunteer" notname="Student" />
		<SignUpForm name="Student" notname="Volunteer" />
		<SignUpForm name="Volunteer" notname="Student" />
	</React.StrictMode>,
	document.getElementById('modalRoot')
);

reportWebVitals();

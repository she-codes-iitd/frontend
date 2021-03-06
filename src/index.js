import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import SignUpFormVolunteer from './components/SignUpFormVolunteer';
import SignInFormVolunteer from './components/SignInFormVolunteer';
import reportWebVitals from './reportWebVitals';
import Id from './Id';
import Admin from './Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgetPasswordStudent from './components/ForgetPasswordStudent';
// import Topics from './components/Topics';
import Mentor from './MentorId';

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/id/*" element={<Id />} />
			<Route path="/mentor/id/*" element={<Mentor />} />
			<Route path="/admin/*" element={<Admin />} />
		</Routes>
	</Router>
	,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<SignInForm name="Student" notname="Volunteer" />
		<SignInFormVolunteer name="Volunteer" notname="Student" />
		<SignUpForm name="Student" notname="Volunteer" />
		<SignUpFormVolunteer name="Volunteer" notname="Student" />
		<ForgetPasswordStudent name="Student" />
	</React.StrictMode>,
	document.getElementById('modalRoot')
);

reportWebVitals();

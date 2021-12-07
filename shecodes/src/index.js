import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import SignUpForm from './SignUpForm';
import reportWebVitals from './reportWebVitals';
import Id from './Id';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.render(
	<Router>
	<Routes>
		<Route path="/home" element={<App/>} />
		<Route path="/id" element={<Id/>} />
	</Routes>
	</Router>
	,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<Form name="Student" notname="Volunteer" />
		<Form name="Volunteer" notname="Student" />
		<SignUpForm name="Student" notname="Volunteer" />
	</React.StrictMode>,
	document.getElementById('modalRoot')
);

reportWebVitals();

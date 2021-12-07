import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Form from './Form';
import SignUpForm from './SignUpForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
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

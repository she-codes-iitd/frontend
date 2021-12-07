import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Form from './Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<Form name="Student" notname="Volunteer" signIn="true" />
		<Form name="Volunteer" notname="Student" signIn="true" />
		<Form name="Student" notname="Volunteer" signIn="false" />
	</React.StrictMode>,
	document.getElementById('modalRoot')
);

reportWebVitals();

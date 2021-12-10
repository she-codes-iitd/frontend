import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = (props) => {
	const onChange = () => {
		props.buttonWork();
	}

	const API_KEY = process.env.REACT_APP_CAPTCHA_API_KEY;

	return (
		<ReCAPTCHA
			sitekey={API_KEY}
			onChange={onChange}
		/>
	)
}

export default Captcha;
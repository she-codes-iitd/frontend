import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {
	const onChange = () => {
		console.log("HELLO");
	}
	return (
		<ReCAPTCHA
			sitekey="Your client site key"
			onChange={onChange}
		/>
	)
}

export default Captcha;
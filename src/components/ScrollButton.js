import React, { useState } from 'react';

const ScrollButton = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 600) {
			setVisible(true)
		}
		else {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<button onClick={scrollToTop} className='scrollTop'
			style={{ display: visible ? 'inline' : 'none' }}>Back to Top</button>
	);
}

export default ScrollButton;

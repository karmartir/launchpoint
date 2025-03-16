import React from 'react';
import {Container} from 'react-bootstrap';

const About = () => {
	return (

		<Container style={{ width: '75%', margin: 'auto' }} >
			<h2>Our Mission</h2>
			<p>
				At LaunchPoint, we aim to empower startups by providing them with access to capital,
				resources, and a supportive network, while offering investors exclusive opportunities to engage with high-growth ventures.
				We are committed to creating a thriving ecosystem where innovation meets investment, fostering long-term success for both sides.</p>
			<br/>
			<h2>How it works</h2>
			<p>Startups can easily present their projects to a network of investors, while investors gain access to a curated selection of promising businesses.
				Our platform facilitates seamless connections and supports both sides in achieving their goals.</p>
			<br/>
			<h2>Why Us?</h2>
			<p>
				Unlike traditional investment channels, our platform offers tailored solutions, advanced matchmaking tools, and a community-driven approach that enhances the chances of success for both startups and investors.
			</p>
		</Container>

	);
};

export default About;
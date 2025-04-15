import React from 'react';
import {Container} from 'react-bootstrap';

const styles = {fontSize: '25px', fontWeight: 'lighter'}
const headerStyle = {fontSize: '45px'}


const About = () => {
	return (

		<Container style={{ width: '75%', margin: 'auto'}} >
			<h2 style={{marginTop: '150px', fontSize: '45px'}}>Our Mission</h2>
			<p style={styles}>
				At <i>LaunchPoint</i>, we aim to empower startups by providing them with access to capital,
				resources, and a supportive network, while offering investors exclusive opportunities to engage with high-growth ventures.
				We are committed to creating a thriving ecosystem where innovation meets investment, fostering long-term success for both sides.</p>
			<br/>
			<br/>
			<br/>

			<h2 style={headerStyle}>How it works</h2>
			<p style={styles}>Startups can easily present their projects to a network of investors, while investors gain access to a curated selection of promising businesses.
				Our platform facilitates seamless connections and supports both sides in achieving their goals.</p>
			<br/>
			<br/>
			<br/>
			<h2 style={headerStyle}>Why Us?</h2>
			<p style={styles}>
				Unlike traditional investment channels, our platform offers tailored solutions, advanced matchmaking tools, and a community-driven approach that enhances the chances of success for both startups and investors.
			</p>
		</Container>

	);
};

export default About;
import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';

const styles = {fontSize: '25px', fontWeight: 'lighter', color: 'rgba(255,253,253,0.62)'}
const headerStyle = { fontSize: '45px', fontWeight: 'lighter', color: 'rgba(255,253,253,0.62)'}


const About = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (

		<Container style={{ width: '75%', marginTop: '100px'}} >
			<h2 className='mt-5' style={headerStyle}>Our mission</h2>
			<p style={styles}>
				At <i>LaunchPoint</i>, we aim to empower startups by providing them with access to capital,
				resources, and a supportive network, while offering investors exclusive opportunities to engage with high-growth ventures.
				We are committed to creating a thriving ecosystem where innovation meets investment, fostering long-term success for both sides.</p>


			<h2 className='mt-5'  style={headerStyle}>How it works</h2>
			<p style={styles}>Startups can easily present their projects to a network of investors, while investors gain access to a curated selection of promising businesses.
				Our platform facilitates seamless connections and supports both sides in achieving their goals.</p>

			<h2 className='mt-5'  style={headerStyle}>Why us?</h2>
			<p style={styles}>
				Unlike traditional investment channels, our platform offers tailored solutions, advanced matchmaking tools, and a community-driven approach that enhances the chances of success for both startups and investors.
			</p>
		</Container>

	);
};

export default About;
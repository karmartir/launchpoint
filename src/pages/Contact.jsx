import React from 'react';
import {Container} from 'react-bootstrap';

const Contact = () => {
	const styles = {fontSize: '30px', fontWeight: 'lighter', color: 'rgba(255,253,253,0.62)', textAlign: "center"}
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
			<Container >
				<p style={styles}>
					880 Rochester Rd, <br/>
					Ontario, California 91764  <br/>
					United States  <br/>
					<br/>
					<span style={{fontSize: '1.6rem', fontWeight: 'lighter'}}>
					Head office phone: <span>(909) 481-8411</span>   <br/>
					Whatsapp: (909) 482-8411  <br/>
					General inquiries:  info@launchpoint.com  <br/>
					For partnership:  johansson@launchpoint.com  <br/>
						</span>
				</p>
			</Container>

		</div>
	);
};

export default Contact;
import React from 'react';
import {Container} from 'react-bootstrap';

const Contact = () => {
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
			<Container >
				<p style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'normal', fontFamily: 'Tajawal'}}>
					880 Rochester Rd, <br/>
					Ontario, California 91764  <br/>
					United States  <br/>
					<br/>
					<span style={{fontSize: '1.5rem'}}>
					Head office phone: <span style={{fontWeight: 'normal'}}>(909) 481-8411</span>   <br/>
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
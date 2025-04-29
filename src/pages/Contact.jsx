import React from 'react';
import {Container} from 'react-bootstrap';
import ReplyForm from '../components/ReplyForm.jsx';

const Contact = () => {
	const styles = {fontSize: '28px', fontWeight: 'lighter', color: 'rgba(255,253,253,0.62)', textAlign: "center"}
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
			<Container style={{marginTop: '130px'}} >
				<ReplyForm />
				<p style={styles} >
					880 Rochester Rd, <br/>
					Ontario, California 91764,
					<br/>
					United States  <br/>
					<br/>
					<span style={{fontSize: '1.6rem', fontWeight: 'lighter'}} className="mobile-font-size">
					Head office phone: <span>(909) 481-8411</span>   <br/>
					{/*Whatsapp: (909) 482-8411  <br/>*/}
					General inquiries:  info@launchpoint.com  <br/>
					For partnership:  johansson@launchpoint.com  <br/>
					<span style={{ opacity: 0.7, fontSize: '0.9rem' }}>
					  UI/UX by H. Aslanyan | Development by K. Martirosyan ©
					</span>
						</span>
				</p>
			</Container>

		</div>
	);
};

export default Contact;
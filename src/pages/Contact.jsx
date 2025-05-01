import React, {useEffect} from 'react';
import {Container} from 'react-bootstrap';
import ReplyForm from '../components/ReplyForm.jsx';

const Contact = () => {
	const styles = {fontSize: '28px', fontWeight: 'lighter', color: 'rgba(255,253,253,0.62)', textAlign: "center"}
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	return (


		<Container style={{ maxWidth: '50%', marginTop: '150px'}} >

				<ReplyForm />
				<p className="address" style={styles} >
					880 Rochester Rd, <br/>
					Ontario, California 91764,
					<br/>
					United States  <br/>
					<br/>
					<span style={{fontSize: '1.6rem', fontWeight: 'lighter'}} className="mobile-font-size address-text">
					Head office phone: <span>(909) 481-8411</span>   <br/>
					Whatsapp: (909) 482-8411  <br/>
					General inquiries:  info@launchpoint.com  <br/>
					For partnership:  johansson@launchpoint.com  <br/>
					<span style={{ opacity: 0.7, fontSize: '0.9rem' }}>
					  UI/UX by H. Aslanyan | Development by K. Martirosyan ©
					</span>
						</span>
				</p>

			</Container>


	);
};

export default Contact;
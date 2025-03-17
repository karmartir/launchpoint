import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emily from '../images/Emily Roberts.jpg';
import ngozi from '../images/Ngozi Okafor.jpg';
import john from '../images/John Park.jpg';
import jin from '../images/Jin Woo Kim.jpg';

const SuccessStories = () => {
	return (
		<Container className="text-center mt-5">
			<h2 style={{ fontFamily: 'Noto Sans', fontWeight: 'lighter', textAlign: 'center' }}>
				Success stories of Startups Fueled by Our Support
			</h2>
			<Row className="mt-5 justify-content-center">
				<Col xs={6} sm={3} className="d-flex justify-content-center">
					<img src={emily} alt="Emily" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '10px' }} />
				</Col>
				<Col xs={6} sm={3} className="d-flex justify-content-center">
					<img src={ngozi} alt="Ngozi" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '10px' }} />
				</Col>
				<Col xs={6} sm={3} className="d-flex justify-content-center">
					<img src={john} alt="John" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '10px' }} />
				</Col>
				<Col xs={6} sm={3} className="d-flex justify-content-center">
					<img src={jin} alt="Jin" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '10px' }} />
				</Col>
			</Row>
		</Container>
	);
};

export default SuccessStories;
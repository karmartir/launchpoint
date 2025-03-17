import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import emily from '../images/Emily Roberts.jpg';
import ngozi from '../images/Ngozi Okafor.jpg';
import john from '../images/John Park.jpg';
import jin from '../images/Jin Woo Kim.jpg';

const SuccessStories = () => {
	return (
		<Container className="text-center mt-5">
			<div className="ms-5">
				<h2 style={{ fontFamily: 'Noto Sans', fontWeight: 'lighter', textAlign: 'left'}}>
					Success stories of Startups Fueled by Our Support
				</h2>
			</div>

			<Row className="mt-5 justify-content-center g-3">
				<Col lg={3} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-3">
					<NavLink to={`/success-stories/emily`}>
						<img src={emily} alt="Emily" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '5px', cursor: 'pointer' }} />
					</NavLink>
				</Col>
				<Col lg={3} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-3">
					<NavLink to={`/success-stories/ngozi`}>
						<img src={ngozi} alt="Ngozi" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '5px', cursor: 'pointer' }} />
					</NavLink>
				</Col>
				<Col lg={3} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-3">
					<NavLink to={`/success-stories/john`}>
						<img src={john} alt="John" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '5px', cursor: 'pointer' }} />
					</NavLink>
				</Col>
				<Col lg={3} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-3">
					<NavLink to={`/success-stories/jin`}>
						<img src={jin} alt="Jin" className="img-fluid" style={{ maxWidth: '100%', borderRadius: '5px', cursor: 'pointer' }} />
					</NavLink>
				</Col>
			</Row>
		</Container>
	);
};

export default SuccessStories;
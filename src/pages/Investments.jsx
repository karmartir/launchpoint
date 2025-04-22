import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import first from '../images/logos/forma-logo-1.png';
import second from '../images/logos/forma-logo-2.png';
import third from '../images/logos/forma-logo-3.png';


const Investments = () => {
	return (


		<Container style={{ marginTop: '130px' }}>
				<Row className="d-flex justify-content-center align-items-center g-5" >
					<h2 className="fw-normal text-center mb-5">Our Partners</h2>
					<Col lg={3} md={12} sm={12} className="d-flex justify-content-center mb-2">
						<img src={first} alt="first logos" className="img-fluid"/>
					</Col>
					<Col lg={3} md={12} sm={12} className="d-flex justify-content-center mb-2">
						<img src={second} alt="first logos" className="img-fluid"/>
					</Col>
					<Col lg={3} md={12} sm={12} className="d-flex justify-content-center mb-2">
						<img src={third} alt="first logos" className="img-fluid"/>
					</Col>


				</Row>

		</Container>


	);
};

export default Investments;
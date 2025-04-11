import React from 'react';
import {Container} from 'react-bootstrap';
import investLogos from '../images/investment-logos.png';


const Investments = () => {
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white mt-4">
			<Container style={{ padding: '25px', marginTop: '150px', borderRadius: '15px', paddingLeft: '50px' }}>
				<h2 className="fw-normal text-center"  >Our Partners</h2>
				<img src={investLogos} alt="Investments" />
			</Container>

		</div>
	);
};

export default Investments;
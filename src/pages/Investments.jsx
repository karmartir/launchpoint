import React from 'react';
import {Container} from 'react-bootstrap';

const Investments = () => {
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
			<Container>
				<h2 className="fw-normal text-center"  >Our Partners</h2>
				<img src={Investments} alt="Investments" />
			</Container>

		</div>
	);
};

export default Investments;
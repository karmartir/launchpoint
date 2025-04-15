import React from 'react';
import {Container} from 'react-bootstrap';
import investLogos from '../images/logos.png';
import first from '../images/logos/1.svg';
import fourth from '../images/logos/4.jpg';
import Table from 'react-bootstrap/Table';


const Investments = () => {
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white mt-4">
			<Container style={{ padding: '25px', marginTop: '150px', borderRadius: '15px', paddingLeft: '50px' }}>

				{/*<Table  bordered hover>*/}
				{/*	<thead>*/}
				{/*	<tr>*/}
				{/*		<th>*/}
				{/*			<img src={first} alt="uhaul"/>*/}
				{/*			</th>*/}
				{/*		<th>	<img className='small' src={fourth} alt="fourth"/></th>*/}
				{/*		<th>Last Name</th>*/}

				{/*	</tr>*/}
				{/*	</thead>*/}
				{/*	<tbody>*/}
				{/*	<tr>*/}

				{/*		<td>Mark</td>*/}
				{/*		<td>Otto</td>*/}
				{/*		<td>@mdo</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}

				{/*		<td>Jacob</td>*/}
				{/*		<td>Thornton</td>*/}
				{/*		<td>@fat</td>*/}
				{/*	</tr>*/}
				{/*	<tr>*/}

				{/*		<td colSpan={2}>Larry the Bird</td>*/}
				{/*		<td>@twitter</td>*/}
				{/*	</tr>*/}
				{/*	</tbody>*/}
				{/*</Table>*/}



				<h2 className="fw-normal text-center"  >Our Partners</h2>
				<img src={investLogos} alt="Investments" />
			</Container>

		</div>
	);
};

export default Investments;
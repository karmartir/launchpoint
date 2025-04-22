import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { OurTeamData } from '../data/OurTeamData.jsx';
import './SuccessStories.css'; // Import the new CSS file

const OurTeam = () => {

	return (
		<Container className="text-center success-stories-container" style={{ maxWidth: "1140px", marginTop: '150px' }}>
			{/*<div className="ms-5">*/}
			{/*	<h2 className="success-stories-title">*/}
			{/*		Meet our team of passionate experts driving bold ideas forward.*/}
			{/*	</h2>*/}
			{/*</div>*/}

			<Row className="success-stories-row mt-1 g-3" style={{ marginTop: '10px' }}>
				{Object.keys(OurTeamData ).map((key) => {
					const person = OurTeamData[key];
					return (
						<Col lg={3} md={4} sm={12} className="success-stories-column" key={person.id}>
							{/*<NavLink to={`/success-stories/${person.id}`} style={{ textDecoration: 'none' }}>*/}
								<img src={person.img} alt={person.name} className="img-fluid success-stories-image mb-2" />
								<div className="success-stories-info mt-1">
									<h5 className="text-white">{person.name}</h5>
									<h6 className="text-white">{person.title}</h6>
								</div>
							{/*</NavLink>*/}
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default OurTeam;
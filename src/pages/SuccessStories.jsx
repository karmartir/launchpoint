import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { peopleData } from './SuccessStoryPage';
import './SuccessStories.css'; // Import the new CSS file

const SuccessStories = () => {

    return (
			<Container className="text-center success-stories-container" style={{ maxWidth: "1140px" }}>
            <div className="ms-5">
                <h2 className="success-stories-title">
                    <i>Success stories of Startups Fueled by Our Support</i>
                </h2>
            </div>

            <Row className="success-stories-row mt-4 g-3" style={{ marginTop: '20px' }}>
                {Object.keys(peopleData).map((key) => {
                    const person = peopleData[key];
                    return (
                        <Col lg={3} md={6} sm={12} className="success-stories-column" key={person.id}>
                            <NavLink to={`/success-stories/${person.id}`} style={{ textDecoration: 'none' }}>
                                <img src={person.img} alt={person.name} className="img-fluid success-stories-image" />
                                <div className="success-stories-info mt-1">
                                    <h6 className="text-white">{person.name}</h6>
                                </div>
                            </NavLink>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default SuccessStories;
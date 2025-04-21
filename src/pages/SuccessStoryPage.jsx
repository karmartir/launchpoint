import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {peopleData} from '../data/PeopleData.jsx';

const SuccessStoryPage = () => {
	const { personId } = useParams();
	const person = peopleData[personId];

	if (!person) return <h2 className="text-center mt-5">Person not found.</h2>;

	return (
		<div className="container mt-5">
			<div className="row align-items-center">
				<div className="col-md-5 text-center">
					<img src={person.img} alt={person.name} className="img-fluid" style={{ borderRadius: "10px", maxWidth: "100%" }} />
				</div>
				<div className="col-md-7">
					<h2>{person.name}, ({person.country})</h2>
					<h4 style={{ color: "rgba(224,224,224,0.82)", marginBottom: '30px', fontSize: '1.2rem' }}>{person.title}</h4>
					<p className="mt-3" style={{fontSize: '1.1rem', fontWeight: 'lighter'}}>{person.description}</p>

				</div>
				<div className="mt-4 text-end">
					<NavLink to="/success-stories" className="btn btn-secondary btn-sm">Back to All Stories</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SuccessStoryPage;
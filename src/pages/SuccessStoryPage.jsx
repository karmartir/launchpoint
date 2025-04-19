import React from "react";
import { useParams } from "react-router-dom";
import emily from "../images/Emily Roberts.jpg";
import ngozi from "../images/Ngozi Okafor.jpg";
import john from "../images/John Park.jpg";
import jin from "../images/Jin Woo Kim.jpg";
import levon from "../images/Levon.jpg";
import tiana from "../images/Tiana.jpg";
import jasim from "../images/Jasim.jpg";
import amandine from "../images/amandine.jpg"
import { NavLink } from "react-router-dom";
import {peopleData} from './PeopleData.jsx';

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
					<h2>{person.name}</h2>
					<h4 style={{ color: "#e0e0e0", marginBottom: '30px' }}>{person.country}, {person.title}</h4>
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
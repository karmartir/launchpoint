import React, {useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {peopleData} from '../data/PeopleData.jsx';

const SuccessStoryPage = () => {

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const { personId } = useParams();
	const person = peopleData[personId];
	const styles = {fontSize: '1.1rem', fontWeight: 'lighter', color: 'rgba(255,253,253,0.62)'}
	const navigate = useNavigate();
	const handleBackClick = () => {
		setTimeout(() => {
			navigate("/success-stories");
		}, 500);
	};
	if (!person) return <h2 className="text-center mt-5">Person not found.</h2>;


	return (
		<div className="container" style={{ marginTop: '150px'}}>
			<div className="row align-items-center">
				<div className="col-md-5 text-center">
					<img src={person.img} alt={person.name} className="img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", fontSize: '1.2rem'}} />
				</div>
				<div className="col-md-7 bio-text">
					<h2 style={{ color: "rgba(224,224,224,0.82)", fontWeight:'lighter'}}>{person.name}, ({person.country})</h2>
					<h4 style={{ color: "rgba(224,224,224,0.82)", marginBottom: '30px', fontSize: '1.2rem', fontWeight:'lighter' }}>{person.title}</h4>
					<p className="mt-3 bio-text" style={styles}>{person.description}</p>

				</div>
				<div
					className="mt-4 text-end"
					style={{ marginBottom: typeof window !== 'undefined' && window.innerWidth < 576 ? '3rem' : '0' }}
				>
					<button onClick={handleBackClick} className="btn btn-secondary btn-md">Back to All Stories</button>
				</div>
			</div>
		</div>
	);
};

export default SuccessStoryPage;
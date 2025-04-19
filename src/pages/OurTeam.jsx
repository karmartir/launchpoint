import React from 'react';

const OurTeam = ({ image, name, title }) => {
	return (
		<div className="team-member">
			<img src={image} alt={name} className="team-member-image" />
			<h3 className="team-member-name">Test{name}</h3>
			<p className="team-member-title">under constraction ...{title}</p>
		</div>
	);
};

export default OurTeam;
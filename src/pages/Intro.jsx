import React from 'react';
import {Container} from 'react-bootstrap';

const Intro = () => {
	return (

		<div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white bg-dark">
			<Container>

				<h2>Intro</h2>
				<div>
					<p>We are a platform dedicated to bridging the gap between innovative startups and visionary investors,
						fostering meaningful connections that drive business growth.
						At Launchpoint, we are passionate about empowering entrepreneurs and helping startups thrive. Our mission is to provide aspiring business owners with the tools, resources, and guidance they need to succeed in today’s competitive market.
						We believe that every great idea deserves a chance to grow, and we’re here to support you every step of the way. Whether you're just starting out or looking to scale your business, our platform offers expert advice, valuable resources, and a community of like-minded founders to help you turn your vision into reality.
						Join us on your journey, and let’s build the future together.
					</p>
				</div>
			</Container>

		</div>
	);
};

export default Intro;
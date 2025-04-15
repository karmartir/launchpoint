import React from "react";
import { useParams } from "react-router-dom";
import emily from "../images/Emily Roberts.jpg";
import ngozi from "../images/Ngozi Okafor.jpg";
import john from "../images/John Park.jpg";
import jin from "../images/Jin Woo Kim.jpg";
import { NavLink } from "react-router-dom";

const peopleData = {
	emily: {
        name: "Emily Roberts",
        country: "United Kingdom",
        title: "Social Entrepreneur",
        img: emily,
        description: "Emily Roberts, a passionate social entrepreneur from the United Kingdom, had a clear vision to create sustainable fashion solutions, but lacked the necessary business expertise to turn her idea into reality. Through our mentorship programs, she gained not only the skills but also the network to navigate the complexities of the fashion industry. She learned how to source eco-friendly materials, ensure ethical production, and create a brand that resonates with conscious consumers. With this knowledge, she successfully launched her eco-friendly clothing brand, which has since gained significant traction. Now, Emily’s brand is making waves across Europe, advocating for a more sustainable and responsible approach to fashion. By partnering with other eco-conscious companies and influencing industry standards, Emily continues to push for a greener future in fashion, inspiring both consumers and businesses alike."
    },
	ngozi: {
        name: "Ngozi Okafor",
        country: "Nigeria",
        title: "Fintech Leader",
        img: ngozi,
        description: "Ngozi Okafor, a visionary fintech leader from Nigeria, identified the urgent need to improve financial literacy across Africa. With a clear concept for a fintech solution, she faced the challenge of refining her business model and securing the necessary resources to bring her idea to life. Through our expert mentorship and guidance, Ngozi was able to transform her concept into a comprehensive business plan, gaining crucial insights into the African financial landscape. With the support of our network, she successfully secured seed funding to launch her startup. Today, her platform partners with major financial institutions and educational organizations, making financial education more accessible to millions across the continent. By leveraging mobile technology and strategic local partnerships, Ngozi is revolutionizing the way individuals and communities approach personal finance, creating a more financially literate and empowered Africa."
    },
	john: {
        name: "John Park",
        country: "United States",
        title: "Tech Innovator",
        img: john,
        description: "John Park, a visionary tech innovator from the United States, approached us with a groundbreaking idea for an AI-powered platform designed to transform urban infrastructure. By harnessing machine learning algorithms and real-time data analysis, he developed a sophisticated system capable of optimizing traffic flow, reducing energy consumption, and improving the efficiency of city services. His platform not only helps streamline city operations but also contributes to creating smarter, more sustainable urban environments. With our mentorship and resources, John was able to refine his concept and bring it to life as a fully functional solution. Today, his startup is already being implemented in several major cities worldwide, positively impacting the daily lives of thousands of citizens. As the platform continues to expand, it attracts investment from leading tech companies, including Foxconn, and is shaping the future of smart cities globally."
    },
	jin: {
        name: "Jin Woo Kim",
        country: "South Korea",
        title: "E-commerce Success",
        img: jin,
        description: "Jin Woo Kim, an ambitious entrepreneur from South Korea, launched an online marketplace dedicated to handmade products, with the goal of bridging the gap between skilled artisans and consumers seeking authentic, high-quality items. However, she faced challenges in scaling her business and reaching a wider audience. Through our startup accelerator program, Jin Woo gained valuable strategic guidance, marketing expertise, and access to a powerful network, helping her refine her business model and expand her reach. By utilizing data-driven insights and enhancing the user experience, she was able to significantly grow her customer base. Today, her platform connects artisans from around the world with consumers, creating a global marketplace for handmade goods. With a strong presence in Asia and plans to expand into new international markets, Jin Woo’s e-commerce platform is empowering small businesses and fostering a renewed appreciation for the value of handmade craftsmanship."
    }
};

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
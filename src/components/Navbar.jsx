import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CustomNavbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100 position-fixed top-0">
			<Container>
				<Nav className="ms-auto">
					<Nav.Link as={NavLink} to="/" className="text-white">Main</Nav.Link>
					<Nav.Link as={NavLink} to="/intro" className="text-white">Intro</Nav.Link>
					<Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
					<Nav.Link as={NavLink} to="/success-stories" className="text-white">Success Stories</Nav.Link>
					<Nav.Link as={NavLink} to="/investments" className="text-white">Investments</Nav.Link>
					<Nav.Link as={NavLink} to="/contact" className="text-white">Contact</Nav.Link>
				</Nav>
			</Container>
		</nav>
	);
}
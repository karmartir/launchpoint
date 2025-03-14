import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function CustomNavbar() {
	return (
		<Navbar expand="lg" sticky="top" className="custom-navbar w-100">
			<Container>
				<Nav className="ms-auto">
					<Nav.Link as={NavLink} to="/" end>Intro</Nav.Link>
					<Nav.Link as={NavLink} to="/about">About</Nav.Link>
					<Nav.Link as={NavLink} to="/success-stories">Success Stories</Nav.Link>
					<Nav.Link as={NavLink} to="/investments">Investments</Nav.Link>
					<Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CustomNavbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent w-100 position-fixed top-0 mt-5">
			<Container>
				<Nav className="ms-auto">
					<Nav.Link as={NavLink} to="/" className="fw-normal text-white" style={{ fontFamily: "Julius Sans One", fontSize: "28.7px", lineHeight: "100%" }}>Main</Nav.Link>
					<Nav.Link as={NavLink} to="/intro" className="fw-normal text-white" style={{ fontFamily: "Julius Sans One", fontSize: "28.7px", lineHeight: "100%" }}>Intro</Nav.Link>
					<Nav.Link as={NavLink} to="/about" className="fw-normal text-white" style={{ fontFamily: "Julius Sans One", fontSize: "28.7px", lineHeight: "100%" }}>About</Nav.Link>
					<Nav.Link as={NavLink} to="/success-stories" className="fw-normal text-white" style={{ fontFamily: "Julius Sans One", fontSize: "28.7px", lineHeight: "100%" }}>Success Stories</Nav.Link>
					<Nav.Link as={NavLink} to="/investments" className="fw-normal text-white" style={{ fontFamily: "Julius Sans One", fontSize: "28.7px", lineHeight: "100%" }}>Investments</Nav.Link>
					<Nav.Link as={NavLink} to="/contact" className="fw-normal text-white" style={{ fontFamily: "Julius Sans One", fontSize: "28.7px", lineHeight: "100%" }}>Contact</Nav.Link>
				</Nav>
			</Container>
		</nav>
	);
}


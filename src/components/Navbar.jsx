import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CustomNavbar() {
    // No need for state

	return (
		<Navbar
            expand="lg"
            variant="dark"
            fixed="top"
            style={{ zIndex: 1000, top: "40px" }}>
			<Container>
				<Navbar.Brand as={NavLink} to="/" className="fw-bold text-white" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>
					Launchpoint
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse
                    id="navbar-nav"
                    style={{
                        background: window.innerWidth < 992 ? "rgba(0, 0, 0, 0.8)" : "transparent",
                        padding: window.innerWidth < 992 ? "10px" : "0",
                        borderRadius: window.innerWidth < 992 ? "5px" : "0"
                    }}
                >
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/" className="fw-normal text-white me-4" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>Main</Nav.Link>
						<Nav.Link as={NavLink} to="/intro" className="fw-normal text-white me-4" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>Intro</Nav.Link>
						<Nav.Link as={NavLink} to="/about" className="fw-normal text-white me-4" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>About</Nav.Link>
						<Nav.Link as={NavLink} to="/success-stories" className="fw-normal text-white me-4" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>Success Stories</Nav.Link>
						<Nav.Link as={NavLink} to="/investments" className="fw-normal text-white me-4" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>Investments</Nav.Link>
						<Nav.Link as={NavLink} to="/contact" className="fw-normal text-white me-4" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

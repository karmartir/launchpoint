import { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function CustomNavbar() {
	const [expanded, setExpanded] = useState(false);
	const collapseRef = useRef(null);
	const location = useLocation();




	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				collapseRef.current &&
				!collapseRef.current.contains(event.target) &&
				event.target.getAttribute("aria-controls") !== "navbar-nav"
			) {
				setExpanded(false);
			}
		};

		if (expanded) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [expanded]);

	useEffect(() => {
		setExpanded(false);
	}, [location]);

	return (
		<Navbar
			expand="lg"
			fixed="top"
			expanded={expanded}
			onToggle={() => setExpanded(!expanded)}
			style={{
				zIndex: 1000,
				top: "40px",
				backgroundColor: "transparent",
			}}
		>
			<Container >
				<Navbar.Brand as={NavLink} to="/" className="fw-bold text-white" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }}>
					Launchpoint
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="navbar-nav"
					onClick={() => setExpanded(!expanded)}
					className="custom-hamburger"
					style={{
						borderColor: "white",
						color: "white",
						backgroundColor: expanded ? "rgb(248,248,248, 0)" : "rgb(250,250,250, 0)",
					}}
				>
					<span className="custom-hamburger-icon">
						<svg width="30" height="30" viewBox="0 0 30 30">
							<line x1="4" y1="7" x2="26" y2="7" stroke="white" strokeWidth="2" />
							<line x1="4" y1="15" x2="26" y2="15" stroke="white" strokeWidth="2" />
							<line x1="4" y1="23" x2="26" y2="23" stroke="white" strokeWidth="2" />
						</svg>
					</span>
				</Navbar.Toggle>
				<Navbar.Collapse
					id="navbar-nav"
					ref={collapseRef}
					style={{
						padding: expanded && window.innerWidth < 992 ? "15px" : "0",
						borderRadius: expanded && window.innerWidth < 992 ? "10px" : "0",
						backgroundColor: expanded ? "rgba(10, 21, 35, 0.5)" : "transparent",

					}}
				>
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/intro" className="fw-normal text-white me-4 nav-link-responsive" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }} onClick={() => setExpanded(false)}>Intro</Nav.Link>
						<Nav.Link as={NavLink} to="/our-team" className="fw-normal text-white me-4 nav-link-responsive" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }} onClick={() => setExpanded(false)}>Our Team</Nav.Link>
						<Nav.Link as={NavLink} to="/about" className="fw-normal text-white me-4 nav-link-responsive" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }} onClick={() => setExpanded(false)}>About</Nav.Link>
						<Nav.Link as={NavLink} to="/success-stories" className="fw-normal text-white me-4 nav-link-responsive" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }} onClick={() => setExpanded(false)}>Success Stories</Nav.Link>
						<Nav.Link as={NavLink} to="/investments" className="fw-normal text-white me-4 nav-link-responsive" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }} onClick={() => setExpanded(false)}>Investments</Nav.Link>
						<Nav.Link as={NavLink} to="/contact" className="fw-normal text-white me-4 nav-link-responsive" style={{ fontFamily: "'Julius Sans One', sans-serif", fontSize: "26px" }} onClick={() => setExpanded(false)}>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

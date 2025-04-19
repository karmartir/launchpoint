import "bootstrap/dist/css/bootstrap.min.css";
import cover from "../images/Cover.jpg";
export default function Home() {
	return (

		<div
			className="vh-100 text-white position-relative"
			style={{
				backgroundImage: `url(${cover})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
				padding: 0,
				margin: 0,
				overflow: "hidden"
			}}
		>
			<div className="d-flex flex-column justify-content-center align-items-center h-100">
				<h1 className="fw-normal text-center" style={{ fontFamily: "Julius Sans One", fontSize: "4rem", lineHeight: "100%" }}>
					Launchpoint
				</h1>
			</div>

			<div
				className="position-absolute d-flex gap-3"
				style={{
					bottom: "16%", // Adjust this value for vertical position
					right: "19%",  // Adjust this value for horizontal position
				}}
			>
				<a href="#" className="text-white fs-4" style={{ marginRight: "1.5rem" }}><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="text-white fs-4" style={{ marginRight: "1.5rem" }}><i className="fab fa-instagram"></i></a>
				<a href="#" className="text-white fs-4"><i className="fab fa-youtube"></i></a>
			</div>
		</div>
	);
}
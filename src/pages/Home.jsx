import "bootstrap/dist/css/bootstrap.min.css";
import cover from "../images/Cover.jpg";

export default function Home() {
	return (
		<div
			className="d-flex flex-column justify-content-center align-items-center vh-100 text-white position-relative"
			style={{
				backgroundImage: `url(${cover})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100%",
			}}
		>
			<h1 className="fw-normal text-center" style={{ fontFamily: "Julius Sans One", fontSize: "4rem", lineHeight: "100%" }}>
				Launchpoint
			</h1>
			<div className="position-absolute bottom-0 mb-3 d-flex gap-3">
				<a href="#" className="text-white fs-4"><i className="fab fa-facebook"></i></a>
				<a href="#" className="text-white fs-4"><i className="fab fa-instagram"></i></a>
				<a href="#" className="text-white fs-4"><i className="fab fa-youtube"></i></a>
			</div>
		</div>
	);
}
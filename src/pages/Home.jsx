import "bootstrap/dist/css/bootstrap.min.css";
import cover from "../images/Cover.jpg";
import facebookIcon from "../images/icons/facebook.svg";
import linkedIn from "../images/icons/linkedIn.svg";
import youtubeIcon from "../images/icons/youtube.svg";
import x from "../images/icons/aks.svg";
import whatsApp from "../images/icons/whatsapp.svg";

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
				<h1 className="fw-normal text-center point" style={{ fontFamily: "Julius Sans One", fontSize: "4rem", lineHeight: "100%" }}>
					Launchpoint
				</h1>
			</div>

			<div
				className="position-absolute d-flex align-items-center justify-content-center"
				style={{
					bottom: "16%",
					right: "19%",
				}}
			>
				<a
					href="#"
					className="d-flex align-items-center justify-content-center"
					style={{ width: "40px", height: "40px", }}
				>
					<img src={facebookIcon} alt="Facebook" style={{ width: "28px", height: "28px", marginLeft: '5px',  marginBottom: '5px' }} />
				</a>
				<a
					href="#"
					className="d-flex align-items-center justify-content-center ms-2"
					style={{ width: "40px", height: "40px"}}
				>
					<img src={x} alt="X" style={{ width: "28px", height: "28px" }} />
				</a>
				<a
					href="#"
					className="d-flex align-items-center justify-content-center ms-2"
					style={{ width: "40px", height: "40px", }}
				>
					<img src={linkedIn} alt="Instagram" style={{ width: "28px", height: "28px", marginBottom: '5px' }} />
				</a>
				<a
				href="#"
				className="d-flex align-items-center justify-content-center ms-2"
				style={{ width: "40px", height: "40px", }}
			>
				<img src={whatsApp} alt="YouTube" style={{ width: "30px", height: "30px", marginTop: '2px' }} />
			</a>
				<a
					href="#"
					className="d-flex align-items-center justify-content-center ms-2"
					style={{ width: "40px", height: "40px", }}
				>
					<img src={youtubeIcon} alt="YouTube" style={{ width: "32px", height: "32px", marginTop: '2px' }} />
				</a>

				{/*<a href="#" className="text-white fs-4" style={{ marginRight: "1.5rem" }}><img src={youtubeIcon} alt='X icon'></img></a>*/}
				{/*<a href="#" className="text-white fs-4" style={{ marginRight: "1.5rem" }}><i className="fab fa-instagram"></i></a>*/}
				{/*<a href= "#" className="text-white fs-4"><i className="fab fa-youtube"></i></a>*/}
			</div>
		</div>
	);
}
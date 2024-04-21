import myImage from "../../public/DSC_1344.jpg"
import Nav from "./nav"

export default function Header() {
	return (
		<header style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
			<h1 style={{ fontSize: "4rem" }}>
				Zach Raab{"  "}<span style={{ fontSize: "2rem" }}>Full-Stack Developer</span>
			</h1>

			<Nav />

			<img
				style={{ objectPosition: "top center", objectFit: "cover", height: "300px", width: "300px" }}
				src={myImage.src} alt="Headshot of Zach Raab." >
			</img>
		</header>
	)
}
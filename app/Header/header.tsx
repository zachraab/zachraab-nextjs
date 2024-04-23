import myImage from "../../public/DSC_1344.jpg"
import Nav from "./nav"

export default function Header() {
	return (
		<header className="flex">
			<h1 className="font-bold">
				Zach Raab Full-Stack Developer
			</h1>

			<Nav />

			<img
				style={{ objectPosition: "top center", objectFit: "cover", height: "300px", width: "300px" }}
				src={myImage.src} alt="Headshot of Zach Raab." >
			</img>
		</header>
	)
}
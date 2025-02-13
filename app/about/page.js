import headshotImage from "../../public/DSC_1344.jpg";
import Nav from "../components/nav/nav";
import HeroInternal from "../components/hero/hero-internal"
import AboutMe from "../components/about-me";
import ThreeImages from "../components/three-images";

export default function About() {
	return (
		<>
			<Nav />

			<div className="main-content">	
				<HeroInternal 
					image={headshotImage} 
					isPortraitImage={true}
					headline="Collaborative. Focused. Resourceful."
					description="With a keen eye for detail and a passion for code, I excel in driving projects forward with purpose and commitment."
				/>
				<AboutMe />
				<ThreeImages />
			</div>
		</>
	)
}
import headshotImage from "../../public/DSC_1344.jpg";
import Nav from "../components/nav/nav";
import HeroInternal from "../components/hero/hero-internal"
import BackgroundImage from "../components/background-image";
import AboutMe from "../components/about-me";
import ThreeImages from "../components/three-images";

export default function About() {
	return (
		<>
			<Nav />
			<HeroInternal 
				image={headshotImage} 
				alt="A headshot of Zach wearing a suit with a blue and red shirt."
				isPortraitImage={true}
				headline="Collaborative. Focused. Resourceful."
				description="With a keen eye for detail and a passion for code, I excel in driving projects forward with purpose and commitment."
			/>
			<BackgroundImage imageFileName="aspen_trees_ridgeway_colorado.jpg" headline="Beautiful Colorado" />
			<AboutMe />
			<ThreeImages />
		</>
	)
}
import Nav from "./components/nav";
import HeroHome from "./components/hero-home";
import SkillsAccordion from "./components/skills-accordion";
import ThreeImages from "./components/three-images";

export default function Home() {
	return (
		<>
			<Nav />

			<div className="main-content">
				<HeroHome />
				<SkillsAccordion />
				<ThreeImages />
			</div>
		</>
	);
}

import Nav from "./components/nav/nav";
import HeroHome from "./components/hero/hero-home";
import SkillsAccordion from "./components/accordion/skills-accordion";
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

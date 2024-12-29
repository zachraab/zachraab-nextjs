import Nav from "./components/nav";
import HeroHome from "./components/hero-home";
import CaseStudies from "./components/case-studies";
import SkillsAccordion from "./components/skills-accordion";
import ThreeImages from "./components/three-images";

export default function Home() {
	return (
		<>
			<Nav />

			<div className="main-content">
				<HeroHome />
				<SkillsAccordion />
				<CaseStudies />
			</div>
			<ThreeImages />
		</>
	);
}

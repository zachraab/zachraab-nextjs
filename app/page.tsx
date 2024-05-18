import Nav from "./components/nav";
import HeroHome from "./components/hero-home"
import AboutMe from "./components/about-me";
import CaseStudies from "./components/case-studies";
import ThreeImages from "./components/three-images";

export default function Home() {
	return (
		<>
			<Nav />

			<div className="main-content mb-32">
				<HeroHome />
				<AboutMe />
				<CaseStudies />
				<ThreeImages />
			</div>
		</>
	);
}

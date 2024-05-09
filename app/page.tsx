import Nav from "./components/nav";
import AboutMe from "./components/about-me";
import CaseStudies from "./components/case-studies";

export default function Home() {
	return (
		<>
			<Nav />

			<div className="main-content">
				<AboutMe />
				<CaseStudies />
			</div>
		</>
	);
}

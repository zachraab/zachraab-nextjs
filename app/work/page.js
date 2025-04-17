import Nav from "../components/nav/nav";
import HeroInternalSvg from '../components/hero/hero-internal-svg';
import FeaturedProjects from '../components/featured-projects';
import CaseStudies from "../components/case-studies/case-studies";
import ThreeImages from "../components/three-images";

export default function About() {

	return (
		<>
			<Nav />
			<HeroInternalSvg />
			<FeaturedProjects />
			<CaseStudies />
			<ThreeImages />
		</>
	)
}
import Image from 'next/image';
import Nav from "../components/nav/nav";
import HeroInternal from "../components/hero/hero-internal";
import CaseStudies from "../components/case-studies/case-studies";
import ThreeImages from "../components/three-images";

export default function About() {

	return (
		<>
			<Nav />

			<div className="main-content">	
				<HeroInternal 
					headline="Showcasing My Journey: Personal Projects & Professional Work"
					description="Here, you'll find a collection of personal projects that reflect my creativity and curiosity, alongside professional work that highlights my experience and dedication. Dive in and explore the work that defines me!"
				/>
                {/* Featured Projects Carousel Here */}
				<CaseStudies />
				<ThreeImages />
			</div>
		</>
	)
}
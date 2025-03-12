import Image from 'next/image';
import Nav from "../components/nav/nav";
import HeroInternal from "../components/hero/hero-internal";
import FeaturedProjects from '../components/featured-projects';
import CaseStudies from "../components/case-studies/case-studies";
import ThreeImages from "../components/three-images";

export default function About() {

	return (
		<>
			<Nav />
			<div className='echo-container py-20 md:pb-40 lg:pb-60 relative'>
				<HeroInternal 
					headline="Showcasing My Journey: Personal Projects & Professional Work"
					description="Here, you'll find a collection of personal projects that reflect my creativity and curiosity, alongside professional work that highlights my experience and dedication. Dive in and explore the work that defines me!"
				/>
				{/* <div className='p-20 w-full sm:w-3/4 md:w-1/2 m-auto relative'>
					<p  className='echo'></p>
				</div> */}
				<div className='svg-spacer wave'></div>
			</div>
			<FeaturedProjects />
			<CaseStudies />
			<ThreeImages />
		</>
	)
}
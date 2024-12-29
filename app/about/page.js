import Image from 'next/image';
import headshotImage from "../../public/DSC_1344.jpg";
import Nav from "../components/nav";
import AboutMe from "../components/about-me";
import CaseStudies from "../components/case-studies";
import ThreeImages from "../components/three-images";

export default function About() {

	return (
		<>
			<Nav />

			<div className="main-content">	
				<section className='pt-0'>
					<div className='flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-16 items-center text-center md:text-left'>
						<div className='relative h-80 xl:h-[30rem] w-full lg:w-1/3 overflow-hidden'>
							<Image 
								src={headshotImage.src}
								alt="A headshot of Zach wearing a suit with a blue and red shirt."
								fill
								priority
								sizes='75vw'
								className="object-top object-cover rounded-xl"
								data-aos="fade-in"
								/>
						</div>
						<div className='w-full lg:w-1/2'>
							<h3 className='text-2xl font-bold' data-aos="fade-in">Collaborative. Focused. Resourceful.</h3>
								<br/>
							<p data-aos="fade-right" className=''>With a keen eye for detail and a passion for code, I excel in driving projects forward with purpose and commitment.</p>
						</div>
					</div>
				</section>
				<AboutMe />
				<CaseStudies />
			</div>
			<ThreeImages />
		</>
	)
}
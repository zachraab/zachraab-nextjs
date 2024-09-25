import Nav from "../components/nav"
import Image from "next/image";

export default function Resume() {
	let skillsArray = ['JavaScript', 'Next.js', 'MySQL', 'MongoDB', 'Node.js', 'PHP', 'React', 'WordPress', 'CSS3', 'HTML5', 'SASS', 'jQuery', 'Bootstrap', 'Tailwind', 'Express'];

	return (
		<>
			<Nav />

			<div className="main-content resume">
				<div className="mb-4 flex flex-col sm:flex-row sm:space-x-8">
					<Image 
						src="/DSC_1344.jpg"
						alt="Headshot of Zach Raab"
						width="500"
						height="500"
						priority
						className="mb-4 sm:mb-0 sm:basis-1/3 h-80 object-top object-cover rounded-xl"
						data-aos="fade-in"
					/>
					<div className="sm:basis-2/3 xl:basis-1/2 flex flex-col justify-center">
						<h1 data-aos="fade-right" className="font-bold text-4xl">Zach Raab</h1>
						<h2 data-aos="fade-left" >Full-Stack Developer</h2>
						<hr/>
						<p data-aos="fade-in" >I am a junior developer with a background in ballroom dancing and music, providing me a unique and creative perspective to approach technical problems. In my last role as a front-end developer, I worked on custom WordPress websites using SASS, JavaScript and PHP.</p>
					</div>
				</div>
				<div className="mb-4 tech-skills">
					<h2 data-aos="fade-in" className="font-bold text-lg">Technical Skills</h2>
					<hr/>
					<ul className="flex flex-wrap justify-center md:justify-start xl:w-2/3">
						{skillsArray.map((skill, index) => (
							<li key={index} data-aos-once="true" data-aos="fade-down" data-aos-delay={index * 100} className="p-2 m-2 border border-black">
								{skill}
							</li>
						))}
					</ul>
				</div>
				<div className="mb-4">
					<h2 data-aos="fade-in" className="font-bold text-lg">Education</h2>
					<hr/>
					<p data-aos="fade-in">Bootcamp Certificate in Full Stack Web Development University of Denver</p>
					<p data-aos="fade-in">Bachelor of Music Recording Engineering University of Denver</p>
				</div>
				<div>
					<h2 data-aos="fade-in" className="font-bold text-lg">Professional Experience</h2>
					<hr/>
					<div className="mb-8">
						<h3 data-aos="fade-in" className="flex flex-wrap md:flex-row lg:w-3/4 px-4 py-2 mb-2 bg-gray-100 rounded-lg">
							<span className="w-1/2 md:w-1/4">Independent</span>
							<span className="w-1/2 md:w-1/4">Developer</span>
							<span className="w-1/2 md:w-1/4">Denver, CO</span>
							<span className="w-1/2 md:w-1/4">2022 - Present</span>
						</h3>
						<ul className="list-disc list-inside ml-8 mb-4">
							<li data-aos="fade-in">Contract web developer work for creative and web dev agencies, focusing mostly on wordpress developement.</li>
							<li data-aos="fade-in">Provided clients with detailed quality assurance for their websites, ensuring optimal performance. Communicated existing bugs and recommended solutions.</li>
							<li data-aos="fade-in">Maintained websites by regularly updating plugins and WordPress versions to guarantee security and functionality.</li>
							<li data-aos="fade-in">Implemented new desired features to meet clients&apos; evolving needs and preferences.</li>
						</ul>
					</div>
					<div className="">
						<h3  data-aos="fade-in"className="flex flex-wrap md:flex-row lg:w-3/4 px-4 py-2 mb-2 bg-gray-100 rounded-lg">
							<span className="w-1/2 md:w-1/4">Blennd</span>
							<span className="w-1/2 md:w-1/4">Developer</span>
							<span className="w-1/2 md:w-1/4">Denver, CO</span>
							<span className="w-1/2 md:w-1/4">2021 - 2022</span>
						</h3>
						<ul className="list-disc list-inside ml-8 mb-4">
							{/* Reference Inflow, Sycle, Western */}
							<li data-aos="fade-in">Collaborated with project team and delivered high quality products under budgeted hours.</li>
							<li data-aos="fade-in">Worked in development cycle where team is rebasing/merging branches frequently. Made continuous deployments of code between development, staging,
							and production environments.</li>
							<li data-aos="fade-in">Participated in code reviews to instill the highest of code quality, ensure best practices, and continuous
							improvement of the team with thorough testing.</li>
							<li data-aos="fade-in">Attended daily meetings with team to provide updates and forecast future features.</li>
							<li data-aos="fade-in">Built flexible, scalable, and maintainable websites and solutions that are efficient and minimize the time required
							to bugfix or introduce new features.</li>
							<li data-aos="fade-in">Provided strategic insights and reviews of design solutions prior to development resulting in more performant
							products and better user experience.</li>
							<li data-aos="fade-in">Translated custom designs into functional, responsive, cross-browser compatible web experiences within
							WordPress and other CMS platforms.</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
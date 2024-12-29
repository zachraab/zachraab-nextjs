import Nav from "../components/nav"

export default function Resume() {
	let skillsArray = ['JavaScript', 'Next.js', 'MySQL', 'MongoDB', 'Node.js', 'PHP', 'React', 'WordPress', 'CSS3', 'HTML5', 'SASS', 'jQuery', 'Bootstrap', 'Tailwind', 'Express'];

	return (
		<>
			<Nav />

			<div className="main-content resume">
				<div className="mb-4 flex flex-col sm:flex-row sm:space-x-8">
					<div className="flex flex-col justify-center">
						<h1 data-aos="fade-right" className="font-bold text-4xl">Full-Stack Developer</h1>
						<h2 data-aos="fade-left" >zpraab@gmail.com</h2>
						<hr/>
						<p data-aos="fade-in" className="indent-8">Dynamic Full Stack Developer with expertise in crafting responsive web solutions using JavaScript, and PHP. Leverages a distinctive background as a professional musician and dancer to combine artistic sensibility with technical proficiency to create elegant user experiences and efficient backend architectures. Experienced in optimizing application performance, implementing responsive design patterns, and collaborating with cross-functional teams to meet project objectives.</p>
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
							<span className="w-1/2 md:w-1/4">Freelance Web Developer</span>
							<span className="w-1/2 md:w-1/4">Denver, CO</span>
							<span className="w-1/2 md:w-1/4">2022 - Present</span>
						</h3>
						<p data-aos="fade-in" className="ml-8 mb-4 indent-8">Independent Web Developer specializing in WordPress development and performance optimization for creative agencies and design firms, with demonstrated success delivering high-quality client solutions. Managed ongoing website maintenance and security updates for multiple agency clients while ensuring optimal site performance and functionality. Recently completed a comprehensive website development project for True Finishings, delivering a custom WordPress solution that aligned with client branding and business objectives.</p>
						<ul className="list-disc list-inside ml-8 mb-4">
							<li data-aos="fade-in">Maintained strong relationships with multiple creative agencies, serving as their go-to WordPress development partner while consistently meeting project deadlines and budget requirements</li>
							<li data-aos="fade-in">Successfully delivered custom WordPress website for True Finishings, incorporating advanced functionality including product galleries, quote request system, and content management tools</li>
							<li data-aos="fade-in">Expanded development expertise beyond WordPress to include modern JavaScript frameworks like React.js and Next.js, while building full-stack applications with MongoDB to deliver more dynamic and scalable client solutions</li>
						</ul>
					</div>
					<div className="">
						<h3  data-aos="fade-in"className="flex flex-wrap md:flex-row lg:w-3/4 px-4 py-2 mb-2 bg-gray-100 rounded-lg">
							<span className="w-1/2 md:w-1/4">Blennd</span>
							<span className="w-1/2 md:w-1/4">Web Developer</span>
							<span className="w-1/2 md:w-1/4">Denver, CO</span>
							<span className="w-1/2 md:w-1/4">2021 - 2022</span>
						</h3>
						<ul className="list-disc list-inside ml-8 mb-4">
							<li data-aos="fade-in">Developed responsive websites using WordPress and custom CMS platforms, ensuring proper display across different browsers and devices</li>
							<li data-aos="fade-in">Supported project team efforts in delivering quality websites and features within planned timelines</li>
							<li data-aos="fade-in">Built maintainable websites following established code standards and best practices to ensure efficient future updates</li>
							<li data-aos="fade-in">Provided input during design reviews to help identify potential development challenges and improve overall user experience</li>
							<li data-aos="fade-in">Utilized Git version control for code management and followed deployment processes across development, staging, and production environments</li>
							<li data-aos="fade-in">Participated in code reviews to learn best practices and improve code quality, while contributing to team documentation and testing procedures</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
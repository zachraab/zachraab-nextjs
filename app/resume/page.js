import Nav from "../components/nav"
import Image from "next/image";

export default function Resume() {
	let skillsArray = ['JavaScript', 'CSS3', 'HTML5', 'SASS', 'PHP', 'jQuery', 'Bootstrap', 'Tailwind', 'React', 'Next.js', 'Express', 'MySQL', 'MongoDB', 'Node.js', "WordPress"];

	return (
		<>
			<Nav />

			<div className="main-content">
				<div className="mb-4 flex flex-col sm:flex-row sm:space-x-8">
					<Image 
						src="/DSC_1344.jpg"
						alt="Headshot of Zach Raab"
						width="500"
						height="500"
						className="mb-4 sm:mb-0 sm:basis-1/3 h-80 object-top object-cover"
						data-aos="fade-in"
					/>
					<div className="sm:basis-2/3 xl:basis-1/2 flex flex-col justify-center">
						<h1 data-aos="fade-right" className="font-bold text-4xl">Zach Raab</h1>
						<h2 data-aos="fade-left" >Full-Stack Developer</h2>
						<hr/>
						<p data-aos="fade-in" >Empowering digital experiences through innovative and efficient React development. Dedicated to crafting intuitive, scalable, and dynamic user interfaces that drive engagement and exceed expectations. With a passion for cutting-edge technology and a commitment to excellence, I strive to elevate every project to its fullest potential.</p>
					</div>
				</div>
				<div className="mb-4 tech-skills">
					<h2 data-aos="fade-in" className="font-bold text-lg">Technical Skills</h2>
					<hr/>
					<ul className="flex flex-wrap justify-center md:justify-start xl:w-2/3">
						{skillsArray.map((skill, index) => (
							<li key={index} data-aos="fade-down" data-aos-delay={index * 100} className="p-2 m-2 border border-black">
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
					<p data-aos="fade-in">Certifications...</p>
				</div>
				<div>
					<h2 data-aos="fade-in" className="font-bold text-lg">Professional Experience</h2>
					<hr/>
					<h3 data-aos="fade-in" className="flex w-3/4 mb-2 border-b hover:border-black">
						<span className="basis-1/4">Zach Raab</span>
						<span className="basis-1/4">React Developer</span>
						<span className="basis-1/4">Denver, CO</span>
						<span className="basis-1/4">Nov 2022 - Present</span>
					</h3>
					<ul className="list-disc list-inside mb-4">
						<li data-aos="fade-left">Contract web dev work for creative and web dev agencies, focusing mostly on wordpress developement.</li>
					</ul>
					<h3  data-aos="fade-in"className="flex w-3/4 mb-2 border-b hover:border-black">
						<span className="basis-1/4">Blennd</span>
						<span className="basis-1/4">WordPress Developer</span>
						<span className="basis-1/4">Denver, CO</span>
						<span className="basis-1/4">Nov 2021 - Nov 2022</span>
					</h3>
					<ul className="list-disc list-inside">
						{/* Reference Inflow, Sycle, Western */}
						<li data-aos="fade-left">Translated custom designs into functional, responsive, cross-browser compatible web experiences within
						WordPress and other CMS platforms.</li>
						<li data-aos="fade-left">Collaborated with project team and delivered high quality products under budgeted hours.</li>
						<li data-aos="fade-left">Built flexible, scalable, and maintainable websites and solutions that are efficient and minimize the time required
						to bugfix or introduce new features.</li>
						<li data-aos="fade-left">Provided strategic insights and reviews of design solutions prior to development resulting in more performant
						products and better user experience.</li>
						<li data-aos="fade-left">Handled version control (Git) and continuous integration deployments of code between development, staging,
						and production environments.</li>
						<li data-aos="fade-left">Participated in code reviews to instill the highest of code quality, ensure best practices, and continuous
						improvement of the team with thorough testing.</li>
						<li data-aos="fade-left">Wrote documentation for common processes to  efficiently and save the
						company money.</li>
					</ul>
				</div>
			</div>
		</>
	)
}
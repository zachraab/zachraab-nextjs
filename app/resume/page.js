import Nav from "../components/nav"
import myImage from "../../public/images/DSC_1344.jpg"

export default function Resume() {
	let skillsArray = ['JavaScript', 'CSS3', 'HTML5', 'SASS', 'PHP', 'jQuery', 'Bootstrap', 'Tailwind', 'React', 'Next.js', 'Express', 'MySQL', 'MongoDB', 'Node.js'];

	return (
		<>
			<Nav />

			<div className="main-content">
				<div className="mb-8 flex flex-col sm:flex-row space-x-8">
					<img
						className="sm:basis-1/3 h-80 object-top object-cover"
						src={myImage.src} alt="Headshot of Zach Raab" >
					</img>
					<div className="sm:basis-2/3 flex flex-col justify-center">
						<h1 className="font-bold text-4xl">Zach Raab</h1>
						<h2>Full-Stack Developer</h2>
						<hr/>
						<p>Empowering digital experiences through innovative and efficient React development. Dedicated to crafting intuitive, scalable, and dynamic user interfaces that drive engagement and exceed expectations. With a passion for cutting-edge technology and a commitment to excellence, I strive to elevate every project to its fullest potential.</p>
					</div>
				</div>
				<div className="mb-8">
					<h2 className="font-bold text-lg">Technical Skills</h2>
					<hr/>
					<ul className="flex justify-between">
						{skillsArray.map((skill, index) => (
							<li key={index} className="">
								{skill}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-bold text-lg">Professional Experience</h2>
					<hr/>
					<h3>Freelance React Developer at Zach Raab</h3>
					<h3>Blennd | Developer | Denver, CO Nov 2021 - Nov 2022</h3>
					<ul className="mb-8">
						<li>● Translated custom designs into functional, responsive, cross-browser compatible web experiences within
						WordPress and other CMS platforms.</li>
						<li>● Developed solutions spanning both front-end and back-end development frameworks to drive improvements.</li>
						<li>● Engaged in project planning/estimates, collaboration with project teams, and executing under the scoped budget
						with limited guidance resulting in saving the company thousands of dollars and time.</li>
						<li>● Built flexible, scalable, and maintainable websites and solutions that are efficient and minimize the time required
						to bugfix or introduce new features.</li>
						<li>● Provided strategic insights and reviews of design solutions prior to development resulting in more performant
						products.</li>
						<li>● Handled version control (Git) and continuous integration deployments of code between development, staging,
						and production environments.</li>
						<li>● Participated in code reviews to instill the highest of code quality, ensure best practices, and continuous
						improvement of the team with thorough testing.</li>
						<li>● Implemented best practices for semantic markup and execution of browser code within our applications in order
						to support SEO and site performance metrics.</li>
						<li>● Wrote documentation for common processes to aid future employees work more efficiently and save the
						company money.</li>
					</ul>
				</div>
				{/* dance instructor./ additional work experience */}
				<div>
					<h2 className="font-bold text-lg">Education</h2>
					<hr/>
					<p>Bootcamp Certificate in Full Stack Web Development University of Denver</p>
					<p>Bachelor of Music Recording Engineering University of Denver</p>
				</div>
			</div>
		</>
	)
}
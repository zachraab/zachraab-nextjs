import Nav from "../nav"
import Footer from "../footer"
import myImage from "../../public/DSC_1344.jpg"

export default function Resume() {
	let skillsArray = ['JavaScript', 'ES6', 'CSS3', 'HTML5', 'SASS', 'PHP', 'jQuery', 'Bootstrap', 'Tailwind', 'React', 'Next.js', 'Express', 'MySQL', 'MongoDB'];

	return (
		<>
			<Nav />

			<img
				className="h-60 w-80 object-top object-center object-cover"
				src={myImage.src} alt="Headshot of Zach Raab" >
			</img>
			<h1>Zach Raab</h1>
			<h2>Full-Stack Developer</h2>
			<h2>Technical Skills</h2>
			<ul className="flex space-x-2">
				{skillsArray.map((skill, index) => (
					<li key={index}>
						{skill}
					</li>
				))}
			</ul>
			<div>
				<h2>Professional Experience</h2>
				<h3>Blennd | Developer | Denver, CO Nov 2021 - Nov 2022</h3>
				<ul>
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
				<h2>Education</h2>
				<h3>Bootcamp Certificate in Full Stack Web Development University of Denver</h3>
				<h3>Bachelor of Music Recording Engineering University of Denver</h3>
			</div>

			<Footer />
		</>
	)
}
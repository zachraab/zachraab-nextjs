export default function AboutMe() {
	return (
		<section className="relative bg-gray-100">

			<h2 data-aos="fade-in" className="relative bg-inherit font-bold text-4xl mb-1">
				{/* Dotted circle shape */}
				<div className="absolute rounded-full top-0 left-0 -mt-16 ml-8 h-24 w-24 border-4 border-black border-dotted animate-spin-slow"></div>
				<span className="relative bg-inherit">About Me</span>
			</h2>
				<hr/>
			<p data-aos="fade-right">
				Zach&apos;s upbringing amidst the natural splendor of Rocky Mountain National Park instilled a deep appreciation for the outdoors. He found himself most weekends roaming the trails of Deer Creek Canyon. Zach and his wife Erika are professional ballroom dancers and dance instructors. They have been dancing and teaching together for 3 years while traveling to compete around the western region of the US. From a young age, he had a passion for music as a saxophonist and ventured on to study jazz and the art of music composition. He is also a DJ and has been in the business for 9 years, providing entertainment to weddings and parties all over Colorado.
			</p>
				<br/>
			<p data-aos="fade-right" data-aos-delay="100">
				In addition to his diverse background, Zach is a versatile full-stack developer. During his tenure at Blennd, he developed custom wordpress websites that garnered acclaim from both users and industry experts. Proficient in cultivating creativity and resolving complex challenges, he excels in collaborative team settings. His role involved collaborating with cross-functional teams, including designers and content creators, to deliver seamless user experiences. Committed to continuous learning, he has completed multiple online courses in emerging technologies such as Typescript and React, further enhancing his skill set. 
			</p>
				<br/>
			<p data-aos="fade-right" data-aos-delay="200">
				As a React developer, Zach brings a robust skill set tailored to crafting dynamic and responsive web applications. Proficient in Next.js, he has leveraged its server-side rendering capabilities to optimize performance and enhance user experience. His expertise in React enables him to architect scalable and maintainable front-end solutions, ensuring seamless interaction and intuitive interfaces. Additionally, Zach is well-versed in TypeScript, utilizing its strong typing system to catch errors early in the development process and improve code reliability. His proficiency in Tailwind CSS allows him to efficiently style components and design visually appealing layouts while maintaining flexibility and consistency across projects. With a keen eye for detail and a passion for clean, modular code, Zach excels in driving projects forward with precision and innovation.
			</p>	
				<br/>
			<button className="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
				<a href="/resume" className="leading-12 block relative z-10 w-full h-full">Learn More</a>
			</button>
		</section>
	)
}
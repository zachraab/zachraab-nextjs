import hikingImage from "../../public/images/IMG_0999.jpg"
import danceImage from "../../public/images/dance pose.jpg"

export default function AboutMe() {
	return (
		<div className="mb-5">
			<div className="flex mb-5">
				<img className="basis-1/2 h-80 object-bottom object-cover" src={hikingImage.src} alt="Zach standing in front of a lake and mountain view." />
				<img className="basis-1/2 h-80 object-top object-cover" src={danceImage.src} alt="Zach holding Erika in his arms." />
			</div>
			<h2 className="font-bold text-xl">About Me</h2>
				<hr/>
			<p>
				Growing up in Colorado, Zach found himself most weekends roaming the trails of Deer Creek Canyon. From a young age, he had a passion for music as a saxophonist and ventured on to study jazz and the art of composition. Zach and his wife Erika are professional ballroom dancers and dance instructors. They travel to compete around the western region of the US.
			</p>
				<br/>
			<p>
				Zach is a versatile full-stack developer with a diverse background spanning music, dance, audio engineering, and programming. His upbringing amidst the natural splendor of Rocky Mountain National Park instilled a deep appreciation for the outdoors. During his tenure at Blennd, he developed custom wordpress websites that garnered acclaim from both users and industry experts. Proficient in cultivating creativity and resolving complex challenges, he excels in collaborative team settings. His role involved collaborating with cross-functional teams, including designers and content creators, to deliver seamless user experiences. Committed to continuous learning, he has completed multiple online courses in emerging technologies such as Typescript and React, further enhancing his skill set. 
			</p>
				<br/>
			<p>
				As a React developer, Zach brings a robust skill set tailored to crafting dynamic and responsive web applications. Proficient in Next.js, he has leveraged its server-side rendering capabilities to optimize performance and enhance user experience. His expertise in React enables him to architect scalable and maintainable front-end solutions, ensuring seamless interaction and intuitive interfaces. Additionally, Zach is well-versed in TypeScript, utilizing its strong typing system to catch errors early in the development process and improve code reliability. His proficiency in Tailwind CSS allows him to efficiently style components and design visually appealing layouts while maintaining flexibility and consistency across projects. With a keen eye for detail and a passion for clean, modular code, Zach excels in driving projects forward with precision and innovation.
			</p>	
				<br/>
			<button className="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
				<a href="/resume" className="leading-12 block relative z-10 w-full h-full">Learn More</a>
			</button>
		</div>
	)
}
export default function AboutMe() {
	return (
		<section className="relative flex flex-col items-center md:items-start text-center md:text-left bg-gray-100">

			<h2 data-aos="fade-in" className="relative w-fit bg-inherit font-bold text-4xl mb-1">
				{/* Dotted circle shape */}
				<div className="absolute rounded-full top-0 left-0 -mt-16 ml-8 h-24 w-24 border-4 border-black border-dotted animate-spin-slow"></div>
				<span className="relative bg-inherit">About</span>
			</h2>
				<hr/>
			<p data-aos="fade-right">
				Zach&apos;s upbringing amidst the natural splendor of Rocky Mountain National Park instilled a deep appreciation for the outdoors. He found himself most weekends roaming the trails of Deer Creek Canyon. Zach and his wife Erika are professional ballroom dancers and dance instructors. They have been dancing and teaching together for 3 years while traveling to compete around the western region of the US. From a young age, he had a passion for music as a saxophonist and ventured on to study jazz and the art of music composition. He is also a DJ and has been in the business for 9 years, providing entertainment to weddings and parties all over Colorado.
			</p>
				<br/>
			<p data-aos="fade-right" data-aos-delay="100">
				In addition to his diverse background, Zach is a versatile full-stack developer. He develops custom wordpress websites and is proficient in cultivating creativity and resolving complex challenges. He excels in collaborative team settings, including designers and content creators, to deliver seamless user experiences. Committed to continuous learning, he has completed multiple online courses in emerging technologies such as Typescript and React, further enhancing his skill set. 
			</p>
		</section>
	)
}
export default function AboutMe() {
	return (
		<section className="relative flex flex-col items-center md:items-start text-center md:text-left bg-gray-100">

			<h2 data-aos="fade-in" className="relative w-fit bg-inherit font-bold text-4xl mb-1">
				{/* Dotted circle shape */}
				<div className="absolute rounded-full top-0 left-0 -mt-16 ml-8 h-24 w-24 border-4 border-black border-dotted animate-spin-slow"></div>
				<span className="relative bg-inherit">About</span>
			</h2>
				<hr className="w-full"/>
			<p data-aos="fade-right" data-aos-delay="100">Zach is a versatile full-stack developer. He creates custom websites and is skilled at fostering creativity while solving complex challenges. He thrives in collaborative team settings, working closely with designers and content creators to deliver seamless user experiences.</p>
				<br/>
			<p data-aos="fade-right">
				Zach&apos;s upbringing amidst the natural splendor of Rocky Mountain National Park instilled in him a deep appreciation for the outdoors. He spent most weekends roaming the trails of Deer Creek Canyon. Zach and his wife, Erika, are professional ballroom dancers and dance instructors. They have been dancing and teaching together for three years while traveling to compete across the western United States. From a young age, Zach had a passion for music as a saxophonist and later pursued the study of jazz and music composition. He is also a DJ and has been in the business for nine years, providing entertainment for weddings and parties throughout Colorado.
			</p>
		</section>
	)
}
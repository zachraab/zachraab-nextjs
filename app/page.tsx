import myImage from "/DSC_1344.jpg"

export default function Home() {
	const aboutStyle = { margin: "20px" };
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<nav
			className="main-header-menu"
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				margin: 40,
			}}
			>
				<section style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
					<h1 style={{ fontSize: "4rem" }}>
						Zach Raab{"  "}<span style={{ fontSize: "2rem" }}>Full-Stack Developer</span>
					</h1>
						<img
							style={{ objectPosition: "top center", objectFit: "cover", height: "300px", width: "300px" }}
							src={myImage.src} alt="Headshot of Zach Raab."
						></img>
				</section>
				<section style={{ display: "flex", fontSize: "2rem", }}>
					<div>
						<a href="https://www.linkedin.com/in/zachary-raab-61578248/">
							LinkedIn
						</a>
					</div>
					<div>
						<a href="https://github.com/zachraab">GitHub</a>
					</div>
				</section>
			</nav>

			<section style={aboutStyle}>
				<h2>About Me</h2>
				<p>
				Zach is a versatile full-stack developer with a diverse background spanning music, dance, audio engineering, and programming. His upbringing amidst the natural splendor of Rocky Mountain National Park instilled a deep appreciation for the outdoors. During his tenure at Blennd, he developed custom wordpress websites that garnered acclaim from both users and industry experts. Proficient in cultivating creativity and resolving complex challenges, he excels in collaborative team settings. His role involved collaborating with cross-functional teams, including designers and content creators, to deliver seamless user experiences. Committed to continuous learning, he has completed multiple online courses in emerging technologies such as Typescript and React, further enhancing his skill set.

				As a React developer, Zach brings a robust skill set tailored to crafting dynamic and responsive web applications. Proficient in Next.js, he has leveraged its server-side rendering capabilities to optimize performance and enhance user experience. His expertise in React enables him to architect scalable and maintainable front-end solutions, ensuring seamless interaction and intuitive interfaces. Additionally, Zach is well-versed in TypeScript, utilizing its strong typing system to catch errors early in the development process and improve code reliability. His proficiency in Tailwind CSS allows him to efficiently style components and design visually appealing layouts while maintaining flexibility and consistency across projects. With a keen eye for detail and a passion for clean, modular code, Zach excels in driving projects forward with precision and innovation.
				</p>
			</section>
		</main>
	);
}

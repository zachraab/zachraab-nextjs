import Image from 'next/image';
import Link from "next/link";
import hikingImage from "../../public/IMG_0999.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

export default function HeroHome() {
	return(
		<section className='pt-0'>
			<div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-16 items-center text-center md:text-left">
				<Image 
					src={hikingImage.src}
					alt="Zach standing in front of a lake and mountain view."
					width="4000"
					height="3000"
					className="lg:w-1/2 h-full object-bottom object-cover"
					data-aos="fade-in"
				/>
				<div className="w-full lg:w-1/2">
					<h1 data-aos="fade-in" className="font-bold text-4xl">Hi I&apos;m Zach!</h1>
						<hr/>
					<p className="text-lg bg-gray-100 rounded-xl p-4">With a keen eye for detail and a passion for clean, modular code, Zach excels in driving projects forward with purpusefulness and commitment.</p>
						<br/>
					<p data-aos="fade-in">
						As a React developer, Zach is proficient in Next.js, he has leveraged its server-side rendering capabilities to optimize performance and enhance user experience. His experience in React enables him to architect maintainable front-end solutions, ensuring seamless interaction and intuitive interfaces. Additionally, Zach is versed in TypeScript, utilizing its strong typing system to catch errors early in the development process and improve code reliability. His proficiency in Tailwind CSS allows him to efficiently style components and design visually appealing layouts while maintaining flexibility and consistency across projects.
					</p>
						<br/>
					<div className="flex items-center justify-center space-x-8 pb-4">
						<Link data-aos="fade-up" className=" overflow-hidden text-center text-xl h-12 w-40 before:ease relative border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180" href="mailto:zpraab@gmail.com">
							<AiOutlineSend className="relative inline-block mr-2" /><span className="leading-12 relative z-10 w-full h-full">Email Me</span>
						</Link>
						<Link data-aos="fade-up" data-aos-delay="100" className="flex items-center text-3xl p-2 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-32 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180 relative overflow-hidden" href="https://github.com/zachraab" rel="nofollow" target="_blank">
							<FaGithub className="inline-block relative" />
						</Link> 
						<Link data-aos="fade-up" data-aos-delay="200" className="flex items-center text-3xl p-2 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-32 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180 relative overflow-hidden" href="https://www.linkedin.com/in/zachary-raab-61578248/" rel="nofollow" target="_blank">
							<FaLinkedin className="inline-block relative" />
						</Link> 
					</div>
				</div>
			</div>
		</section>
	)
}

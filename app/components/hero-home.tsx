import Image from 'next/image';
import Link from "next/link";
import hikingImage from "../../public/IMG_0999.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

export default function heroHome() {
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
					<h1 data-aos="fade-in" className="font-bold text-4xl mb-16">Hi I'm Zach!</h1>
					<p data-aos="fade-in">
						As a React developer, Zach is proficient in Next.js, he has leveraged its server-side rendering capabilities to optimize performance and enhance user experience. His experience in React enables him to architect maintainable front-end solutions, ensuring seamless interaction and intuitive interfaces. Additionally, Zach is versed in TypeScript, utilizing its strong typing system to catch errors early in the development process and improve code reliability. His proficiency in Tailwind CSS allows him to efficiently style components and design visually appealing layouts while maintaining flexibility and consistency across projects. With a keen eye for detail and a passion for clean, modular code, Zach excels in driving projects forward with purpusefulness.
					</p>
						<br/>
					<div className="flex items-center justify-center space-x-4 pb-4">
						<Link data-aos="fade-up" className="text-center text-xl before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180" href="mailto:zpraab@gmail.com">
							<AiOutlineSend className="relative inline-block mr-2" /><span className="leading-12 relative z-10 w-full h-full">Email Me</span>
						</Link>
						<Link data-aos="fade-up" data-aos-delay="100" className="flex items-center text-3xl p-2 hover:bg-black hover:text-white ease-in-out duration-300" href="https://github.com/zachraab" rel="nofollow" target="_blank">
							<FaGithub className="inline-block" />
						</Link> 
						<Link data-aos="fade-up" data-aos-delay="200" className="flex items-center text-3xl p-2 hover:bg-black hover:text-white ease-in-out duration-300 " href="https://www.linkedin.com/in/zachary-raab-61578248/" rel="nofollow" target="_blank">
							<FaLinkedin className="inline-block" />
						</Link> 
					</div>
				</div>
			</div>
		</section>
	)
}

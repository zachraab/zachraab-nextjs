import Image from 'next/image';
import headshotImage from "../../public/DSC_1344.jpg";
import Nav from "../components/nav";

export default function About() {

	return (
		<>
			<Nav />

			<div className="main-content mb-32">
				<div className='relative h-80 xl:h-[40rem] w-full xl:w-1/2 overflow-hidden'>
					<Image 
						src={headshotImage.src}
						alt="Zach standing in front of a lake and mountain view."
						fill
						priority
						sizes='75vw'
						className="object-bottom object-cover rounded-xl"
						data-aos="fade-in"
						/>
				</div>

			</div>
		</>
	)
}
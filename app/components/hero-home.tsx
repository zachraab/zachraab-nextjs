import Image from "next/image";
import hikingImage from "../../public/IMG_0999.jpg"
import danceImage from "../../public/dance-pose.jpg"
import partyImage from "../../public/Dance-party.jpg"

export default function heroHome() {
	return(
		<section>
			<h1 className="font-bold text-4xl text-center mb-16">Hello!!</h1>
			<div className="flex">
				<Image 
					src={hikingImage.src}
					alt="Zach standing in front of a lake and mountain view."
					width="500"
					height="500"
					className="basis-1/3 h-80 object-bottom object-cover"
					data-aos="fade-down"
				/>
				<Image 
					src={danceImage.src}
					alt="Zach holding Erika in his arms."
					width="500"
					height="500"
					className="basis-1/3 h-80 object-top object-cover"
					data-aos="fade-down" 
					data-aos-delay="200"
				/>
				<Image 
					src={partyImage.src}
					alt="People dancing and singing."
					width="500"
					height="500"
					className="basis-1/3 h-80 object-top object-cover"
					data-aos="fade-down" 
					data-aos-delay="400"
				/>
			</div>
		</section>
	)
}

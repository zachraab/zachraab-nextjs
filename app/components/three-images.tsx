import Image from "next/image";
import danceImage from "../../public/dance-pose.jpg"
import partyImage from "../../public/dance-party.jpg"
import rockImage from "../../public/20150823_142148.jpg"

export default function threeImages() {
	return(
		<div className="flex flex-col md:flex-row">
				<Image 
					src={rockImage.src}
					alt="Zach sitting on a rock."
					width="1000"
					height="1000"
					className="w-full md:w-1/3 h-80 object-top object-cover"
					data-aos="fade-down" 
				/>
				<Image 
					src={danceImage.src}
					alt="Zach holding Erika in his arms."
					width="1000"
					height="1000"
					className="w-full md:w-1/3 h-80 object-top object-cover"
					data-aos="fade-down" 
					data-aos-delay="200"
				/>
				<Image 
					src={partyImage.src}
					alt="People dancing and singing."
					width="1000"
					height="1000"
					className="w-full md:w-1/3 h-80 object-top object-cover"
					data-aos="fade-down" 
					data-aos-delay="400"
				/>
			</div>
	)
}
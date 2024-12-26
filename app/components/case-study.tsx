// import cases from '../../lib/case-studies.json';
import Image from 'next/image'
import { Modal, ModalContents, ModalOpenButton } from "./case-modal";

export default function CaseStudy({ darkMode, bgColor, name, url, img, description, credit }: any) {
	bgColor = bgColor ? bgColor : 'white';

	return (
		<>
			<Modal>
				<ModalOpenButton>
					<button data-aos="fade-in" className="flex justify-center items-center h-48 w-full md:w-1/2 border border-gray-300 hover:border-gray-500 hover:bg-gray-100">
						<div className="relative inline-block text-left w-fit before:ease before:duration-300 before:bg-gray-300 before:absolute before:left-0 before:bottom-0 before:translate-x-1/4 before:h-1/4 before:w-0 before:transform before:-skew-y-12 hover:before:w-full active:before:bg-gray-600 mb-5 md:mb-3 md:text-base">
								<span className='relative text-2xl'>{name}</span>
						</div>
					</button>
				</ModalOpenButton>
				<ModalContents darkMode={ darkMode ? true : false }>
					<div 
						className="flex flex-col md:flex-row justify-center items-center p-16 space-y-4 md:space-y-0 md:space-x-8"
						style={{ 
							backgroundColor: bgColor,
							color: 	darkMode ? 'white' : ''
						}}
					>

						<div className="flex flex-col md:w-1/3 justify-center items-center">
							<Image 
								src={img.src}
								alt={`Logo of ${name}`}
								className="h-fit w-60 object-center object-contain"
								width='4032'
								height='3024'
							/>
							<br/>
							<a className="relative inline-block text-left w-fit before:-skew-x-12 before:-m-1 before:ease before:duration-300 before:bg-gray-300 before:absolute before:left-0 before:bottom-0 before:translate-x-1/4 before:h-1/4 before:w-0 hover:before:w-full active:before:bg-gray-600" href={url} target="_blank" rel='nofollow'><span className='relative'>Check it out!</span></a>
						</div>
						<div className="flex flex-col justify-center md:w-2/3">
							<h3 className="font-bold text-xl">{name}</h3>
								<hr className="md:w-2/3"/>
							<p>{description}</p>
							<br/>
							<p className='text-xs'>Credit: {credit}</p>
						</div>
					</div>
				</ModalContents>
			</Modal>
		</>
	)
}
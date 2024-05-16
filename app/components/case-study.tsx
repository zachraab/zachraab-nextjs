import cases from '../../lib/case-studies.json';
import Image from 'next/image'
import { Modal, ModalContents, ModalOpenButton } from "./case-modal";

export default function CaseStudy({ darkMode, bgColor, name, url, img, description }: any) {
	bgColor = bgColor ? bgColor : 'white';

	return (
		
		<>
			<Modal>
				<ModalOpenButton>
						<button className="inline-block text-left no-underline hover:underline mr-3 mb-5 md:mb-3 md:text-base">{name}</button>
				</ModalOpenButton>
				<ModalContents darkMode={ darkMode ? true : false }>
					<div 
						className="flex flex-wrap justify-center p-5 space-x-4"
						style={{ 
							backgroundColor: bgColor,
							color: 	darkMode ? 'white' : ''
						}}
					>
						<Image 
								src={img.src}
								alt={`Logo of ${name}`}
								className="h-40 w-60 object-center object-contain"
								width='4032'
								height='3024'
							/>
						<div className="flex flex-col justify-center">
							<div className='flex justify-between'>
								<h3 className="font-bold text-xl">{name}</h3>
								<a className="hover:underline" href={url} target="_blank" rel='nofollow'>{url}</a>
							</div>
							<p>{description}</p>
							<br/>
							<p className='text-xs'>Agency: Blennd</p>
						</div>
					</div>
				</ModalContents>
			</Modal>
		</>
	)
}
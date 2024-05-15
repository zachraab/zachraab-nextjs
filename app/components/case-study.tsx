import cases from '../../lib/case-studies.json';
import { Modal, ModalContents, ModalOpenButton } from "./case-modal";

export default function CaseStudy(props: any) {
	let bgColor = props.color ? ' bg-[' + props.color + ']' : '';
	let textColor = props.textColor ? props.textColor : '';

	return (
		
		<>
			<Modal>
				<ModalOpenButton>
						<button className="inline-block text-left no-underline hover:underline mr-3 mb-5 md:mb-3 md:text-base">{props.name}</button>
				</ModalOpenButton>
				<ModalContents title={props.name}>
					<div className={`flex flex-wrap justify-center p-5 hover:shadow-xl space-x-4 ` + textColor + bgColor}>
						<img
							className="h-40 w-40 object-center object-contain"
							src={props.img.src} alt={`Logo of ${props.name}`} >
						</img>
						<div className="flex flex-col justify-center">
							<h3 className="font-bold text-xl">{props.name}</h3>
							<p>{props.description}</p>
						</div>
					</div>
				</ModalContents>
			</Modal>
		</>
		// <a className="lg:basis-1/3" target="_blank" rel="nofollow" href={props.url}>
		// 	<div className={`flex flex-wrap justify-center p-5 hover:shadow-xl space-x-4 ` + textColor + bgColor}>
		// 		<img
		// 			className="h-40 w-40 object-center object-contain"
		// 			src={props.img.src} alt={`Logo of ${props.name}`} >
		// 		</img>
		// 		<div className="flex flex-col justify-center">
		// 			<h3 className="font-bold text-xl">{props.name}</h3>
		// 			<p>{props.description}</p>
		// 		</div>
		// 	</div>
		// </a>
	)
}
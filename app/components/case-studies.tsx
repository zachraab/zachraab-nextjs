import SycleLogo from "../../public/images/sycle logo.png"
import InflowLogo from "../../public/images/inflow logo.png"
import WesternLogo from "../../public/images/western logo.png"
import CaseStudy from "./case-study"

export default function CaseStudies() {
	return (
		<div>
			<h2 className="font-bold text-xl">Case Studies</h2>
			<hr />

			<div className="flex flex-wrap">
				<CaseStudy 
					name="Sycle" 
					url="https://coc.sycle.net/" 
					img={SycleLogo} 
					description="Hearing healthcare professionals have taken the steps to provide patients with all options when it comes to hearing loss treatment."

				/>
				<CaseStudy 
					name="Inflow" 
					url="https://inflowcx.com/" 
					img={InflowLogo} 
					description="At InflowCX, we focus on unified communications, contact center support services, and cloud consulting for businesses across the country." 
					color="#002b37" 
					textColor="text-white"
				/>
				<CaseStudy 
					name="Western" 
					url="https://western.edu/" 
					img={WesternLogo} 
					description="At Western, students are immersed in experiential learning, guided by professors who care, in an outdoor landscape like no other."
				/>
			</div>
		</div>
	)
}
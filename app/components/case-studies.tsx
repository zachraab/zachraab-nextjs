import SycleLogo from "../../public/sycle logo.png"
import InflowLogo from "../../public/inflow logo.png"
import WesternLogo from "../../public/western logo.png"
import CaseStudy from "./case-study"

export default function CaseStudies() {
	return (
		<section>
			<h2 data-aos="fade-in" className="font-bold text-xl">Previous Work</h2>
			<hr />

			<div data-aos="fade-left" className="flex flex-wrap">
				<CaseStudy 
					name="Sycle" 
					url="https://coc.sycle.net/" 
					img={SycleLogo} 
					description="Hearing healthcare professionals have taken the steps to provide patients with all options when it comes to hearing loss treatment."
					bgColor="#3874b5"
					darkMode={true}
				/>
				<CaseStudy 
					name="Inflow" 
					url="https://inflowcx.com/" 
					img={InflowLogo} 
					description="At InflowCX, we focus on unified communications, contact center support services, and cloud consulting for businesses across the country." 
					bgColor="#002b37" 
					darkMode={true}
				/>
				<CaseStudy 
					name="Western" 
					url="https://western.edu/" 
					img={WesternLogo} 
					description="At Western, students are immersed in experiential learning, guided by professors who care, in an outdoor landscape like no other."
					// #a71930
				/>
			</div>
		</section>
	)
}
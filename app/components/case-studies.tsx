import SycleLogo from "../../public/sycle-logo.png"
import InflowLogo from "../../public/inflow-logo.png"
import WesternLogo from "../../public/western-logo.png"
import CaseStudy from "./case-study"

export default function CaseStudies() {
	return (
		<section className="relative overflow-hidden">

			{/* Animated square */}
			<div className="before:animate-spin before:-mt-28 before:border-2 before:border-black before:absolute before:left-0 before:top-0 before:ml-48 before:h-56 before:w-56 before:origin-bottom-left before:translate-x-full before:-rotate-90 after:animate-spin after:-mt-28 after:border-l-2 after:border-black after:absolute after:left-0 after:top-0 after:ml-48 after:h-56 after:w-56 after:origin-bottom-right after:translate-x-full"></div>

			<h2 data-aos="fade-in" className="font-bold text-4xl">Previous Work</h2>
			<hr />

			<div data-aos="fade-left" className="flex flex-col flex-wrap relative">
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
					bgColor=''
					darkMode={false}
					// #a71930
				/>
			</div>
		</section>
	)
}
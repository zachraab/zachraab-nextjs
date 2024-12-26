import BlenndLogo from "../../public/blennd_logo.jpg"
import KioskLogo from "../../public/kiosk_logo.png"
import TFLogo from "../../public/true-finishings.png"
import SycleLogo from "../../public/sycle-logo.png"
import RPLogo from "../../public/RP_logo.png.webp"
import InflowLogo from "../../public/inflow-logo.png"
import CTLogo from "../../public/Cain_Travel_logo.png"
import WesternLogo from "../../public/western-logo.png"
import CaseStudy from "./case-study"

export default function CaseStudies() {
	return (
		<section className="relative overflow-hidden">

			{/* Animated square */}
			<div className="before:animate-spin before:-mt-28 before:border-2 before:border-black before:absolute before:left-0 before:top-0 before:ml-48 before:h-56 before:w-56 before:origin-bottom-left before:translate-x-full before:-rotate-90 after:animate-spin after:-mt-28 after:border-l-2 after:border-black after:absolute after:left-0 after:top-0 after:ml-48 after:h-56 after:w-56 after:origin-bottom-right after:translate-x-full"></div>

			<h2 data-aos="fade-in" className="font-bold text-4xl text-center md:text-left">Previous Work</h2>
			<hr />

			<div className="flex flex-wrap flex-col md:flex-row relative space-y-8 md:space-y-0 md:justify-center">
				<CaseStudy 
					name="Blennd" 
					url="https://blennd.com/" 
					img={BlenndLogo} 
					description="Through our strategy-first approach, Blennd engages with clients as subject matter experts and allies, then our team provides insights and solutions that take your brand to the next level. Once we have a rock-solid blueprint, we build a digital experience that delivers measurable results for your tech company. We focused on long-term opportunities that solve the immediate needs of today."
					bgColor=""
					darkMode={false}
					credit="Blennd"
				/>
				<CaseStudy 
					name="Kiosk" 
					url="https://kiosk.com/" 
					img={KioskLogo} 
					description="Since 1993, KIOSK has led the industry in design and manufacturing of self-service solutions. We provide highly specialized experts to surround every aspect of the project, executing personalized customer deliverables in parallel."
					bgColor="#575643"
					darkMode={true}
					credit="Blennd"
				/>
				<CaseStudy 
					name="True Finishing" 
					url="https://truefinishing.com/" 
					img={TFLogo} 
					description="At True Finishing, we’re committed to bringing you the best quality in service and products. Get the best guarantee and the highest quality of floor finishing in the Colorado Front Range and beyond."
					bgColor=""
					darkMode={false}
					credit="Via Foci"
				/>
				<CaseStudy 
					name="Sycle" 
					url="https://coc.sycle.net/" 
					img={SycleLogo} 
					description="Hearing healthcare professionals have taken the steps to provide patients with all options when it comes to hearing loss treatment."
					bgColor="#3874b5"
					darkMode={true}
					credit="Blennd"
				/>
				<CaseStudy 
					name="Renaissance Patio" 
					url="https://www.renaissancepatio.com/" 
					img={RPLogo} 
					description="Renaissance Patio, a leading company in outdoor patio covers and structures, needed a new brand identity and website that reflected their expertise and commitment to quality while attracting more customers."
					bgColor=""
					darkMode={false}
					credit="Blennd"
				/>
				<CaseStudy 
					name="Inflow" 
					url="https://inflowcx.com/" 
					img={InflowLogo} 
					description="At InflowCX, we focus on unified communications, contact center support services, and cloud consulting for businesses across the country." 
					bgColor="#002b37" 
					darkMode={true}
					credit="Blennd"
				/>
				<CaseStudy 
					name="Cain Travel" 
					url="https://caintravel.com/" 
					img={CTLogo} 
					description="Cain Travel delivers superior travel and event experiences, powered by people, service, and technology."
					bgColor=''
					darkMode={false}
					credit="Blennd"
				/>
				<CaseStudy 
					name="Western" 
					url="https://western.edu/" 
					img={WesternLogo} 
					description="At Western, students are immersed in experiential learning, guided by professors who care, in an outdoor landscape like no other."
					bgColor=''
					darkMode={false}
					credit="Blennd"
					// #a71930
				/>
			</div>
		</section>
	)
}
import Link from "next/link";

export default function Nav() {
	let navStyling = "px-6 py-4 text-2xl text-center border border-black active:bg-black active:text-white shadow-2xl overflow-hidden relative border border-black before:bg-black hover:before:animate-spin active:before:bg-white before:mt-8 before:border-2 before:border-black before:absolute before:left-0 before:-ml-4 before:h-56 before:w-56 before:origin-top-right before:-translate-x-full before:-rotate-90 hover:after:border-0 hover:after:animate-spin after:mt-8 after:border-r-2 after:border-black after:absolute after:left-0 after:-ml-4 after:h-56 after:w-56 after:origin-top-right after:-translate-x-full";
	return (
		<nav className="z-10 fixed top-0 w-full border-b border-black bg-white p-4">
			<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-between">
				<Link 
					className = "px-6 py-4 text-center border border-black shadow-2xl ease-in-out duration-300 hover:bg-black hover:text-white font-bold text-3xl text-transparent hover:bg-none hover:text-white" 
					href="/"
				>
					<span className="block relative bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text bg-300% animate-gradient">Zach Raab</span>
				</Link>
				<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
					<Link className = {navStyling} href="/resume">Resume</Link>
					<Link className = {navStyling} href="?modal=true"><button>Get in Touch!</button></Link>
				</div>
			</div>
		</nav>
	)
}
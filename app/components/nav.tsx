import Link from "next/link";

export default function Nav() {
	let navStyling = "px-3 py-2 text-center text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300";
	return (
		<nav className="z-10 fixed top-0 w-full border-b border-black bg-white p-4">
			<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-between">
				<a className = {`${navStyling} font-bold text-xl`} href="/">Zach Raab</a>
				<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
					<a className = {navStyling} href="/resume">Resume</a>
					<Link className = {navStyling} href="?modal=true"><button>Get in Touch!</button></Link>
				</div>
			</div>
		</nav>
	)
}
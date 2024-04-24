export default function Nav() {
	let navStyling = "px-3 py-2 text-center text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300";
	return (
		<nav className="bg-gray-500 p-4">
			<div className="flex items-center justify-between">
				<a className = {`${navStyling} bg-gray-500 font-bold text-xl`} href="/">Zach Raab</a>
				<div className="flex space-x-4">
					<a className = {navStyling} href="/resume">Resume</a>
					<a className = {navStyling} href="https://www.linkedin.com/in/zachary-raab-61578248/" target="_blank">LinkedIn</a>
					<a className = {navStyling} href="https://github.com/zachraab" target="_blank">GitHub</a>
				</div>
			</div>
		</nav>
	)
}
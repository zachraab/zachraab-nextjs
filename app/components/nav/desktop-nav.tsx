import Link from 'next/link'

export default function DesktopNav() {
	return(
		<nav className="z-10 fixed top-0 w-full bg-white py-4 px-40 shadow-md">
			<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center justify-between">
				<Link
					className = "px-4 py-2 font-bold text-3xl text-transparent text-center border border-black ease-in-out duration-300 hover:bg-black hover:text-white"
					href="/">
					<span className="block relative bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text bg-300% animate-gradient">Zach Raab</span>
				</Link>
				<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
					<Link 
					className="px-4 py-2 text-xl text-center border border-black ease-in-out duration-300 hover:bg-black hover:text-white overflow-hidden relative border border-black"
					href="/about">
						About
					</Link>
					<Link 
					className="px-4 py-2 text-xl text-center border border-black ease-in-out duration-300 hover:bg-black hover:text-white overflow-hidden relative border border-black"
					href="/work">
						Work
					</Link>
					<Link 
					className="px-4 py-2 text-xl text-center border border-black ease-in-out duration-300 hover:bg-black hover:text-white overflow-hidden relative border border-black"
					href="/resume">
						Resume
					</Link>
				</div>
			</div>
		</nav>
	)
}
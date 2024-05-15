"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import modalImage from "../../public/images/PXL_20220721_172734151.jpg"

function Modal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();
	let navStyling = "px-3 py-2 text-center text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300";

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-8 w-3/4 md:w-1/2">
                        <div className="flex flex-col space-y-4">
							<img className="object-cover" src={modalImage.src} alt="A lake at the base of a mountain." />
							<div className="flex justify-center space-x-4">
								<a className= {navStyling} href="mailto:zpraab@gmail.com">Email Me</a>
								<a className = {navStyling} href="https://www.linkedin.com/in/zachary-raab-61578248/" target="_blank">LinkedIn</a>
								<a className = {navStyling} href="https://github.com/zachraab" target="_blank">GitHub</a>
							</div>
								<Link href={pathname}>
									<button type="button" className="w-full p-2 bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 text-white">Close</button>
								</Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;
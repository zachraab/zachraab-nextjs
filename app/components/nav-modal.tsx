"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import modalImage from "../../public/PXL_20220721_172734151.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
// import { Suspense } from "react";

function NavModal() {

    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        <>
			
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto m-8 w-3/4 md:w-1/2">
                        <div className="relative flex flex-col space-y-4">
							<Image 
								src={modalImage.src}
								alt='A lake at the base of a mountain.'
								className="object-cover"
								width='4032'
								height='3024'
								data-aos="fade-in"
							/>
							<div className="flex justify-center space-x-4 pb-4">
								<a className="ease-in-out duration-300 px-3 py-2 text-center border border-black hover:bg-black hover:text-white" href="mailto:zpraab@gmail.com">
									<AiOutlineSend className="inline-block mr-2" />Email Me
								</a>
								<a className="text-3xl px-2 hover:bg-black hover:text-white ease-in-out duration-300" href="https://github.com/zachraab" rel="nofollow" target="_blank">
									<FaGithub className="inline-block" />
								</a> 
								<a className="text-3xl px-2 hover:bg-black hover:text-white ease-in-out duration-300 " href="https://www.linkedin.com/in/zachary-raab-61578248/" rel="nofollow" target="_blank">
									<FaLinkedin className="inline-block" />
								</a> 
							</div>
							<Link 
								href={pathname}
								style={{
									position: "absolute",
									top: "0",
									right: "0",
									margin: "0"
								}}
							>
									<i
										className="ease-in-out duration-300 hover:bg-black hover:text-white"
										style={{
											padding: "5px 10px",
											cursor: "pointer",
											fontSize: "24px",
											fontFamily: "sans-serif",
											fontStyle: "normal",
											lineHeight: "1",
										}}
									>
										x
									</i>
							</Link>
                        </div>
                    </div>
                </dialog>
            }			
        </>
    );
}

export default NavModal;
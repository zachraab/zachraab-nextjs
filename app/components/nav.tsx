'use client';

import {useEffect, useState} from 'react';
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
import { useIsClient } from './is-client-ctx';

// credit: https://bobbyhadz.com/blog/react-get-window-width-height

export default function Nav() {
	const isClient = useIsClient();
	// const [windowSize, setWindowSize] = useState(getWindowSize());
	
	function getWindowSize() {
		// if (isClient) {
			// const {innerWidth} = window;
			// return {innerWidth};
		// }
	}

	useEffect(() => {
		function handleWindowResize() {
			// setWindowSize(getWindowSize() );
		}
	
		// window.addEventListener('resize', handleWindowResize);
	
		// return () => {
		// 	window.removeEventListener('resize', handleWindowResize);
		// };
	}, []);

	return (
		<> 
			{/* {windowSize.innerWidth > 767 ? <DesktopNav /> : <MobileNav />} */}
		</>
	)
}
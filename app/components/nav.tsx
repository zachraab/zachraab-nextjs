'use client';

import {useEffect, useState} from 'react';
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
import { useIsClient } from './is-client-ctx';

// credit: https://bobbyhadz.com/blog/react-get-window-width-height

export default function Nav() {
	const isClient = useIsClient();
	const [windowSize, setWindowSize] = useState<any>(800);
	
	useEffect(() => {
		function getWindowSize() {
			// if (isClient) {
				const {innerWidth} = window;
				return {innerWidth};
			// }
		}
		setWindowSize(getWindowSize())

		function handleWindowResize() {
			setWindowSize(getWindowSize() );
		}
	
		window.addEventListener('resize', handleWindowResize);
	
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<> 
			{windowSize?.innerWidth < 992 ? <MobileNav /> : <DesktopNav />}
		</>
	)
}
import * as React from 'react';
import Link from 'next/link'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MailIcon from '@mui/icons-material/Mail';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MobileNav() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	let pageItems = [
		{ text: 'Home', route: '/' }, 
		{ text: 'About', route: '/about' },
		{ text: 'Resume', route: '/resume' }
	];

	let socialItems = [
		{ text: 'Send email', route: 'mailto:zpraab@gmail.com' }, 
		{ text: 'GitHub', route: 'https://github.com/zachraab' }, 
		{ text: 'LinkedIn', route: 'https://www.linkedin.com/in/zachary-raab-61578248/' }
	];

	const DrawerList = (
		<Box sx={{ width: 250, color: 'black' }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				{pageItems.map((item, index) => (
					<Link key={index} href={item.route}>
						<ListItem key={item.text}>
							<ListItemButton>
								<ListItemIcon sx={{ color: 'black' }}>
									{ index === 0 ? <HomeIcon /> : <TextSnippetIcon /> }
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				{socialItems.map((item, index) => (
					<Link key={index} href={item.route} target="_blank" rel="nofollow">
						<ListItem key={item.text}>
							<ListItemButton>
								<ListItemIcon sx={{ color: 'black' }}>
									{ index === 0 ? ( <MailIcon /> ) : index === 1 ? ( <FaGithub className="text-2xl"/> ) : index === 2 ? <FaLinkedin className="text-2xl"/> : null }
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</Box>
	);

	return (
		<nav className="z-10 fixed top-0 flex justify-end w-full bg-white">
			<Button sx={{ color: 'black', height: 64 }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</nav>
	);
}
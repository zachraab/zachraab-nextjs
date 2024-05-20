'use client';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
		border: `1px solid ${theme.palette.divider}`,
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&::before': {
			display: 'none',
		},
	}
));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
	))(({ theme }) => ({
		backgroundColor: 'white',
		flexDirection: 'row-reverse',
		'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
			transform: 'rotate(90deg)',
		},
		'& .MuiAccordionSummary-content': {
			marginLeft: theme.spacing(1),
		},
	}
));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ContinuedLearning() {
	const [expanded, setExpanded] = useState<string | false>();

const handleChange =
	(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

let accordionItems = [
	{ summary: 'GSAP', details: 'GSAP seems like a lot of fun, I really enjoy the creative potential it gives to the developer.' },
	{ summary: 'Parallax', details: <a className="font-bold hover:underline" href="https://dixonandmoe.com/rellax/">Click here!</a> },
	{ summary: 'Physics based interactive designs', details: 'Websites have a lot of opportunity for exciting UI interaction that resemble a movie or a video game. I love that the user can explore the website in whatever way suits them!' },
	{ summary: 'The Canvas Element!', details: <a className="font-bold hover:underline" href="https://dev.to/uuuuuulala/coding-an-interactive-and-damn-satisfying-cursor-7-simple-steps-2kb-of-code-1c8b">idea</a> },
]

  return (
	<section className="relative text-center md:text-left bg-gray-100">
		<h2 className="font-bold text-4xl">Continued Learning</h2>
			<hr />
		<p>Here are some topics and technologies that I&apos;m excited to learn more about!</p>
			<br/>
		<div>
			{accordionItems.map((item, index) => (
				<Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
					<AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
						<Typography>{item.summary}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							{item.details}
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	</section>
	);
}
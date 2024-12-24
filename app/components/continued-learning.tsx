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
	{ 
		summary: 'React', 
		details: 'As a developer in the field, my primary goal is to master the fundamental building blocks of development in React. Regardless of complexity, any problem can be deconstructed into smaller, more manageable components. By employing best practices, I can navigate even the most intricate challenges with ease.'
	},
	{ 
		summary: 'Next.js', 
		details: 'So far, this framework has significantly boosted my react development progress, and I am eager to explore it further.' 
	},
	{ 
		summary: 'Interactive UI', 
		details: 'Websites have a lot of opportunity for exciting UI interaction. I love that the user can explore the website in whatever way suits them! Incorporating dynamic tools like GSAP and Parallax make the experience feel more meaningful.' 
	},
]

  return (
	<section className="relative text-center md:text-left bg-gray-100">
		<h2 className="font-bold text-4xl">Continued Learning</h2>
			<hr />
		<p>I am enthusiastic about delving into these topics and technologies to expand my knowledge!</p>
			<br/>
		<div className='lg:w-3/4 xl:w-1/2'>
			{accordionItems.map((item, index) => (
				<Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
					<AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
						<Typography>{item.summary}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div className='m-auto py-8 w-3/4'>
							<Typography>
								{item.details}
							</Typography>
						</div>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	</section>
	);
}
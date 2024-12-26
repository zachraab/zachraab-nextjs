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

export default function SkillsAccordion() {
	const [expanded, setExpanded] = useState<string | false>();

const handleChange =
	(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

let accordionItems = [
	{ 
		summary: 'Frontend Development', 
		details: 'HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Boostrap'
	},
	{ 
		summary: 'Backend Development', 
		details: 'Node.js, Express.js, PHP, APIs, MySQL, MongoDB' 
	},
	{ 
		summary: 'Tools and Platforms', 
		details: 'Git, Docker, Postman, CI/CD, SFTP, WordPress, Vercel' 
	},
]

  return (
	<section className="relative text-center md:text-left bg-gray-100">
		<h2 className="font-bold text-4xl">Skills</h2>
			<hr />
		<div className='lg:w-3/4 xl:w-1/2'>
			{accordionItems.map((item, index) => (
				<Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
					<AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
						<Typography>{item.summary}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div className='m-auto py-8 w-3/4'>
							<Typography>
								{item.details.split(', ').map( list => <li>{list}</li> )}
							</Typography>
						</div>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	</section>
	);
}
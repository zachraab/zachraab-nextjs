'use client';
import Skill from './skill';
import Headline from '../headline';
import {logos, accordionItems} from './skills-accordion-data';
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

  return (
	<section className="relative bg-gray-100">
		<Headline content="Technology" />
		<div data-aos="fade-in">
			{accordionItems.map((item, index) => (
				<Accordion key={`accordion-${index}`} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
					<AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
						<Typography>{item.summary}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div className='flex flex-wrap justify-center'>
							{logos.map((logo: any, index: number) => ( 
								( logo.type === item.summary.toLowerCase()) ? (
									<Skill key={`skill-${index}`} source={logo.source} name={logo.name} mode={logo.mode}/>
								) : null
							))}
						</div>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	</section>
	);
}
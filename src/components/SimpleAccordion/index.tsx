import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export function AccordionRoot({ children, ...props }: React.ComponentProps<typeof Accordion>) {

    const [expanded, setExpanded] = useState(true);

    function handleExpander() {
        if (expanded == true) {
            setExpanded(false)
        } else {
            setExpanded(true)
        }
    }

    return (

        <Accordion expanded={expanded} onChange={handleExpander}{...props}>
            {children}
        </Accordion>

    );
}

export function AccordionTitle({ children, ...props }: React.ComponentProps<typeof AccordionSummary>) {
    return (
        <AccordionSummary {...props} expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            {children}
        </AccordionSummary>
    )
}

export function AccordionContent({ children, ...props }: React.ComponentProps<typeof AccordionDetails>) {
    return (
        <AccordionDetails {...props}>
            {children}
        </AccordionDetails>
    )
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function HelpContainer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: '1',
      heading: 'Delivery Costs',
      secondaryHeading: '',
      details: 'Our costs are .... we deliver to these area....',
    },
    {
      id: '2',
      heading: 'Returns',
      secondaryHeading: '',
      details:
        ' Please visit the my account section where you can mark an order for returning, and print a label. ',
    },
    {
      id: '3',
      heading: 'Another FAQ',
      secondaryHeading: 'Subheadings are possible',
      details: 'These would be loaded from a database of questions / answers',
    },
    {
      id: '4',
      heading: 'More Help',
      secondaryHeading: '',
      details: 'etc...',
    },
  ];

  return (
    <div className={classes.root}>
      {data.map((accordion) => {
        const { id, heading, secondaryHeading, details } = accordion;
        return (
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography className={classes.heading}>{heading}</Typography>
              <Typography className={classes.secondaryHeading}>
                {secondaryHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

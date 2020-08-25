import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextMessage } from '../../lang/TextMessage';
import { GeneralMedicalFeatures } from './medicalConsultation/GeneralMedicalFeatures';
import { AddEvolution } from './medicalConsultation/AddEvolution';
import { EvolutionHistory } from './medicalConsultation/EvolutionHistory';

export const MedicalConsultation = (props: any) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <h3>
            <strong>
              {TextMessage(
                'dashboard-professional.patient-general-consultation'
              )}
            </strong>
          </h3>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails className='w-full'>
          <GeneralMedicalFeatures />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <h3>
            <strong>
              {TextMessage(
                'dashboard-professional.patient-specialty-consultation'
              )}
            </strong>
          </h3>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <AddEvolution />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <h3>
            <strong>
              {TextMessage('dashboard-professional.patient-specialty-history')}
            </strong>
          </h3>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <EvolutionHistory />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

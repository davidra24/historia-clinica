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
  const [expanded, setExpanded] = React.useState<string | false>(
    'panelGeneral'
  );

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === 'panelGeneral'}
        onChange={handleChange('panelGeneral')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panelGeneralbh-content'
          id='panelGeneralbh-header'
        >
          <h3 className='font-bold text-xl'>
            <>
              {TextMessage(
                'dashboard-professional.patient-general-consultation'
              )}
            </>
          </h3>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails className='w-full'>
          <GeneralMedicalFeatures />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panelConsultation'}
        onChange={handleChange('panelConsultation')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panelConsultationbh-content'
          id='panelConsultationbh-header'
        >
          <h3 className='font-bold text-xl'>
            <>
              {TextMessage(
                'dashboard-professional.patient-specialty-consultation'
              )}
            </>
          </h3>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <AddEvolution />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'PanelHistory'}
        onChange={handleChange('PanelHistory')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='PanelHistorybh-content'
          id='PanelHistorybh-header'
        >
          <h3 className='font-bold text-xl'>
            <>
              {TextMessage('dashboard-professional.patient-specialty-history')}
            </>
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

import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextMessage } from '../../lang/TextMessage';
import { GeneralMedicalFeatures } from './medicalConsultation/GeneralMedicalFeatures';
import { AddEvolution } from './medicalConsultation/AddEvolution';
import { EvolutionHistory } from './medicalConsultation/EvolutionHistory';
import { IViewQueries } from '../../data/IViewQueries';
import { IViewGeneralFeatures } from '../../data/IViewGeneralFeatures';
import { propsMedicalConsultation } from '../../data/propsFeatures';
import { IStore } from '../../redux/types';
import { useSelector } from 'react-redux';
import {
  HTTP_VIEW_CONSULT_GENERAL,
  HTTP_VIEW_CONSULT_PERSON_SPECIALTY,
} from '../../util/constants';
import { getOneOrMany } from '../../util/httpUtil';
import { Loading } from '../Loading';

export const MedicalConsultation = ({
  readOnly,
  patient,
  specialtyId,
}: propsMedicalConsultation) => {
  const [expanded, setExpanded] = React.useState<string | false>(
    'panelGeneral'
  );
  const token: string = useSelector((state: IStore) => state.token);
  const [loading, setLoading] = useState(false);
  const [infoGeneral, setInfoGeneral] = useState<IViewGeneralFeatures | any>(
    null
  );
  const [infoQueries, setInfoQueries] = useState<Array<IViewQueries>>([]);

  useEffect(() => {
    getInfoConsult(patient.document, token);
  }, []);

  const getInfoConsult = async (document: string, token: string) => {
    setLoading(true);
    const [infoGeneralView, infoQueriesView] = await Promise.all([
      getOneOrMany<IViewGeneralFeatures>(
        HTTP_VIEW_CONSULT_GENERAL,
        document,
        token
      ),
      getOneOrMany<Array<IViewQueries>>(
        HTTP_VIEW_CONSULT_PERSON_SPECIALTY,
        document,
        token,
        specialtyId
      ),
    ]);
    if (infoGeneralView) {
      const { ok, data } = infoGeneralView;
      if (ok) {
        console.log('data', data);

        setInfoGeneral(data);
      }
    }
    if (infoQueriesView) {
      const { ok, data } = infoQueriesView;
      if (ok) {
        setInfoQueries(data);
      }
    }
    setLoading(false);
  };

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              <GeneralMedicalFeatures
                infoGeneral={infoGeneral}
                readOnly={readOnly}
              />
            </AccordionDetails>
          </Accordion>
          {!readOnly && (
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
          )}
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
                  {TextMessage(
                    'dashboard-professional.patient-specialty-history'
                  )}
                </>
              </h3>
            </AccordionSummary>
            <Divider></Divider>
            <AccordionDetails>
              <EvolutionHistory infoQueries={infoQueries} />
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </>
  );
};

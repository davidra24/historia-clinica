import React from 'react';
import { TextMessage } from '../../../lang/TextMessage';
import { IViewQueries } from '../../../data/IViewQueries';
import { AnotationModal } from './AnotationModal';
import { toRedableDate } from '../../../util/Util';

interface propsHistory {
  infoQueries: Array<IViewQueries>;
}

export const EvolutionHistory = ({ infoQueries }: propsHistory) => {
  return (
    <>
      <div className='flex flex-col justify-center w-full p-8'>
        <p className='text-lg text-center font-semibold'>
          {TextMessage('dashboard-health.professional-history')}
        </p>
        <div className='flex flex-row w-full justify-center items-center'>
          <div className='flex flex-wrap w-full h-full justify-around'>
            {infoQueries
              .sort(
                (a: IViewQueries, b: IViewQueries) =>
                  new Date(b.query_date).getTime() -
                  new Date(a.query_date).getTime()
              )
              .map((consult: IViewQueries) => (
                <AnotationModal
                  readOnly
                  titleCard={toRedableDate(consult.query_date)}
                  valueAnnotation={consult.query_annotation}
                  buttonText={TextMessage(
                    'dashboard-health.professional-openAnotation'
                  )}
                  onSaveAnnotation={() => {}}
                  saveText={TextMessage(
                    'evolution.generalfeature-save-or-update'
                  )}
                ></AnotationModal>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

import React from 'react';
import { TextMessage } from '../../../lang/TextMessage';
import { IViewQueries } from '../../../data/IViewQueries';
import { AnotationModal } from './AnotationModal';
import { toRedableDate } from '../../../util/Util';
import { IGNORE_EVOLUTION } from '../../../util/constants';

interface propsHistory {
  infoQueries: Array<IViewQueries>;
}

export const EvolutionHistory = ({ infoQueries }: propsHistory) => {
  return (
    <>
      <div className='flex flex-col justify-center w-full p-8'>
        <p className='text-base text-center font-semibold'>
          {TextMessage('dashboard-health.professional-history')}
        </p>
        <div className='flex flex-row w-full justify-center items-center'>
          {infoQueries.length !== 0 ? (
            <div className='flex flex-wrap w-full h-full justify-around'>
              {infoQueries
                .sort(
                  (a: IViewQueries, b: IViewQueries) =>
                    new Date(b.query_date).getTime() -
                    new Date(a.query_date).getTime()
                )
                .map(
                  (consult: IViewQueries) =>
                    consult.query_annotation !== IGNORE_EVOLUTION && (
                      <AnotationModal
                        key={consult.query_annotation}
                        readOnly
                        disableButton
                        isCallback
                        titleCard={toRedableDate(consult.query_date)}
                        annotation={consult.query_annotation}
                        buttonText={TextMessage(
                          'dashboard-health.professional-openAnotation'
                        )}
                        onSaveAnnotation={() => {}}
                        saveText={TextMessage(
                          'evolution.generalfeature-save-or-update'
                        )}
                        subTitleCard={consult.name_center}
                      ></AnotationModal>
                    )
                )}
            </div>
          ) : (
            <h4 className='text-lg text-center font-semibold text-gray-700 mt-12'>
              {TextMessage('dashboard-health.professional-no-history')}
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

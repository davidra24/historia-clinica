import React from 'react';
import { TextMessage } from '../../../lang/TextMessage';
import { AnotationModal } from './AnotationModal';

export const AddEvolution = () => {
  return (
    <>
      <div className='flex justify-center w-full'>
        <AnotationModal
          titleCard={TextMessage('evolution.anotation-add')}
          valueAnnotation={''}
          buttonText={TextMessage(
            'dashboard-health.professional-openAnotation'
          )}
          onSaveAnnotation={() => {}}
          saveText={TextMessage('evolution.generalfeature-save-or-update')}
        ></AnotationModal>
      </div>
    </>
  );
};

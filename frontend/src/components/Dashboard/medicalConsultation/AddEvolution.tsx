import React from 'react';
import { TextMessage } from '../../../lang/TextMessage';
import { AnotationModal } from './AnotationModal';
import { useQuillValue } from '../../../hooks/useInput';

interface propsEvolution {
  makeQuery: any;
}

export const AddEvolution = ({ makeQuery }: propsEvolution) => {
  const annotation = useQuillValue('');

  return (
    <>
      <div className='flex justify-center w-full'>
        <AnotationModal
          titleCard={TextMessage('evolution.anotation-add')}
          annotation={annotation}
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

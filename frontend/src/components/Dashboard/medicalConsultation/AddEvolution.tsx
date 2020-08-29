import React from 'react';
import { TextMessage } from '../../../lang/TextMessage';
import { AnotationModal } from './AnotationModal';
import { useQuillValue } from '../../../hooks/useInput';
import { HTTP_QUERIES } from '../../../util/constants';
import { post } from '../../../util/httpUtil';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../redux/types';
import { useAlert } from '../../../hooks/useAlert';

interface propsEvolution {
  makeQuery: any;
  setLoading: Function;
  getConsultHistory: any;
  onHistoryResponse: any;
  document: any;
}

export const AddEvolution = ({
  makeQuery,
  setLoading,
  getConsultHistory,
  onHistoryResponse,
  document,
}: propsEvolution) => {
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);
  const token: string = useSelector((state: IStore) => state.token);
  const annotation = useQuillValue('');
  const handleSubmit = async () => {
    setLoading(true);
    const query = makeQuery(annotation.value);
    const response = await post<string>(HTTP_QUERIES, { query }, token);
    if (response) {
      const { ok, data, message } = response;
      if (ok) {
        const infoQueriesView = await getConsultHistory(document, token);
        onHistoryResponse(infoQueriesView);
        alert('evolution.success-title', 'evolution.success-body', 'success');
      } else {
        alert('evolution.error-title', 'evolution.erro-body', 'error');
      }
    } else {
      alert('evolution.error-title', 'app.not-server', 'error');
    }
    setLoading(false);
  };

  return (
    <>
      <div className='flex justify-center w-full'>
        <AnotationModal
          titleCard={TextMessage('evolution.anotation-add')}
          annotation={annotation}
          buttonText={TextMessage(
            'dashboard-health.professional-openAnotation'
          )}
          onSaveAnnotation={handleSubmit}
          saveText={TextMessage('evolution.generalfeature-save-or-update')}
        ></AnotationModal>
      </div>
    </>
  );
};

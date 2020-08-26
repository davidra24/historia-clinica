import React, { useEffect, useState } from 'react';
import {
  HTTP_VIEW_CONSULT_GENERAL,
  HTTP_VIEW_CONSULT_PERSON,
} from '../../util/constants';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { IStore } from '../../redux/types';
import { IPerson } from '../../data/IPerson';
import { IViewGeneralFeatures } from '../../data/IViewGeneralFeatures';
import { IViewQueries } from '../../data/IViewQueries';
import { getOneOrMany } from '../../util/httpUtil';
import { Loading } from '../../components/Loading';
import { CardConsultInfoPatient } from '../../components/Dashboard/medicalConsultation/CardConsultInfoPatient';
import { MedicalConsultation } from '../../components/Dashboard/MedicalConsultation';

export const SpecialtiesPatient = () => {
  const person: IPerson = useSelector((state: IStore) => state.person);

  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const [loading, setLoading] = useState(false);
  const [infoGeneral, setInfoGeneral] = useState<IViewGeneralFeatures | any>(
    null
  );
  const [infoQueries, setInfoQueries] = useState<Array<IViewQueries>>([]);

  useEffect(() => {
    getInfoConsult(person.document, cookie.token);
  }, []);

  const getInfoConsult = async (id: string, token: string) => {
    setLoading(true);
    const [infoGeneralView, infoQueriesView] = await Promise.all([
      getOneOrMany<IViewGeneralFeatures>(HTTP_VIEW_CONSULT_GENERAL, id, token),
      getOneOrMany<Array<IViewQueries>>(HTTP_VIEW_CONSULT_PERSON, id, token),
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col w-full'>
          <div className='flex justify-center w-full'>
            <CardConsultInfoPatient patient={person} />
          </div>
          <div className='flex justify-center w-full'>
            <div className='mt-16 mr-auto ml-auto w-full md:w-11/12'>
              <MedicalConsultation
                infoGeneral={infoGeneral}
                infoQueries={infoQueries}
                readOnly={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

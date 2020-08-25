import React, { useEffect, useState } from 'react';
import { IStore } from '../../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderWelcomePerson } from '../../components/Dashboard/HeaderWelcomePerson';
import { getOneOrMany } from '../../util/httpUtil';
import { HTTP_VIEW_AC_BY_PS } from '../../util/constants';
import { useCookies } from 'react-cookie';
import { IViewAttentionCenter } from '../../data/IViewAttentionCenter';
import {
  setViewAttenttionCenter,
  setOneCenterAttention,
} from '../../redux/actions';
import { Loading } from '../../components/Loading';
import { CardSpecialty } from '../../components/Dashboard/CardSpecialty';
import { NoSpecialties } from '../../components/Dashboard/NoSpecialties';
import { AttentionPatient } from '../../pages/AttentionPatient';
import { MedicalConsultation } from '../../components/Dashboard/MedicalConsultation';

export const DashBoardProfessional = () => {
  const person = useSelector((state: IStore) => state.person);
  const viewAttentionCenter = useSelector(
    (state: IStore) => state.viewAttentionCenter
  );
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (viewAttentionCenter.length === 0) {
      getViewAttentionCenter();
    }
  }, []);

  const getViewAttentionCenter = async () => {
    setLoading(true);
    const { token } = cookie;
    const { document } = person;
    const response = await getOneOrMany<Array<IViewAttentionCenter>>(
      HTTP_VIEW_AC_BY_PS,
      document,
      token
    );
    if (response) {
      console.log(response);
      const { ok, data } = response;
      if (ok) {
        dispatch(setViewAttenttionCenter(data));
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className='flex flex-col h-full'>
        <HeaderWelcomePerson
          person={person}
          principalTitle='dashboard-professional.specialties'
          principalDescription='dashboard-professional.specialties-description'
          ourPriority='dashboard-professional.specialties-description-end'
        />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className='flex flex-wrap mt-4 justify-center'>
              {viewAttentionCenter.length !== 0 ? (
                viewAttentionCenter.map((attentionCenter) => (
                  <CardSpecialty
                    key={`${attentionCenter.id_health_center}-${attentionCenter.document_health_professional}`}
                    id={attentionCenter.specialty_id}
                    name={attentionCenter.specialty_name}
                    description={attentionCenter.specialty_description}
                    linkTo={'attention'}
                    healtCenter={attentionCenter.health_center_name}
                    onClick={() =>
                      dispatch(setOneCenterAttention(attentionCenter))
                    }
                  />
                ))
              ) : (
                <NoSpecialties isHealthProfessional />
              )}
            </div>
            {/* <div className='mt-16 mr-auto ml-auto w-screen md:w-11/12'>
              <MedicalConsultation />
              </div>*/}
          </>
        )}
      </div>
    </>
  );
};

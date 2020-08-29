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
import { useHistory } from 'react-router';
import { Layout } from '../../components/App/Layout';

export const DashBoardProfessional = () => {
  const person = useSelector((state: IStore) => state.person);
  const viewAttentionCenter = useSelector(
    (state: IStore) => state.viewAttentionCenter
  );
  const token: string = useSelector((state: IStore) => state.token);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (viewAttentionCenter.length === 0) {
      getViewAttentionCenter();
    }
  }, []);

  const getViewAttentionCenter = async () => {
    setLoading(true);
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
      <Layout
        title={'app.dashboard-title'}
        name={` ${person.first_name} ${person.last_name}`}
        subtitle={'app.dashboard-subtitle'}
      >
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
                      name={attentionCenter.specialty_name}
                      description={attentionCenter.specialty_description}
                      healtCenter={attentionCenter.health_center_name}
                      active={attentionCenter.active_attention_center}
                      onClick={() => {
                        if (attentionCenter.active_attention_center) {
                          dispatch(setOneCenterAttention(attentionCenter));
                          history.push('attention');
                        }
                      }}
                    />
                  ))
                ) : (
                  <NoSpecialties isHealthProfessional />
                )}
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

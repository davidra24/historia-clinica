import React, { useState, useEffect } from 'react';
import { IStore } from '../../redux/types';
import { setSpecialties } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { TextMessage } from '../../lang/TextMessage';
import { Loading } from '../../components/Loading';
import { useCookies } from 'react-cookie';
import { get } from '../../util/httpUtil';
import { HTTP_SPECIALTIES } from '../../util/constants';
import { ISpecialty } from '../../data/ISpecialty';
import { Card, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IPerson } from '../../data/IPerson';
import { HeaderWelcomePerson } from '../../components/Dashboard/HeaderWelcomePerson';

export const DashBoardPatient = () => {
  const person: IPerson = useSelector((state: IStore) => state.person);
  const specialties: Array<ISpecialty> = useSelector(
    (state: IStore) => state.specialties
  );
  const dispatch = useDispatch();
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (specialties.length === 0) {
      getSpecialties();
    }
  }, []);

  const getSpecialties = async () => {
    setLoading(true);
    const { token } = cookie;
    const response = await get<Array<ISpecialty>>(HTTP_SPECIALTIES, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setSpecialties(data));
      } else {
      }
    } else {
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col h-full'>
          <HeaderWelcomePerson
            person={person}
            principalTitle='dashboard-patient.specialties'
            principalDescription='dashboard-patient.specialties-description'
            ourPriority='dashboard-patient.specialties-description-end'
          />
          <div className='flex flex-wrap mt-4 justify-center'>
            {specialties.length > 0 ? (
              specialties
                .sort((a: ISpecialty, b: ISpecialty) =>
                  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                )
                .map((specialty: ISpecialty) => (
                  <Card
                    key={specialty.id}
                    className='flex flex-col w-full md:w-5/12 lg:w-3/12 min-h-40 max-h-full rounded-full m-4 p-2'
                  >
                    <Link to={`specialty/${specialty.id}`}>
                      <div className='flex flex-col p-4'>
                        <h2 className='text-lg text-center mb-2'>
                          <strong>{specialty.name}</strong>
                        </h2>
                        <div className='flex justify-center'>
                          <Divider className='w-10/12' />
                        </div>
                        <p className='flex text-sm text-justify m-2 items-center text-gray-600'>
                          {specialty.description}
                        </p>
                      </div>
                    </Link>
                  </Card>
                ))
            ) : (
              <>
                <h3 className='text-xl text-center mt-4'>
                  <strong>
                    {TextMessage('dashboard-patient.no-specialties')}
                  </strong>
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

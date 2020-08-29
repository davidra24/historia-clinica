import React from 'react';
import { Card, Divider, Button } from '@material-ui/core';
import { IStore } from '../../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { DashBoardProfessional } from './DashBoardProfessional';
import { DashBoardPatient } from './DashBoardPatient';
import { TextMessage } from '../../lang/TextMessage';
import { selectDashboardProfessional } from '../../redux/actions';
import { Layout } from '../../components/App/Layout';
import { IPerson } from '../../data/IPerson';

export const DashboardSelection = () => {
  const selectedDashProfessional = useSelector(
    (state: IStore) => state.selectedDashProfessional
  );
  const person: IPerson = useSelector((state: IStore) => state.person);
  const dispatch = useDispatch();
  return (
    <>
      <Layout title={'app.selection-title'} subtitle={'app.selection-subtitle'}>
        {selectedDashProfessional === 0 ? (
          <div className='flex flex-col w-full'>
            <h2 className='text-4xl font-semibold text-center mb-4'>
              {person &&
                (Number(person.genre) === 1
                  ? TextMessage('app.welcomeM')
                  : Number(person.genre) === 2
                  ? TextMessage('app.welcomeF')
                  : Number(person.genre) === 3
                  ? TextMessage('app.welcomeO')
                  : TextMessage('app.welcome'))}
              <p className='font-bold'>
                {person &&
                  ` ${person.first_name} ${
                    person.second_name ? person.second_name : ''
                  } ${person.last_name} ${
                    person.last_second_name ? person.last_second_name : ''
                  }`}
              </p>
            </h2>
            <div className='flex justify-center'>
              <Divider className='w-12/12 md:w-6/12' />
            </div>
            <div className='flex w-full justify-center'>
              <Card className='flex flex-col mt-4 w-11/12 md:w-9/12 lg:w-7/12 p-20'>
                <h3 className='text-xl text-center'>
                  {TextMessage('dashboard-professional.selection')}
                </h3>
                <div className='flex flex-col md:flex-row items-center md:justify-around py-2 mt-8'>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={() => dispatch(selectDashboardProfessional(1))}
                  >
                    {TextMessage('dashboard-professional.select-patient')}
                  </Button>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={() => dispatch(selectDashboardProfessional(2))}
                  >
                    {TextMessage('dashboard-professional.select-prof')}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        ) : selectedDashProfessional === 1 ? (
          <DashBoardPatient />
        ) : (
          <DashBoardProfessional />
        )}
      </Layout>
    </>
  );
};

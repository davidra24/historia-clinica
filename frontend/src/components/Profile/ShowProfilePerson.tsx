import React from 'react';
import { profilePersonShowTypes } from '../../data/profileTypes';
import { Button, MenuItem } from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { DEFAULT_PROFILE_PIC } from '../../util/constants';

export const ShowProfilePerson = ({
  setShow,
  EPSName,
  ProfessionName,
  person,
  handleSubmit,
  speacialtyName,
}: profilePersonShowTypes) => (
  <>
    <div className='flex justify-center items-center w-10/12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-20'>
          <div className='px-6'>
            {setShow !== undefined && (
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                  <div className=''>
                    <img
                      alt={person.document}
                      src={person.photo || DEFAULT_PROFILE_PIC}
                      className='shadow-xl rounded-full h-auto align-middle border-none absolute w-24 -m-16 -ml-20 lg:-ml-16'
                    />
                  </div>
                </div>
              </div>
            )}
            <div className='text-center mt-12'>
              <h3 className='text-4xl font-semibold leading-normal mb-2 text-gray-800'>
                {`${person.first_name} ${
                  person.second_name ? person.second_name : ''
                } ${person.last_name} ${
                  person.last_second_name ? person.last_second_name : ''
                }`}
              </h3>
              <div className='text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase'>
                <i className='fas fa-map-marker-alt mr-2 text-lg text-gray-500'></i>{' '}
                {person.document}
              </div>
            </div>
            {setShow === undefined && (
              <div className='flex flex-col justify-center w-full'>
                <h4 className='text-center text-lg font-semibold text-gray-700'>
                  {speacialtyName}
                </h4>
                <div className='flex justify-center w-full pt-2'>
                  <Button
                    className='w-6/12'
                    variant='outlined'
                    color='primary'
                    onClick={handleSubmit}
                  >
                    {TextMessage('infoProfessional.assign-specialty')}
                  </Button>
                </div>
              </div>
            )}
            <div className='mt-10 py-10 border-t border-gray-300 text-center'>
              <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-1 text-lg leading-relaxed'>
                    <strong>{TextMessage('profile.email')}</strong>
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                    {person.email}
                  </p>
                </div>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-1 text-lg leading-relaxed'>
                    <strong>{TextMessage('profile.phone')}</strong>
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                    {person.phone}
                  </p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-1 text-lg leading-relaxed'>
                    <strong>{TextMessage('profile.genre')}</strong>
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                    {person.genre == 1
                      ? TextMessage('register.form-GenreM')
                      : person.genre == 2
                      ? TextMessage('register.form-GenreF')
                      : person.genre == 3
                      ? TextMessage('register.form-GenreO')
                      : ''}
                  </p>
                </div>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-1 text-lg leading-relaxed'>
                    <strong>{TextMessage('profile.civil-state')}</strong>
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                    {person.civil_state == 'S'
                      ? TextMessage('register.form-CivilStateS')
                      : person.civil_state == 'C'
                      ? TextMessage('register.form-CivilStateC')
                      : person.civil_state == 'D'
                      ? TextMessage('register.form-CivilStateD')
                      : person.civil_state == 'V'
                      ? TextMessage('register.form-CivilStateV')
                      : person.civil_state == 'U'
                      ? TextMessage('register.form-CivilStateU')
                      : ''}
                  </p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-1 text-lg leading-relaxed'>
                    <strong>{TextMessage('profile.dateBirth')}</strong>
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                    {person.date_birth.toString().substring(8, 10) +
                      '/' +
                      person.date_birth.toString().substring(5, 7) +
                      '/' +
                      person.date_birth.toString().substring(0, 4)}
                  </p>
                </div>

                <div className='w-full lg:w-9/12 px-4'>
                  <p className='mb-1 text-lg leading-relaxed'>
                    <strong>{TextMessage('profile.stratum')}</strong>
                  </p>
                  <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                    {person.stratum}
                  </p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                {EPSName !== undefined && (
                  <div className='w-full lg:w-9/12 px-4'>
                    <p className='mb-1 text-lg leading-relaxed'>
                      <strong>{TextMessage('profile.eps')}</strong>
                    </p>
                    <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                      {EPSName}
                    </p>
                  </div>
                )}
                {ProfessionName !== undefined && (
                  <div className='w-full lg:w-9/12 px-4'>
                    <p className='mb-1 text-lg leading-relaxed'>
                      <strong>{TextMessage('profile.profession')}</strong>
                    </p>
                    <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                      {ProfessionName}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className='flex justify-center mb-8'>
              {setShow !== undefined && (
                <Button
                  className='w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12'
                  variant='outlined'
                  color='primary'
                  onClick={() => setShow(false)}
                >
                  {TextMessage('profile.edit-button')}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

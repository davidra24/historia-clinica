import React, { useState, useEffect } from 'react';
import { profileHealthCenterShowTypes } from '../../data/healthCenters';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../redux/types';
import { IHealthCareCenter } from '../../data/IHealthCareCenter';
import { Loading } from '../Loading';
import { TextMessage } from '../../lang/TextMessage';
import { useHistory } from 'react-router';
import { getOneOrMany } from '../../util/httpUtil';
import { Button } from '@material-ui/core';

export const ShowProfileHealthCenter = ({
  setShow,
}: profileHealthCenterShowTypes) => {
  const [cookie] = useCookies(['token']);
  const healthCareCenter: IHealthCareCenter = useSelector(
    (state: IStore) => state.healthCenter
  );
  const [token, setToken] = useState(cookie.token);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const history = useHistory();

  return (
    <>
      {loading ? (
        <div className='h-screen flex opacity-100'>
          <Loading />
        </div>
      ) : (
        <div className='flex justify-center items-center w-10/12'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-20'>
              <div className='px-6'>
                <div className='text-center mt-12'>
                  <h3 className='text-4xl font-semibold leading-normal mb-2 text-gray-800'>
                    {healthCareCenter.name}
                  </h3>
                </div>
                <div className='mt-10 py-10 border-t border-gray-300 text-center'>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.website')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {healthCareCenter.website}
                      </p>
                    </div>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.email')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {healthCareCenter.email}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.phone')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {healthCareCenter.phone}
                      </p>
                    </div>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.direction')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {healthCareCenter.direction}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.description')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {healthCareCenter.description}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-center md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <Button>EDITAR</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

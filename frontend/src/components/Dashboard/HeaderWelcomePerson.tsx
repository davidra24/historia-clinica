import React from 'react';
import { Divider } from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { IHeaderWelcome } from '../../data/IHeaderWelcome';

export const HeaderWelcomePerson = ({
  person,
  principalTitle,
  principalDescription,
  ourPriority,
}: IHeaderWelcome) => (
  <>
    <h2 className='text-2xl text-center mb-4'>
      {person &&
        (Number(person.genre) === 1
          ? TextMessage('app.welcomeM')
          : Number(person.genre) === 2
          ? TextMessage('app.welcomeF')
          : Number(person.genre) === 3
          ? TextMessage('app.welcomeO')
          : TextMessage('app.welcome'))}
      <strong>
        {person &&
          ` ${person.first_name} ${
            person.second_name ? person.second_name : ''
          } ${person.last_name} ${
            person.last_second_name ? person.last_second_name : ''
          }`}
      </strong>
    </h2>
    <div className='flex justify-center'>
      <Divider className='w-12/12 md:w-6/12' />
    </div>
    <h3 className='text-xl text-center mt-4'>
      <strong>{TextMessage(principalTitle)}</strong>
    </h3>
    <p className='mt-4 mb-8 mr-8 ml-8 md:mr-20 md:ml-20 lg:mr-40 lg:ml-40 text-center text-gray-700 text-base'>
      {TextMessage(principalDescription)}
      <br />
      <strong>{TextMessage(ourPriority)}</strong>
    </p>
    <div className='flex justify-center'>
      <Divider className='w-10/12' />
    </div>
  </>
);

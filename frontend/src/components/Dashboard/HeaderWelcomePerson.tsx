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
    <h3 className='text-2xl text-center mt-4'>
      <>{TextMessage(principalTitle)}</>
    </h3>
    <p className='flex w-10/12 md:w-8/12 lg:w-6/12 justify-center font-semibold mt-4 mr-auto ml-auto text-center text-gray-800 text-lg'>
      {TextMessage(principalDescription)}
      <br />
    </p>
    <p className='font-bold text-base text-center mx-auto my-4'>
      {TextMessage(ourPriority)}
    </p>
    <div className='flex justify-center'>
      <Divider className='w-10/12' />
    </div>
  </>
);

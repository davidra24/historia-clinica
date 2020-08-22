import React from 'react';
import { FormRegisterContact } from './FormRegisterContact';
import { FormRegisterPerson } from './FormRegisterPerson';
import { Button, Card } from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';

export const ContainerLastStep = ({
  firstName,
  secondName,
  lastName,
  lastSecondName,
  genre,
  civilState,
  email,
  dateBirth,
  phone,
  stratum,
  image,
  idProfession,
  idEPS,
  token,
  documentContact,
  nameContact,
  phoneContact,
  emailContact,
  directionContact,
  listContact,
  Stepper,
  onPrevStep,
  onSubmit,
}: any) => (
  <>
    <Card className='flex justify-center flex-col w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 pt-3 pr-10 pl-10 pb-10'>
      <h2 className='text-xl text-center py-4'>
        <strong>{TextMessage('register.finalize')}</strong>
      </h2>
      <FormRegisterPerson
        onSubmit={null}
        firstName={firstName}
        secondName={secondName}
        lastName={lastName}
        lastSecondName={lastSecondName}
        genre={genre}
        civilState={civilState}
        email={email}
        dateBirth={dateBirth}
        phone={phone}
        stratum={stratum}
        onChangePhoto={null}
        image={image}
        idProfession={idProfession}
        idEPS={idEPS}
        token={token}
        Stepper={null}
        disabled={true}
      />
      <FormRegisterContact
        onSubmit={null}
        onPrevStep={null}
        Stepper={null}
        document={documentContact}
        name={nameContact}
        phone={phoneContact}
        email={emailContact}
        direction={directionContact}
        contacts={listContact}
        pushContact={null}
        disabled={true}
      />
      <div className='flex flex-col w-full'>
        <div className='flex justify-center w-full'>{Stepper}</div>
        <div className='flex justify-between'>
          <Button variant='outlined' color='secondary' onClick={onPrevStep}>
            {TextMessage('register.form-previous')}
          </Button>
          <Button
            variant='outlined'
            color='primary'
            type='submit'
            onClick={onSubmit}
          >
            {TextMessage('register.form-save')}
          </Button>
        </div>
      </div>
    </Card>
  </>
);

import React, { useState, SyntheticEvent } from 'react';
import { FormRegisterPerson } from '../components/FormRegisterPerson/FormRegisterPerson';
import { useInputValue, useDatePicker } from '../hooks/useInput';
import { toBase64 } from '../util/Util';
import defaultImage from '../assets/default-profile.png';
import { useCookies } from 'react-cookie';
import { SnackBarAlert } from '../util/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../redux/types';
import { Loading as setLoading } from '../redux/actions';
import { setMsgSuccessVisbility, setMsgErrorVisbility } from '../redux/actions';
import { TextMessage } from '../lang/TextMessage';
import { Stepper, StepLabel, Step, Card } from '@material-ui/core';
import { FormRegisterContact } from '../components/FormRegisterPerson/FormRegisterContact';
import { IContact } from '../data/IContact';
import { ContainerLastStep } from '../components/FormRegisterPerson/ContainerLastStep';
import { Loading } from '../components/Loading';

export const RegisterPerson = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);
  const loading = useSelector((state: IStore) => state.loading);
  const dispatch = useDispatch();

  //Presonal data
  const firstName = useInputValue('');
  const secondName = useInputValue('');
  const lastName = useInputValue('');
  const lastSecondName = useInputValue('');
  const genre = useInputValue('');
  const civilState = useInputValue('');
  const email = useInputValue('');
  const dateBirth = useDatePicker(new Date());
  const phone = useInputValue('');
  const stratum = useInputValue('');
  const idProfession = useInputValue('');
  const idEPS = useInputValue('');
  const [cookie] = useCookies(['token']);
  const isHealtCareTeam = false;

  //Contact
  const documentContact = useInputValue('');
  const nameContact = useInputValue('');
  const phoneContact = useInputValue('');
  const emailContact = useInputValue('');
  const directionContact = useInputValue('');
  const [listContact, setListContact] = useState<Array<IContact>>([]);

  const [image, setImage] = useState<any>(defaultImage);
  const [token, setToken] = useState(cookie.token);
  const [activeStep, setActiveStep] = useState(2);
  const steps = [
    'Información Personal',
    'Información de contacto',
    'Finalizar',
  ];

  const onChangePhoto = (event: any) => {
    const ph = event.target.files[0];
    toBase64(ph).then((res) => setImage(res));
  };
  const handleSubmit = () => {
    //TODO -> ALMACENAR DATOS EN SERVIDOR
  };

  const handleNextStep = (e: SyntheticEvent) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setMsgSuccessVisbility(false));
    dispatch(setMsgErrorVisbility(false));
  };

  const pushContact = () => {
    const contact: IContact = {
      document: documentContact.value,
      name: nameContact.value,
      phone: phoneContact.value,
      email: emailContact.value,
      direction: directionContact.value,
    };
    const auxContact = [...listContact];
    auxContact.push(contact);
    setListContact(auxContact);
    cleanFields();
  };

  const cleanFields = () => {
    documentContact.clean();
    nameContact.clean();
    phoneContact.clean();
    emailContact.clean();
    directionContact.clean();
  };

  const stepper = (
    <Stepper className='w-12/12' activeStep={activeStep} alternativeLabel>
      {steps.map((label: string) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  return (
    <>
      <SnackBarAlert
        open={openMsgError}
        autoHideDuration={6000}
        onClose={handleClose}
        severity='error'
        title={TextMessage(snackTitle)}
        message={{
          children: TextMessage(snackMsg),
        }}
      />
      <SnackBarAlert
        open={openMsgSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
        severity='success'
        title={TextMessage(snackTitle)}
        message={{
          children: TextMessage(snackMsg),
        }}
      />
      <>
        <div className='flex flex-col justify-center items-center'>
          {activeStep === 0 ? (
            <Card className='flex justify-center w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 pt-3 pr-10 pl-10 pb-10'>
              <FormRegisterPerson
                onSubmit={handleNextStep}
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
                onChangePhoto={onChangePhoto}
                image={image}
                idProfession={idProfession}
                idEPS={idEPS}
                token={token}
                Stepper={stepper}
              />
            </Card>
          ) : activeStep === 1 ? (
            <Card className='flex justify-center w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 pt-3 pr-10 pl-10 pb-10'>
              <FormRegisterContact
                onSubmit={handleNextStep}
                onPrevStep={handlePreviousStep}
                Stepper={stepper}
                document={documentContact}
                name={nameContact}
                phone={phoneContact}
                email={emailContact}
                direction={directionContact}
                contacts={listContact}
                pushContact={pushContact}
              />
            </Card>
          ) : (
            <>
              <ContainerLastStep
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
                image={image}
                idProfession={idProfession}
                idEPS={idEPS}
                token={token}
                documentContact={documentContact}
                nameContact={nameContact}
                phoneContact={phoneContact}
                emailContact={emailContact}
                directionContact={directionContact}
                listContact={listContact}
                pushContact={pushContact}
                onPrevStep={handlePreviousStep}
                onSubmit={handleSubmit}
                Stepper={stepper}
              />
            </>
          )}
        </div>
      </>
    </>
  );
};

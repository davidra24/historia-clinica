import React, { useState, useEffect } from 'react';
import { FormRegisterPerson } from '../../components/FormRegisterPerson/FormRegisterPerson';
import {
  useInputValue,
  useDatePicker,
  useInputValidator,
} from '../../hooks/useInput';
import { toBase64 } from '../../util/Util';
import { useCookies } from 'react-cookie';
import { SnackBarAlert } from '../../util/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../redux/types';
import { SnackTitleMsg, SnackMsg } from '../../redux/actions';
import {
  setMsgSuccessVisbility,
  setMsgErrorVisbility,
} from '../../redux/actions';
import { TextMessage } from '../../lang/TextMessage';
import { Stepper, StepLabel, Step, Card } from '@material-ui/core';
import { FormRegisterContact } from '../../components/FormRegisterPerson/FormRegisterContact';
import { IContact } from '../../data/IContact';
import { ContainerLastStep } from '../../components/FormRegisterPerson/ContainerLastStep';

import { post } from '../../util/httpUtil';
import {
  HTTP_CONTACTS,
  HTTP_PEOPLE,
  HTTP_CONTACTS_PERSON,
  DEFAULT_PROFILE_PIC,
  PATTERN_EMAIL,
} from '../../util/constants';
import { IResponse } from '../../data/IResponse';
import { IPerson } from '../../data/IPerson';
import { IContactPerson } from '../../data/IContactPerson';
import { useHistory } from 'react-router';
import { isValid } from 'date-fns';
import { Loading } from '../../components/Loading';
import { IRegisterPerson } from '../../data/IRegisterPerson';

export const RegisterPerson = ({
  isEdit,
  firstNameInfo,
  secondNameInfo,
  lastNameInfo,
  lastSecondNameInfo,
  emailInfo,
  phoneInfo,
  photoInfo,
  genreInfo,
  civilStateInfo,
  epsInfo,
  professionInfo,
  stratumInfo,
  dateBirthInfo,
  arrayContacts,
}: IRegisterPerson) => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);
  const user = useSelector((state: IStore) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  //Personal data
  const firstName = useInputValidator(firstNameInfo || '');
  const secondName = useInputValue(secondNameInfo || '');
  const lastName = useInputValidator(lastNameInfo || '');
  const lastSecondName = useInputValue(lastSecondNameInfo || '');
  const email = useInputValidator(emailInfo || '');
  const phone = useInputValidator(phoneInfo || '');
  const [image, setImage] = useState<any>(photoInfo || DEFAULT_PROFILE_PIC);
  const genre = useInputValidator(genreInfo || '');
  const civilState = useInputValidator(civilStateInfo || '');
  const idEPS = useInputValidator(epsInfo || '');
  const idProfession = useInputValue(professionInfo || '');
  const stratum = useInputValue(stratumInfo || '');
  const dateBirth = useDatePicker(dateBirthInfo || null);

  const [cookie] = useCookies(['token']);
  //Contact
  const documentContact = useInputValidator('');
  const nameContact = useInputValidator('');
  const phoneContact = useInputValidator('');
  const emailContact = useInputValidator('');
  const directionContact = useInputValue('');
  const [listContact, setListContact] = useState<Array<IContact>>(
    arrayContacts || []
  );

  const [valide, setValide] = useState(false);
  const [valideContact, setValideContact] = useState(false);
  const [token, setToken] = useState(cookie.token);
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'Información Personal',
    'Información de contacto',
    'Finalizar',
  ];

  const onChangePhoto = (event: any) => {
    const ph = event.target.files[0];
    toBase64(ph).then((res) => setImage(res));
  };

  const handleSubmit = async () => {
    if (!isEdit) {
      const okContact = await pushContactData();
      if (okContact) {
        pushPersonData().then(async () => {
          const okContactPerson = await pushContactPersonData();
          if (okContactPerson) {
            dispatch(SnackTitleMsg('register.success-title'));
            dispatch(SnackMsg('insertContact.success'));
            dispatch(setMsgSuccessVisbility(true));
            history.push('/');
          } else {
            dispatch(SnackTitleMsg('register.error-title'));
            dispatch(SnackMsg('insertContact.error'));
            dispatch(setMsgErrorVisbility(true));
          }
        });
      }
    } else {
    }
  };

  const validate = (): boolean => {
    const firstNameValidator =
      firstName.value !== null && firstName.value !== '';
    const lastNameValidator = lastName.value !== null && lastName.value !== '';
    const emailValidator =
      email.value === '' || PATTERN_EMAIL.test(email.value);
    const phoneValidator = phone.value !== null && phone.value !== '';

    const genreValidator = genre.value !== null && genre.value !== '';
    const civilStateValidator =
      civilState.value !== null && civilState.value !== '';
    const ipsValidator = idEPS.value !== null && idEPS.value !== '';
    const dateValidator = dateBirth.value !== null && isValid(dateBirth.value);

    firstName.setValidator(firstNameValidator);
    lastName.setValidator(lastNameValidator);
    email.setValidator(emailValidator);
    phone.setValidator(phoneValidator);
    genre.setValidator(genreValidator);
    civilState.setValidator(civilStateValidator);
    idEPS.setValidator(ipsValidator);
    dateBirth.setValidator(dateValidator);

    const finalValidator =
      firstNameValidator &&
      lastNameValidator &&
      emailValidator &&
      phoneValidator &&
      genreValidator &&
      civilStateValidator &&
      ipsValidator &&
      dateValidator;
    setValide(finalValidator);
    return finalValidator;
  };
  useEffect(() => {}, [valide]);

  const validateContact = (): boolean => {
    const documentContactValidator =
      documentContact.value !== '' && documentContact.value !== null;
    const nameContactValidator =
      nameContact.value !== '' && nameContact.value !== null;
    const phoneContactValidator =
      phoneContact.value !== '' && phoneContact.value !== null;
    const emailContactValidator =
      emailContact.value === '' || PATTERN_EMAIL.test(emailContact.value);

    documentContact.setValidator(documentContactValidator);
    nameContact.setValidator(nameContactValidator);
    phoneContact.setValidator(phoneContactValidator);
    emailContact.setValidator(emailContactValidator);

    const finalValidator =
      documentContactValidator &&
      nameContactValidator &&
      phoneContactValidator &&
      emailContactValidator;

    setValideContact(finalValidator);
    return finalValidator;
  };
  useEffect(() => {}, [valideContact]);

  const pushContactData = async (): Promise<boolean> => {
    setLoading(true);
    const promises: Array<Promise<IResponse<IContact>>> = [];
    let inserted = true;
    listContact.forEach((contact) => {
      promises.push(post(HTTP_CONTACTS, { contact }, token));
    });

    return Promise.all(promises)
      .then(async (responses) => {
        responses.forEach((response) => {
          if (response) {
            if (!response.ok) inserted = false;
          } else {
            inserted = false;
          }
        });
        setLoading(false);
        return Promise.resolve(inserted);
      })
      .catch((ex: any) => {
        console.log('exception', ex);
        setLoading(false);
        return Promise.resolve(false);
      });
  };

  const pushPersonData = async () => {
    setLoading(true);
    console.log(dateBirth.value);
    const person: IPerson = {
      document: user?.document,
      first_name: firstName.value,
      second_name: secondName.value,
      last_name: lastName.value,
      last_second_name: lastSecondName.value,
      genre: genre.value,
      date_birth: dateBirth.value,
      email: email.value,
      civil_state: civilState.value,
      photo: image,
      phone: phone.value,
      id_profesion: idProfession.value,
      id_eps: idEPS.value,
      stratum: stratum.value || 0,
      is_healt_care_team: false,
      deceased: false,
    };
    console.log('person', person);
    const response = await post<IPerson>(HTTP_PEOPLE, { person }, token);
    if (response) {
      const { message } = response;
      if (response.ok) {
        dispatch(SnackTitleMsg('register.success-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgSuccessVisbility(true));
      } else {
        dispatch(SnackTitleMsg('register.error-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('register.error-title'));
      dispatch(SnackMsg('app.not-server'));
      dispatch(setMsgErrorVisbility(true));
    }
    setLoading(false);
  };

  const pushContactPersonData = async (): Promise<boolean> => {
    setLoading(true);

    const listContactsPerson: Array<IContactPerson> = [];

    listContact.forEach((contact) => {
      listContactsPerson.push({
        user_document: user.document,
        contact_document: contact.document,
      });
    });

    const promises: Array<Promise<IResponse<IContactPerson>>> = [];
    let inserted = true;
    listContactsPerson.forEach((contactPerson) => {
      promises.push(post(HTTP_CONTACTS_PERSON, { contactPerson }, token));
    });

    return Promise.all(promises)
      .then(async (responses) => {
        responses.forEach((response) => {
          if (response) {
            if (!response.ok) inserted = false;
          } else {
            inserted = false;
          }
        });
        setLoading(false);
        return Promise.resolve(inserted);
      })
      .catch((ex: any) => {
        console.log('exception', ex);
        setLoading(false);
        return Promise.resolve(false);
      });
  };

  const handleNextStep = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const finalValidator = validate();
    if (finalValidator) {
      setActiveStep(activeStep + 1);
    }
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

  const pushContact = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const finalValidator = validateContact();
    if (finalValidator) {
      const contact: IContact = {
        document: documentContact.value,
        name: nameContact.value,
        phone: phoneContact.value,
        email: emailContact.value,
        direction: directionContact.value,
      };
      if (listContact.length < 3) {
        const auxContact = [...listContact];
        auxContact.push(contact);
        setListContact(auxContact);
      } else {
        dispatch(SnackTitleMsg('register.error-titleContact'));
        dispatch(SnackMsg('register.error-msgContact'));
        dispatch(setMsgErrorVisbility(true));
      }
      cleanFields();
    }
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
        {loading ? (
          <Loading />
        ) : (
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
        )}
      </>
    </>
  );
};

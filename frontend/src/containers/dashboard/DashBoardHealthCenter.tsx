import React, { useEffect, useState, SyntheticEvent } from 'react';
import { IStore } from '../../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { TextMessage } from '../../lang/TextMessage';
import { IHealthCareCenter } from '../../data/IHealthCareCenter';
import {
  Divider,
  Card,
  TextField,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { useInputValidator } from '../../hooks/useInput';
import { ISpecialty } from '../../data/ISpecialty';
import { useCookies } from 'react-cookie';
import {
  HTTP_SPECIALTIES,
  HTTP_ATTENTIONS_CENTER,
  HTTP_VIEW_AC_BY_HC,
  HTTP_CONTACTS_BY_PERSON,
  HTTP_EPS,
  HTTP_PROFESSION,
  HTTP_PEOPLE,
} from '../../util/constants';
import { get, post, getOneOrMany } from '../../util/httpUtil';
import {
  setSpecialties,
  setViewAttenttionCenter,
  setPerson,
} from '../../redux/actions';
import { Loading } from '../../components/Loading';
import { TableHealthCenter } from '../../components/Dashboard/TableHealthCenter';
import { IAttentionCenter } from '../../data/IAttentionCenter';
import { IViewAttentionCenter } from '../../data/IViewAttentionCenter';
import { IUser } from '../../data/IUser';
import { makeStyles } from '@material-ui/core/styles';
import { ShowProfilePerson } from '../../components/Profile/ShowProfilePerson';
import { IContact } from '../../data/IContact';
import { IEPS } from '../../data/IEPS';
import { IProfessions } from '../../data/IProfessions';
import { IPerson } from '../../data/IPerson';

export const DashBoardHealthCenter = () => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [valide, setValide] = useState(false);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  const specialties: Array<ISpecialty> = useSelector(
    (state: IStore) => state.specialties
  );
  const token: string = useSelector((state: IStore) => state.token);
  const viewAttentionCenter: Array<IViewAttentionCenter> = useSelector(
    (state: IStore) => state.viewAttentionCenter
  );
  const professionalValue = useInputValidator('');
  const specialtyValue = useInputValidator('');

  const healthCenter: IHealthCareCenter = useSelector(
    (state: IStore) => state.healthCenter
  );
  const user: IUser = useSelector((state: IStore) => state.user);
  const [professional, setPerson] = useState<IPerson | any>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const finalValidator = validate();
    const gotPerson = getPerson(professionalValue.value);
    console.log(finalValidator && gotPerson);
    if (finalValidator && gotPerson) {
      console.log(professional);
      //getAllInfo();
      setOpen(true);
      //const response = post<Array<IAttentionCenter>>(
      //  HTTP_ATTENTIONS_CENTER,
      //  token
      //);
      cleanFields();
    }
  };

  useEffect(() => {}, [valide]);

  const getAllInfo = async (): Promise<Boolean> => {
    /*
    setLoading(true);
    const [ContactInfo, EPSInfo, ProfessionInfo] = await Promise.all([
      await getOneOrMany<Array<IContact>>(
        HTTP_CONTACTS_BY_PERSON,
        person.document,
        token
      ),
      await getOneOrMany<IEPS>(HTTP_EPS, person.id_eps, token),
      await getOneOrMany<IProfessions>(
        HTTP_PROFESSION,
        person.id_profesion,
        token
      ),
    ]);
    if (EPSInfo.ok) {
      setNameEPS(EPSInfo.data.name);
    }
    if (ProfessionInfo.ok) {
      setNameProfession(ProfessionInfo.data.name);
    }
    if (ContactInfo.ok) {
      setContacts(ContactInfo.data);
    }
    setLoading(false);*/
    return await Promise.resolve(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = (): boolean => {
    const professionalValidator =
      professionalValue.value !== null && professionalValue.value !== '';
    const specialityValidator =
      specialtyValue.value !== null && specialtyValue.value !== '';

    professionalValue.setValidator(
      professionalValue.value !== null && professionalValue.value !== ''
    );
    specialtyValue.setValidator(
      specialtyValue.value !== null && specialtyValue.value !== ''
    );

    const finalValidator = professionalValidator && specialityValidator;
    setValide(finalValidator);
    return finalValidator;
  };

  useEffect(() => {
    if (specialties.length === 0) {
      getSpecialties();
    }
    if (viewAttentionCenter.length === 0) {
      getViewAttentionCenter();
    }
  }, []);

  const getSpecialties = async () => {
    setLoading(true);
    const response = await get<Array<ISpecialty>>(HTTP_SPECIALTIES, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setSpecialties(data));
      }
    }
    setLoading(false);
  };

  const getPerson = async (document: string): Promise<Boolean> => {
    const response = await getOneOrMany<IPerson>(HTTP_PEOPLE, document, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        setPerson(data);
        return await Promise.resolve(true);
      } else {
        return await Promise.resolve(false);
        setPerson(null);
      }
    } else {
      return await Promise.resolve(false);
      setPerson(null);
    }
  };

  const getViewAttentionCenter = async () => {
    setLoading(true);
    const response = await getOneOrMany<Array<IViewAttentionCenter>>(
      HTTP_VIEW_AC_BY_HC,
      user.document,
      token
    );
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setViewAttenttionCenter(data));
      }
    }
    setLoading(false);
  };

  const cleanFields = () => {
    professionalValue.clean();
    specialtyValue.clean();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col h-full'>
          <h2 className='text-4xl font-semibold text-center mb-4'>
            {TextMessage('app.welcomeM')}
            <p className='font-bold'>
              {healthCenter && ` ${healthCenter.name}`}
            </p>
          </h2>
          <div className='flex justify-center'>
            <Divider className='w-12/12 md:w-6/12' />
          </div>
          <h3 className='text-2xl text-center mt-4'>
            <strong>{TextMessage('dashboard-health.professional')}</strong>
          </h3>
          <p className='flex w-10/12 md:w-8/12 lg:w-6/12 justify-center font-semibold mt-4 mr-auto ml-auto text-center text-gray-800 text-lg'>
            {TextMessage('dashboard-health.professional-description')}
            <br />
          </p>
          <p className='font-bold text-base text-center mx-auto my-4'>
            {TextMessage('dashboard-health.professional-description-end')}
          </p>
          <div className='flex justify-center'>
            <Divider className='w-10/12' />
          </div>
          <div className='flex justify-center'>
            <Card className='flex flex-col w-8/12 h-full rounded-full m-4 p-10'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center space-y-3'>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around sm:items-center lg:items-baseline'>
                    <FormControl className='w-12/12 md:w-5/12'>
                      <TextField
                        id='float-document'
                        name='document'
                        variant='outlined'
                        label={TextMessage(
                          'dashboard-health.professional-document'
                        )}
                        {...professionalValue}
                      />
                      <span className='text-red-600'>
                        {!professionalValue.validator &&
                          TextMessage('dashboard-health.professional-required')}
                      </span>
                    </FormControl>
                    <FormControl
                      variant='outlined'
                      className='w-12/12 md:w-5/12'
                    >
                      <InputLabel id='form-select-eps'>
                        {TextMessage('dashboard-health.specialties-array')}
                      </InputLabel>
                      <Select
                        id='float-eps'
                        labelId='float-eps'
                        label='eps'
                        {...specialtyValue}
                      >
                        {specialties
                          .sort((a, b) =>
                            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                          )
                          .map((speciality: ISpecialty) => (
                            <MenuItem value={speciality.id} key={speciality.id}>
                              {speciality.name}
                            </MenuItem>
                          ))}
                      </Select>
                      <span className='text-red-600'>
                        {!specialtyValue.validator &&
                          TextMessage('dashboard-health.specialties-required')}
                      </span>
                    </FormControl>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-center md:justify-end md:pr-8 items-center'>
                    <Button
                      className='w-12/12'
                      variant='outlined'
                      color='primary'
                      type='submit'
                    >
                      {TextMessage('dashboard-health.add-professional')}
                    </Button>
                    <Modal
                      aria-labelledby='transition-modal-title'
                      aria-describedby='transition-modal-description'
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <div className={classes.paper}>
                          <h2 id='transition-modal-title'></h2>
                          <p id='transition-modal-description'></p>
                        </div>
                      </Fade>
                    </Modal>
                  </div>
                </div>
              </form>
            </Card>
          </div>
          <div className='flex justify-center'>
            <TableHealthCenter arrayAttentionCenter={viewAttentionCenter} />
          </div>
        </div>
      )}
    </>
  );
};

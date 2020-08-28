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
} from '@material-ui/core';
import { ModalInfoProfessional } from '../../components/Dashboard/ModalInfoProfessional';
import { useInputValidator } from '../../hooks/useInput';
import { ISpecialty } from '../../data/ISpecialty';
import {
  HTTP_SPECIALTIES,
  HTTP_VIEW_AC_BY_HC,
  HTTP_EPS,
  HTTP_PROFESSION,
  HTTP_PEOPLE,
  HTTP_ATTENTIONS_CENTER,
} from '../../util/constants';
import { get, post, getOneOrMany } from '../../util/httpUtil';
import {
  setSpecialties,
  setViewAttenttionCenter,
  setPerson,
} from '../../redux/actions';
import { Loading } from '../../components/Loading';
import { TableHealthCenter } from '../../components/Dashboard/TableHealthCenter';
import { IViewAttentionCenter } from '../../data/IViewAttentionCenter';
import { IUser } from '../../data/IUser';
import { IProfessions } from '../../data/IProfessions';
import { IPerson } from '../../data/IPerson';
import { IEPS } from '../../data/IEPS';
import { IAttentionCenter } from '../../data/IAttentionCenter';
import { useAlert } from '../../hooks/useAlert';

export const DashBoardHealthCenter = () => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [valide, setValide] = useState(false);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const alert = useAlert(dispatch);

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
  const [professional, setProfessional] = useState<IPerson | any>(null);
  const [specialty, setSpecialty] = useState<ISpecialty | any>(null);
  const [nameEPS, setNameEPS] = useState('');
  const [nameProfession, setNameProfession] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    const document = professionalValue.value;
    const id_specialty = specialtyValue.value;
    const attentionCenter: IAttentionCenter = {
      id: user.document,
      document,
      id_specialty,
      active: true,
    };
    const response = await post<IAttentionCenter>(
      HTTP_ATTENTIONS_CENTER,
      { attentionCenter },
      token
    );
    if (response) {
      const { ok, message, data } = response;
      if (ok) {
        alert('register.success-title', message, 'success');
      } else {
        alert('register.error-title', message, 'error');
      }
    } else {
      alert('register.error-title', 'app.not-server', 'error');
    }
    setLoading(false);
    getViewAttentionCenter();
  };

  const getData = async (event: SyntheticEvent) => {
    event.preventDefault();
    const finalValidator = validate();
    if (finalValidator) {
      setLoading(true);
      const document = professionalValue.value;
      const response = await getOneOrMany<IPerson>(
        HTTP_PEOPLE,
        document,
        token
      );
      if (response) {
        const { ok, data } = response;
        if (ok) {
          setSpecialty(
            specialties.find(
              (specialty) => specialty.id === specialtyValue.value
            )
          );
          setProfessional(data);
          const infoOk = await getAllInfo(data.id_eps, data.id_profesion);
          console.log('infoOk', infoOk);
          if (infoOk) {
            setOpen(true);
          }
          alert(
            'dashboard-healt.success-title',
            'getPerson.success',
            'success'
          );
        } else {
          alert('dashboard-healt.error-title', 'getPerson.error', 'error');
        }
      } else {
        alert('dashboard-healt.error-title', 'app.not-server', 'error');
      }
      setLoading(false);
    }
  };

  useEffect(() => {}, [valide]);

  const getAllInfo = async (
    id_eps: string,
    id_profession: string
  ): Promise<boolean> => {
    setLoading(true);
    return new Promise(async (resolve) => {
      const [EPSInfo, ProfessionInfo] = await Promise.all([
        await getOneOrMany<IEPS>(HTTP_EPS, id_eps, token),
        await getOneOrMany<IProfessions>(HTTP_PROFESSION, id_profession, token),
      ]);
      console.log('EPSINFO', EPSInfo);
      console.log('ProfessionInfo', ProfessionInfo);

      if (EPSInfo.ok) {
        setNameEPS(EPSInfo.data.name);
      } else {
        setNameEPS('');
      }
      if (ProfessionInfo.ok) {
        setNameProfession(ProfessionInfo.data.name);
      } else {
        setNameProfession('');
      }
      setLoading(false);
      resolve(true);
    });
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
              <form onSubmit={getData}>
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
                    <ModalInfoProfessional
                      professional={professional}
                      specialty={specialty}
                      open={open}
                      handleClose={() => setOpen(false)}
                      EPSName={nameEPS}
                      ProfessionName={nameProfession}
                      handleSubmit={handleSubmit}
                    />
                  </div>
                </div>
              </form>
            </Card>
          </div>
          <div className='flex justify-center'>
            {viewAttentionCenter.length !== 0 ? (
              <TableHealthCenter arrayAttentionCenter={viewAttentionCenter} />
            ) : (
              <h3 className='text-xl text-center font-semibold mt-4 text-gray-700'>
                {TextMessage('dashboard-health.no-specialties')}
              </h3>
            )}
          </div>
        </div>
      )}
    </>
  );
};

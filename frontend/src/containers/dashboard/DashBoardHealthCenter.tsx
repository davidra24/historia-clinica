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
import { useInputValidator } from '../../hooks/useInput';
import { ISpecialty } from '../../data/ISpecialty';
import { useCookies } from 'react-cookie';
import { HTTP_SPECIALTIES, HTTP_ATTENTIONS_CENTER } from '../../util/constants';
import { get, post } from '../../util/httpUtil';
import { setSpecialties } from '../../redux/actions';
import { Loading } from '../../components/Loading';
import { TableHealthCenter } from '../../components/Dashboard/TableHealthCenter';
import { IAttentionCenter } from '../../data/IAttentionCenter';

export const DashBoardHealthCenter = () => {
  const [loading, setLoading] = useState(false);
  const [valide, setValide] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();

  const specialties: Array<ISpecialty> = useSelector(
    (state: IStore) => state.specialties
  );
  const professionalValue = useInputValidator('');
  const specialtyValue = useInputValidator('');

  const healthCenter: IHealthCareCenter = useSelector(
    (state: IStore) => state.healthCenter
  );

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const finalValidator = validate();
    const { token } = cookie;
    if (finalValidator) {
      const response = post<Array<IAttentionCenter>>(
        HTTP_ATTENTIONS_CENTER,
        token
      );
      cleanFields();
    }
  };

  useEffect(() => {}, [valide]);

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
  }, []);

  const getSpecialties = async () => {
    setLoading(true);
    const { token } = cookie;
    const response = await get<Array<ISpecialty>>(HTTP_SPECIALTIES, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setSpecialties(data));
      } else {
      }
    } else {
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
          <h2 className='text-2xl text-center mb-4'>
            {TextMessage('app.welcomeM')}
            <strong>{healthCenter && ` ${healthCenter.name}`}</strong>
          </h2>
          <div className='flex justify-center'>
            <Divider className='w-12/12 md:w-6/12' />
          </div>
          <h3 className='text-xl text-center mt-4'>
            <strong>{TextMessage('dashboard-health.professional')}</strong>
          </h3>
          <p className='mt-4 mb-8 mr-8 ml-8 md:mr-20 md:ml-20 lg:mr-40 lg:ml-40 text-center text-gray-700 text-base'>
            {TextMessage('dashboard-health.professional-description')}
            <br />
            <strong>
              {TextMessage('dashboard-health.professional-description-end')}
            </strong>
          </p>
          <div className='flex justify-center'>
            <Divider className='w-10/12' />
          </div>
          <div className='flex justify-center'>
            <Card className='flex flex-col w-11/12 h-full rounded-full m-4 p-10'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center space-y-3'>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around sm:items-center lg:items-baseline'>
                    <FormControl className='w-12/12 md:w-4/12'>
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
                      className='w-12/12 md:w-4/12'
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
                    <Button
                      className='w-12/12 md:w-3/12'
                      variant='outlined'
                      color='primary'
                      type='submit'
                    >
                      {TextMessage('dashboard-health.add-professional')}
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
          <div className='flex justify-center'>
            <TableHealthCenter />
          </div>
        </div>
      )}
    </>
  );
};

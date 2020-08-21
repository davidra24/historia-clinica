import React, { useRef, useState } from 'react';
import {
  Card,
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { registerPersonTypes } from '../../data/registerPersonTypes';
import { useForm } from 'react-hook-form';
import { useInputValue } from '../../hooks/useInput';
import {
  validationsFirstName,
  validationsLastName,
  validationsGenre,
} from '../../util/validations';
import { toBase64 } from '../../util/Util';

export const FormRegisterPatient = ({ onSubmit }: registerPersonTypes) => {
  const [image, setImage] = useState<any>(
    require('../../assets/default-profile.png')
  );
  const { handleSubmit, register, errors } = useForm();
  const firstName = useInputValue('');
  const secondName = useInputValue('');
  const lastName = useInputValue('');
  const lastSecondName = useInputValue('');
  const genre = useInputValue('');
  const civilState = useInputValue('');
  const idProfesion = useInputValue('');
  const dateBirth = useInputValue('');
  const idEPS = useInputValue('');
  const email = useInputValue('');
  const phone = useInputValue('');
  const stratum = useInputValue('');
  const deceased = useInputValue('');
  const deceasedDate = useInputValue('');
  const isHealtCareTeam = useInputValue('');

  const onChangePhoto = (event: any) => {
    const ph = event.target.files[0];
    toBase64(ph).then((res) => setImage(res));
  };

  return (
    <>
      <Card className='h-full w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12 pt-3 pr-10 pl-10 pb-10'>
        <div className='flex flex-col justify-center space-y-5'>
          <h1 className='text-xl text-center'>
            <strong>{TextMessage('register.person')}</strong>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center space-y-3'>
              <div className='flex justify-center'>
                <Button component='label'>
                  <input
                    onChange={onChangePhoto}
                    accept='image/*'
                    type='file'
                    style={{ display: 'none' }}
                  />
                  <img
                    src={image}
                    alt='profile-picture'
                    className='w-20 h-20 rounded-full flex items-center justify-center'
                  />
                </Button>
              </div>
              <div className='flex flex-row justify-around'>
                <FormControl className='w-5/12'>
                  <TextField
                    id='float-firstName'
                    name='firstName'
                    inputRef={register(validationsFirstName)}
                    variant='outlined'
                    label={TextMessage('register.form-firstName')}
                    {...firstName}
                  />
                </FormControl>
                <FormControl className='w-5/12'>
                  <TextField
                    id='float-secondName'
                    name='secondName'
                    variant='outlined'
                    label={TextMessage('register.form-secondName')}
                    {...secondName}
                  />
                </FormControl>
              </div>
              <div className='flex flex-row justify-around'>
                <FormControl className='w-5/12'>
                  <TextField
                    id='float-lastName'
                    name='lastName'
                    inputRef={register(validationsLastName)}
                    variant='outlined'
                    label={TextMessage('register.form-lastName')}
                    {...lastName}
                  />
                </FormControl>
                <FormControl className='w-5/12'>
                  <TextField
                    id='float-lastSecondName'
                    name='lastSecondName'
                    variant='outlined'
                    label={TextMessage('register.form-lastSecondName')}
                    {...lastSecondName}
                  />
                </FormControl>
              </div>
              <div className='flex flex-row justify-around'>
                <FormControl variant='outlined' className='w-5/12'>
                  <InputLabel id='demo-simple-select-outlined-label'>
                    {TextMessage('register.form-genre')}
                  </InputLabel>
                  <Select
                    id='float-genre'
                    labelId='float-genre'
                    name='genre'
                    innerRef={register(validationsGenre)}
                    label='Genre'
                    {...genre}
                  >
                    <MenuItem value={1}>
                      {TextMessage('register.form-GenreM')}
                    </MenuItem>
                    <MenuItem value={2}>
                      {TextMessage('register.form-GenreF')}
                    </MenuItem>
                    <MenuItem value={3}>
                      {TextMessage('register.form-GenreO')}
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl className='w-5/12'>
                  <TextField
                    id='float-lastSecondName'
                    name='lastSecondName'
                    variant='outlined'
                    label={TextMessage('register.form-lastSecondName')}
                    {...lastSecondName}
                  />
                </FormControl>
              </div>
              <div className='flex justify-center'>
                <Button variant='contained' color='primary' type='submit'>
                  {TextMessage('register.form-save')}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

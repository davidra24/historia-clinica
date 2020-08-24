import React, { useState, SyntheticEvent } from 'react';
import { RegisterContactTypes } from '../../data/registerPersonTypes';
import { Loading } from '../Loading';
import {
  Card,
  Button,
  FormControl,
  TextField,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { useForm } from 'react-hook-form';
import {
  validationsDocument,
  validationsNameContact,
  validationsEmail,
  validationsPhone,
} from '../../util/validations';
import { IContact } from '../../data/IContact';
import { useDispatch } from 'react-redux';
import {
  SnackTitleMsg,
  SnackMsg,
  setMsgErrorVisbility,
} from '../../redux/actions';

export const FormRegisterContact = ({
  onSubmit,
  onPrevStep,
  Stepper,
  document,
  name,
  phone,
  email,
  direction,
  contacts,
  pushContact,
  disabled,
}: RegisterContactTypes) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const newHandleSubmit = () => {
    if (contacts.length <= 0) {
      dispatch(SnackTitleMsg('register.form-errTitle-noContact'));
      dispatch(SnackMsg('register.form-errMsg-noContact'));
      dispatch(setMsgErrorVisbility(true));
    } else {
      onSubmit();
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col w-full'>
          <div className='flex flex-col justify-center space-y-5'>
            <h2 className='text-lg text-center'>
              <strong>{TextMessage('register.contact')}</strong>
            </h2>

            {!disabled && (
              <form onSubmit={pushContact} className='space-y-4'>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-document'
                      name='document'
                      variant='outlined'
                      label={TextMessage('register.form-documentContact')}
                      {...document}
                    />
                    <span className='text-red-600'>
                      {!document.validator && TextMessage('document.required')}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-name'
                      name='name'
                      variant='outlined'
                      label={TextMessage('register.form-nameContact')}
                      {...name}
                    />
                    <span className='text-red-600'>
                      {!name.validator &&
                        TextMessage('register.form-nameContact-required')}
                    </span>
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-phone'
                      name='phone'
                      variant='outlined'
                      label={TextMessage('register.form-phonneContact')}
                      {...phone}
                    />
                    <span className='text-red-600'>
                      {!phone.validator &&
                        TextMessage('register.form-phone-required')}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-email'
                      name='email'
                      variant='outlined'
                      label={TextMessage('register.form-emailContact')}
                      value={email.value}
                      onChange={email.onChange}
                    />
                    <span className='text-red-600'>
                      {!email.validator &&
                        TextMessage('register.form-email-invalid')}
                    </span>
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around mt-2 md:items-center'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-direction'
                      name='direction'
                      variant='outlined'
                      label={TextMessage('register.form-directionContact')}
                      {...direction}
                    />
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <Button variant='outlined' color='primary' type='submit'>
                      {TextMessage('register.form-add')}
                    </Button>
                  </FormControl>
                </div>
              </form>
            )}
            <TableContainer component={Paper} className='mt-4 mb-4'>
              <Table className='w-12/12' aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {TextMessage('register.form-documentContact-table')}
                    </TableCell>
                    <TableCell align='right'>
                      {TextMessage('register.form-nameContact-table')}
                    </TableCell>
                    <TableCell align='right'>
                      {TextMessage('register.form-phonneContact-table')}
                    </TableCell>
                    <TableCell align='right'>
                      {TextMessage('register.form-emailContact')}
                    </TableCell>
                    <TableCell align='right'>
                      {TextMessage('register.form-directionContact')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact: IContact) => (
                    <TableRow key={contact.document}>
                      <TableCell component='th' scope='contact'>
                        {contact.document}
                      </TableCell>
                      <TableCell align='right'>{contact.name}</TableCell>
                      <TableCell align='right'>{contact.phone}</TableCell>
                      <TableCell align='right'>{contact.email}</TableCell>
                      <TableCell align='right'>{contact.direction}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {!disabled && (
              <div className='flex flex-col w-full'>
                <div className='flex justify-center w-full'>{Stepper}</div>
                <div className='flex justify-between'>
                  <Button
                    variant='outlined'
                    color='secondary'
                    onClick={onPrevStep}
                  >
                    {TextMessage('register.form-previous')}
                  </Button>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={newHandleSubmit}
                  >
                    {TextMessage('register.form-next')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

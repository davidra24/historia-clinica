import React, { useState, SyntheticEvent } from 'react';
import { RegisterContactTypes } from '../../data/registerPersonTypes';
import {
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
  SvgIcon,
} from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { IContact } from '../../data/IContact';
import { useDispatch } from 'react-redux';
import {
  SnackTitleMsg,
  SnackMsg,
  setMsgErrorVisbility,
} from '../../redux/actions';
import { REMOVE_ICON } from '../../util/svgIcons';
import { useAlert } from '../../hooks/useAlert';

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
  removeContact,
}: RegisterContactTypes) => {
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);

  const newHandleSubmit = () => {
    if (contacts.length <= 0) {
      alert(
        'register.form-errTitle-noContact',
        'register.form-errMsg-noContact',
        'error'
      );
    } else {
      onSubmit();
    }
  };

  return (
    <>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col justify-center space-y-5'>
          <h2 className='text-2xl font-semibold  text-center'>
            <>{TextMessage('register.contact')}</>
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
                  {!disabled && (
                    <TableCell align='right'>
                      {TextMessage('register.form-deleteContact')}
                    </TableCell>
                  )}
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
                    {!disabled && (
                      <TableCell align='right'>
                        <SvgIcon
                          className='cursor-pointer'
                          onClick={() => removeContact(contact.document)}
                        >
                          <path d={REMOVE_ICON} />
                        </SvgIcon>
                      </TableCell>
                    )}
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
    </>
  );
};

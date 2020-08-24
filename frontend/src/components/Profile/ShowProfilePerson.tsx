import React from 'react';
import { profilePersonShowTypes } from '../../data/profileTypes';
import { Button } from '@material-ui/core';

export const ShowProfilePerson = ({ setShow }: profilePersonShowTypes) => {
  return (
    <>
      <h1>ShowProfilePerson</h1>
      <br />
      <Button variant='outlined' color='primary' onClick={() => setShow(false)}>
        Editar
      </Button>
    </>
  );
};

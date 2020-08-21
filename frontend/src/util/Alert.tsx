import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

type propsAlert = {
  open: boolean;
  autoHideDuration: number;
  onClose: any;
  severity: any;
  title: any;
  message: any;
};

export const SnackBarAlert = (props: propsAlert) => (
  <Snackbar
    open={props.open}
    autoHideDuration={props.autoHideDuration}
    onClose={props.onClose}
  >
    <Alert variant='filled' onClose={props.onClose} severity={props.severity}>
      <div className='flex flex-col items-center'>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message.children}
      </div>
    </Alert>
  </Snackbar>
);

import { MutableRefObject } from 'react';

export const errorMessage = (
  messages: MutableRefObject<any>,
  title: string,
  body: string
) =>
  messages.current.show({
    severity: 'error',
    summary: title,
    detail: body,
  });

export const successMessage = (
  messages: MutableRefObject<any>,
  title: string,
  body: string
) =>
  messages.current.show({
    severity: 'success',
    summary: title,
    detail: body,
  });

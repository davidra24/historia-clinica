import { useState } from 'react';

export const useInputValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const clean = () => setValue(initialValue);
  return { value, onChange, clean };
};

export const useQuillValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: any) => {
    console.log('event', e);
    setValue(e);
  };
  const clean = () => setValue('');
  const defaultValue = () => setValue(initialValue);
  return { value, onChange, clean, defaultValue };
};

export const useInputValidator = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [validator, setValidator] = useState<boolean>(true);
  const onChange = (e: any) => {
    setValue(e.target.value);
    setValidator(!!e.target.value);
  };
  const clean = () => setValue(initialValue);
  return { value, onChange, clean, validator, setValidator };
};

export const useCheckValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: any) => {
    setValue(e.target.checked);
  };
  return { value, onChange, checked: value };
};

export const useDatePicker = (initialValue: Date | any) => {
  const [value, setValue] = useState<Date | null>(initialValue);
  const [validator, setValidator] = useState<boolean>(true);
  const onChange = (date: Date | null) => {
    setValue(date);
    setValidator(!!date);
  };
  return { value, onChange, validator, setValidator };
};

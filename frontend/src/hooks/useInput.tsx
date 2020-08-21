import { useState } from 'react';

export const useInputValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

export const useCheckValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: any) => {
    setValue(e.target.checked);
  };
  return { value, onChange, checked: value };
};

export const useDatePicker = (initialValue: Date) => {
  const [value, setValue] = useState<Date | null>(new Date());
  const onChange = (date: Date | null) => {
    setValue(date);
  };
  return { value, onChange };
};

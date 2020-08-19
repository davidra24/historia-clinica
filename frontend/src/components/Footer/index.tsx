import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { LOCALES } from '../../lang';
import { changeLang } from '../../redux/actions';
import { IStore } from '../../redux/types';

export const Footer = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector((state: IStore) => state.openMenu);
  const [lang, setLang] = useState(localStorage.getItem('language'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  const handleChange = (event: any) => {
    const language = event.target.value;
    setLang(language);
    localStorage.setItem('language', language);
    dispatch(changeLang(localStorage.getItem('language')));
  };

  return (
    <footer className='flex w-full justify-between border-t-4'>
      <div className='flex justify-center py-5 pl-10'></div>
      <div className='flex justify-center py-5'></div>
      <div className='flex justify-center py-5 pr-10'>
        <FormControl variant='filled' className='m-1'>
          <InputLabel htmlFor='language-selector'>
            {TextMessage('lang.selectedLang')}
          </InputLabel>
          <Select
            label='Age'
            inputProps={{
              name: 'age',
              id: 'language-selector',
            }}
            value={lang}
            onChange={handleChange}
            disabled={openMenu}
          >
            <option className='cursor-pointer' value={LOCALES.SPANISH}>
              {LOCALES.SPANISH}
            </option>
            <option className='cursor-pointer' value={LOCALES.ENGLISH}>
              {LOCALES.ENGLISH}
            </option>
          </Select>
        </FormControl>
      </div>
    </footer>
  );
};

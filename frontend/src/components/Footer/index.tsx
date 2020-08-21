import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
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
    <footer className='flex w-full justify-between border-t border-gray-300 z-10 bg-white'>
      <div className='flex justify-center py-5 pl-10'></div>
      <div className='flex justify-center py-5'></div>
      <div className='flex justify-center py-5 pr-10'>
        <FormControl className='m-1 w-40' variant='outlined'>
          <InputLabel htmlFor='language-selector'>
            {TextMessage('lang.selectedLang')}
          </InputLabel>
          <Select
            label='Language'
            inputProps={{
              id: 'language-selector',
            }}
            defaultValue={lang}
            onChange={handleChange}
            disabled={openMenu}
          >
            <MenuItem className='cursor-pointer' value={LOCALES.SPANISH}>
              <div className='flex flex-row items-center'>
                <img
                  className='w-6 mr-2'
                  src={require('../../assets/colombia.svg')}
                  alt='CO'
                />
                {TextMessage('lang.spanish')}
              </div>
            </MenuItem>

            <MenuItem className='cursor-pointer' value={LOCALES.ENGLISH}>
              <div className='flex flex-row items-center'>
                <img
                  className='w-6 mr-2'
                  src={require('../../assets/estados unidos.svg')}
                  alt='USA'
                />
                {TextMessage('lang.english')}
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </footer>
  );
};

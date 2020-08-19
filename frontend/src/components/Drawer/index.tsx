import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../redux/types';
import { menu } from '../../redux/actions';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { MenuListPatient } from './MenuListPatient';
import { SvgIcon } from '@material-ui/core';
import { MENU_ICON, CLOSE_MENU_ICON } from '../../util/svgIcons';
import { TextMessage } from '../../lang/TextMessage';

export const Drawer = ({ children }: any) => {
  const openMenu = useSelector((state: IStore) => state.openMenu);
  const dispatch = useDispatch();

  return (
    <div>
      <nav
        onClick={() => openMenu && dispatch(menu(false))}
        className={`flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10 ${
          openMenu ? 'opacity-50' : ''
        }`}
      >
        <div className='flex items-center w-full'>
          <div className='flex items-center'>
            <button
              className='mr-2'
              aria-label='Open Menu'
              onClick={() => {
                dispatch(menu(true));
              }}
            >
              <SvgIcon>
                <path d={MENU_ICON}></path>
              </SvgIcon>
            </button>
          </div>
          <Link
            className='flex flex-col items-center cursor-pointer justify-center w-full pr-10'
            to='/'
          >
            <img src={logo} alt='Logo' className={`w-8 md:w-12`} />
            <h1 className='text-xs md:text-base'>
              <strong>{TextMessage('app.title')}</strong>
            </h1>
          </Link>
        </div>
      </nav>
      <aside
        className={`transform top-0 left-0 w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 bg-white 
          fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            openMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className='flex flex-col space-y-3'>
          <div className='flex items-center justify-end cursor-pointer pr-3 pt-3'>
            <SvgIcon onClick={() => dispatch(menu(false))}>
              <path d={CLOSE_MENU_ICON}></path>
            </SvgIcon>
          </div>
          <div className='flex flex-col'>
            <MenuListPatient />
          </div>
        </div>
      </aside>
      <main
        className={`flex py-20 w-12/12 h-screen justify-center ${
          openMenu ? 'opacity-50' : ''
        }`}
        onClick={() => dispatch(menu(false))}
      >
        {children}
      </main>
    </div>
  );
};

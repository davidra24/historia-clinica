import React from 'react';
import { ItemDrawer } from './ItemDrawer';
import { HOME_ICON } from '../../util/svgIcons';

export const MenuListPatient = () => (
  <>
    <div className='flex flex-col justify-center flex-wrap'>
      <ItemDrawer path='/' title='Inicio' icon={HOME_ICON} />
    </div>
  </>
);

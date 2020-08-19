import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const ItemDrawer = ({ path, title, icon, color }: any) => (
  <Link to={path} className=''>
    <div className='flex justify-center text-xl items-center hover:bg-indigo-500 hover:text-white p-4'>
      <span className='flex items-center space-x-5'>
        <SvgIcon color={color}>
          <path d={icon} />
        </SvgIcon>
        <span>{title}</span>
      </span>
    </div>
  </Link>
);

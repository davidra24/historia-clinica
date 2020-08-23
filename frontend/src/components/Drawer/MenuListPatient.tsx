import React from 'react';
import { ItemDrawer } from './ItemDrawer';
import { PROFILE_ICON } from '../../util/svgIcons';
import { TextMessage } from '../../lang/TextMessage';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { menu } from '../../redux/actions';

export const MenuListPatient = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex flex-col justify-center'>
        <Link to='/profile'>
          <ItemDrawer title={TextMessage('app.profile')} icon={PROFILE_ICON} />
        </Link>
      </div>
    </>
  );
};

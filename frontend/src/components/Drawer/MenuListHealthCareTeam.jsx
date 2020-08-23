import React from 'react';
import { Link } from 'react-router-dom';
import { ItemDrawer } from './ItemDrawer';
import { PROFILE_ICON } from '../../util/svgIcons';
import { TextMessage } from '../../lang/TextMessage';

export const MenuListHealthCareTeam = () => (
  <>
    <div className='flex flex-col justify-center'>
      <Link to='/profile'>
        <ItemDrawer title={TextMessage('app.profile')} icon={PROFILE_ICON} />
      </Link>
    </div>
  </>
);

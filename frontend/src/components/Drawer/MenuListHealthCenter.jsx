import React from 'react';
import { Link } from 'react-router-dom';
import { ItemDrawer } from './ItemDrawer';
import { TextMessage } from '../../lang/TextMessage';
import { PROFILE_ICON_HEALTH_CENTER } from '../../util/svgIcons';

export const MenuListHealthCenter = () => (
  <>
    <div className='flex flex-col justify-center'>
      <Link to='/profile' className=''>
        <ItemDrawer
          title={TextMessage('app.profile')}
          icon={PROFILE_ICON_HEALTH_CENTER}
        />
      </Link>
    </div>
  </>
);

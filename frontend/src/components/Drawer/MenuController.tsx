import React from 'react';
import { MenuListPatient } from './MenuListPatient';
import { MenuListHealthCareTeam } from './MenuListHealthCareTeam';
import { MenuListHealthCenter } from './MenuListHealthCenter';
import { IStore } from '../../redux/types';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { defaultState } from '../../redux/actions';
import { TextMessage } from '../../lang/TextMessage';
import { Link } from 'react-router-dom';
import { ItemDrawer } from './ItemDrawer';
import { HOME_ICON, LOGOUT_ICON } from '../../util/svgIcons';

export const MenuController = () => {
  const user = useSelector((state: IStore) => state.user);
  const person = useSelector((state: IStore) => state.person);
  const healthCenter = useSelector((state: IStore) => state.healthCenter);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();

  const logout = () => {
    removeCookie('token');
    dispatch(defaultState());
  };

  return (
    <div className='flex flex-col'>
      <Link to='/' className=''>
        <ItemDrawer title={TextMessage('app.start')} icon={HOME_ICON} />
      </Link>
      {user &&
        (user.document_type
          ? person &&
            (person?.is_healt_care_team ? (
              <MenuListHealthCareTeam />
            ) : (
              <MenuListPatient />
            ))
          : healthCenter && <MenuListHealthCenter />)}
      <div className='cursor-pointer' onClick={logout}>
        <ItemDrawer title={TextMessage('app.logout')} icon={LOGOUT_ICON} />
      </div>
    </div>
  );
};

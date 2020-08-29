import React, { useState } from 'react';
import { TableRow, TableCell, Switch } from '@material-ui/core';
import { IViewAttentionCenter } from '../../data/IViewAttentionCenter';
import { MiniLoading } from '../Loading/MiniLoading';
import { put } from '../../util/httpUtil';
import { HTTP_ATTENTIONS_CENTER } from '../../util/constants';
import { AnyNaptrRecord } from 'dns';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../redux/types';
import { IHealthAttentionCenter } from '../../data/IHealthAttentionCenter';
import { IAttentionCenter } from '../../data/IAttentionCenter';
import { useAlert } from '../../hooks/useAlert';

interface propsBody {
  aCenter: IViewAttentionCenter;
}

export const BodyTable = ({ aCenter }: propsBody) => {
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);
  const token: string = useSelector((state: IStore) => state.token);
  const [checked, setChecked] = useState<boolean>(
    aCenter.active_attention_center
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeEnabled = async () => {
    setLoading(true);
    const {
      id_health_center,
      specialty_id,
      document_health_professional,
    } = aCenter;
    const attentionCenter: IAttentionCenter = {
      id: id_health_center,
      document: document_health_professional,
      id_specialty: specialty_id,
      active: !checked,
    };
    const response = await put<IHealthAttentionCenter>(
      HTTP_ATTENTIONS_CENTER,
      id_health_center,
      { attentionCenter },
      token,
      document_health_professional
    );
    if (response) {
      const { ok, data, message } = response;
      if (ok) {
        setChecked(!checked);
        alert(
          'dashboard-health-update.success-title',
          'updateAttentionCenter.success',
          'success'
        );
      } else {
        alert(
          'dashboard-health-update.error-title',
          'updateAttentionCenter.error',
          'error'
        );
      }
    } else {
      alert(
        'dashboard-health-update.success-title',
        'app.not-server',
        'success'
      );
    }

    setLoading(false);
  };

  return (
    <>
      <TableRow key={aCenter.document_health_professional}>
        <TableCell component='th' scope='row'>
          {`${aCenter.health_professional_first_name} ${
            aCenter.health_professional_second_name
              ? aCenter.health_professional_second_name
              : ''
          } ${aCenter.health_professional_lastname} ${
            aCenter.health_professional_last_second_name
              ? aCenter.health_professional_last_second_name
              : ''
          }`}
        </TableCell>
        <TableCell>{aCenter.health_professional_phone}</TableCell>
        <TableCell>{aCenter.specialty_name}</TableCell>
        <TableCell align='center'>
          {loading ? (
            <MiniLoading />
          ) : (
            <Switch
              checked={checked}
              onChange={handleChangeEnabled}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

import React, { useState } from 'react';
import { TableRow, TableCell, Switch } from '@material-ui/core';
import { IViewAttentionCenter } from '../../data/IViewAttentionCenter';
import { MiniLoading } from '../Loading/MiniLoading';
import { put } from '../../util/httpUtil';
import { HTTP_ATTENTIONS_CENTER } from '../../util/constants';
import { AnyNaptrRecord } from 'dns';
import { useSelector } from 'react-redux';
import { IStore } from '../../redux/types';

export const BodyTable = ({ attentionCenter }: any) => {
  const token: string = useSelector((state: IStore) => state.token);
  const [checked, setChecked] = useState<boolean>(
    attentionCenter.active_attention_center
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeEnabled = async () => {
    setLoading(true);
    const { id_health_center } = attentionCenter;
    //todo
    //const response = await put<IHealthAttentionCenter>(HTTP_ATTENTIONS_CENTER, id, {atte}, token )
    //if ok setChecked(!checked);

    setLoading(false);
  };

  return (
    <>
      <TableRow key={attentionCenter.document_health_professional}>
        <TableCell component='th' scope='row'>
          {`${attentionCenter.health_professional_first_name} ${
            attentionCenter.health_professional_second_name
              ? attentionCenter.health_professional_second_name
              : ''
          } ${attentionCenter.health_professional_lastname} ${
            attentionCenter.health_professional_last_second_name
              ? attentionCenter.health_professional_last_second_name
              : ''
          }`}
        </TableCell>
        <TableCell>{attentionCenter.health_professional_phone}</TableCell>
        <TableCell>{attentionCenter.specialty_name}</TableCell>
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

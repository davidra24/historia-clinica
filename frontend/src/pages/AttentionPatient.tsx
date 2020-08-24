import React from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';

export const AttentionPatient = () => {
  const selectedAttentionCenter = useSelector(
    (state: IStore) => state.selectedAttentionCenter
  );

  console.log(selectedAttentionCenter);

  return (
    <>
      <h1>attentionpatient</h1>
    </>
  );
};

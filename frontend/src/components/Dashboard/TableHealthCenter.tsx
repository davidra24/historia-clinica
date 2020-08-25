import React from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { PropsTableHealthCenter } from '../../data/PropsTableHealthCenter';
import { BodyTable } from './BodyTable';

export const TableHealthCenter = ({
  arrayAttentionCenter,
}: PropsTableHealthCenter) => {
  const handleChangeEnabled = () => {};

  return (
    <>
      <div className='flex w-8/12 justify-center'>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  {TextMessage('dashboard-health.name-professional')}
                </TableCell>
                <TableCell>
                  {TextMessage('dashboard-health.phone-professional')}
                </TableCell>
                <TableCell>
                  {TextMessage('dashboard-health.specialty-professional')}
                </TableCell>
                <TableCell>
                  {TextMessage('dashboard-health.enabled-professional')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayAttentionCenter.map((attentionCenter) => (
                <BodyTable
                  key={attentionCenter}
                  attentionCenter={attentionCenter}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

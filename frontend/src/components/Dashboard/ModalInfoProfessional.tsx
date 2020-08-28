import React from 'react';
import { IPerson } from '../../data/IPerson';
import { ISpecialty } from '../../data/ISpecialty';
import { Modal, Card } from '@material-ui/core';
import { ShowProfilePerson } from '../Profile/ShowProfilePerson';

interface propsInfoProfessional {
  professional: IPerson;
  specialty: ISpecialty;
  open: boolean;
  handleClose: any;
  EPSName?: string;
  ProfessionName?: string;
  handleSubmit: any;
}

export const ModalInfoProfessional = ({
  professional,
  specialty,
  open,
  handleClose,
  EPSName,
  ProfessionName,
  handleSubmit,
}: propsInfoProfessional) => {
  return (
    <>
      <Modal
        className='flex items-center justify-center w-screen h-screen'
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        BackdropProps={{
          timeout: 1000,
        }}
      >
        {professional && specialty && (
          <div className='flex w-10/12 h-screen justify-center border-none bg-gray-100 m-auto p-10'>
            <div className='flex justify-center w-full h-auto overflow-auto'>
              <ShowProfilePerson
                setShow={undefined}
                EPSName={EPSName}
                ProfessionName={ProfessionName}
                person={professional}
                handleSubmit={handleSubmit}
                speacialtyName={specialty.name}
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

import React, { useState, useRef } from 'react';
import { Modal, Button, Card, CardHeader, SvgIcon } from '@material-ui/core';
import { useQuillValue } from '../../../hooks/useInput';
import { propsAnnotationModal } from '../../../data/propsAnnotationModal';
import { CLOSE_ICON } from '../../../util/svgIcons';
import { TextMessage } from '../../../lang/TextMessage';

export const AnotationModal = ({
  titleCard,
  buttonText,
  onSaveAnnotation,
  saveText,
  readOnly,
  disableButton,
  subTitleCard,
  annotation,
  isCallback,
}: propsAnnotationModal) => {
  const [open, setOpen] = React.useState(false);

  const ReactQuill = require('react-quill');

  const auxAnnotation = useQuillValue(annotation);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveAnnotation = () => {
    onSaveAnnotation();
    handleClose();
  };

  return (
    <>
      <div className='flex flex-col justify-center w-6/12 md:w-4/12 lg:w-3/12 my-4'>
        <h4 className='text-center font-semibold text-lg'>{titleCard}</h4>
        {subTitleCard && (
          <p className='font-normal text-gray-700 text-center text-base my-2'>
            {subTitleCard}
          </p>
        )}
        <div className='mt-2 flex justify-center w-full'>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleOpen}
            className='w-10/12 md:w-8/12'
          >
            {buttonText}
          </Button>
        </div>
      </div>
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
        <div className='flex w-10/12 h-auto justify-center border-none bg-gray-100 m-auto p-10'>
          <Card className='w-full h-full'>
            <div className='flex justify-end w-full cursor-pointer'>
              <SvgIcon
                className='text-blue-600 mt-8 mr-8'
                onClick={handleClose}
              >
                <path d={CLOSE_ICON}></path>
              </SvgIcon>
            </div>
            <div className='flex flex-col justify-center h-full w-full'>
              <h3 className='text-center font-semibold text-2xl my-4'>
                {titleCard}
              </h3>
              <div className='flex h-64 w-full justify-center items-center mb-12'>
                {!isCallback ? (
                  <ReactQuill
                    className='w-10/12 h-full'
                    readOnly={readOnly}
                    theme='snow'
                    modules={ReactQuill.modules}
                    formats={ReactQuill.formats}
                    {...annotation}
                    disabled={true}
                  />
                ) : (
                  <ReactQuill
                    className='w-10/12 h-full'
                    readOnly={readOnly}
                    theme='snow'
                    modules={ReactQuill.modules}
                    formats={ReactQuill.formats}
                    {...auxAnnotation}
                    disabled={true}
                  />
                )}
              </div>
              <div className='mt-16 mb-4 md:my-4 flex justify-center w-full'>
                {!disableButton && (
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={saveAnnotation}
                    className='w-8/12 md:w-6/12 lg:w-4/12'
                  >
                    {saveText}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </Modal>
    </>
  );
};

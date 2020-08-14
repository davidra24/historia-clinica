import React, { useState } from 'react';
import { Drawer } from '../components/Drawer';
import { createStore } from 'redux';

export const Container = ({ children }: any) => {
  return (
    <>
      <Drawer>{children}</Drawer>
    </>
  );
};

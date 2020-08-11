import React, { useState } from 'react';
import { Header } from '../components/Header';
import { createStore } from 'redux';

export const Container = ({ children }: any) => {
  const [menuClick, setMenuClick] = useState(false);
  const [layoutMode, setLayoutMode] = useState('static');
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const [staticMenuInactive, setStaticMenuInactive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function handleToggleMenu(event: any) {
    setMenuClick(true);

    function isDesktop() {
      return window.innerWidth > 1024;
    }

    if (isDesktop()) {
      if (layoutMode === 'overlay') {
        setOverlayMenuActive(!overlayMenuActive);
      } else if (layoutMode === 'static') {
        setStaticMenuInactive(!staticMenuInactive);
      }
    } else {
      setMobileMenuActive(!mobileMenuActive);
    }

    event.preventDefault();
  }

  return (
    <>
      <div className='p-grid'>
        <div className='p-col-12'></div>
        <Header onToggleMenu={handleToggleMenu} />
        <div className='p-col-12'>{children}</div>
      </div>
    </>
  );
};

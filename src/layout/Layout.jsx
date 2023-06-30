import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
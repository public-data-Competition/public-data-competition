import { Box, Container, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl" >
        <Box sx={{ height: '100%', minHeight: '100vh', pt: 1 }} >
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Layout;
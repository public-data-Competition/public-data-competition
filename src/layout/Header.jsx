import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Avatar, Button, GlobalStyles, Grid, Link, Menu, MenuItem } from '@mui/material';

import AuthContext from '../store/auth-context';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      cursor: 'pointer',
    },
    children: `${name.split(' ')[0][0]}`,
    // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const authCtx = useContext(AuthContext);
  const openMember = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuClickHandler = event => {
    setAnchorEl(event.currentTarget);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate(`/signin`);
  };

  const headerButtons = authCtx.isLoggedIn ? (
    <>
      <Avatar {...stringAvatar('Test')} onClick={menuClickHandler} />
      <Menu anchorEl={anchorEl} open={openMember} onClose={handleClose}>
        <MenuItem>
          <Button
            color="inherit"
            onClick={() => {
              handleClose();
              logoutHandler();
            }}
            sx={{ color: '##2E4230', fontWeight: 'bold', fontSize: '14px' }}
          >
            로그아웃
          </Button>
        </MenuItem>
      </Menu>
    </>
  ) : (
    <Link
      variant="button"
      href="/signin"
      fontWeight="800"
      sx={{ my: 1, mx: 1.5, color: 'white', textDecoration: 'none' }}
    >
      <Button sx={{ color: '#2E4230', fontWeight: 'bold', fontSize: '14px' }}>
      로그인/회원가입
      </Button>
    </Link>

  );


  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: '#F7F9F8' }}
    >
      <Toolbar>
        <Grid container sx={{alignItems:'center'}}>
          <Grid item xs={3} >
            <img onClick={() => { navigate('/') }} alt="logo" src={`./logo.PNG`} style={{ width: '200px' }} />
          </Grid>
          <Grid item xs={2.2}>
            <Link
              variant="button"
              href="#"
              fontWeight="800"
              sx={{ my: 1, mx: 1.5, color: '#2E4230', textDecoration: 'none' }}
            >
              애니타임 소개
            </Link>
          </Grid>
          <Grid item xs={2.2}>
            <Link
              variant="button"
              href="#"
              fontWeight="800"
              sx={{ my: 1, mx: 1.5, color: '#2E4230', textDecoration: 'none' }}
            >
              마음터
            </Link>
          </Grid>
          <Grid item xs={2.2}>
            <Link
              variant="button"
              href="#"
              fontWeight="800"
              sx={{ my: 1, mx: 1.5, color: '#2E4230', textDecoration: 'none' }}
            >
              성장일기
            </Link>
          </Grid>
          <Grid item xs={2.2}>
            {headerButtons}
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  )
};

export default Header;
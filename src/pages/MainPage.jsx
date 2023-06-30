import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Chatbot from "../chat/Chatbot";
import { Typography,Grid } from '@mui/material';

const MainPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* style={{ backgroundColor: '#2B90D9' }} */}
      {/* Hero unit */}
      <Grid container p="20px" sx={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor: '#2B90D9'}}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontSize: '40px',fontWeight:'bold',color:'white' }}>잠시 쉬어가도 괜찮아</Typography>
        </Grid>
        <Grid item xs={12} sx={{ position: 'relative' }} md={6}>
          <img alt="logo" src="./phone2.png" style={{ width: '60%' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Chatbot />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MainPage;
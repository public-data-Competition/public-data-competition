import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Chatbot from "../chat/Chatbot";
import { Typography, Grid, Skeleton, Link } from '@mui/material';

const MainPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Grid container p="20px" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} md={7}>
          <div>
            <img alt="ment" src="./ment.png" style={{ width: '50%' }} />
          </div>
          <div>
            <Link
              variant="button"
              href="/service/stress"
              sx={{ my: 1, mx: 1.5, color: '#2E4230', textDecoration: 'none' }}
            >
              <img alt="stress" src="./stress.png" style={{ width: '25%', margin: '8px' }} />
            </Link>
            <Link
              variant="button"
              href="/service/peace"
              sx={{ my: 1, mx: 1.5, color: '#2E4230', textDecoration: 'none' }}
            >
              <img alt="mind" src="./mind.png" style={{ width: '25%', margin: '8px' }} />
            </Link>
            <Link
              variant="button"
              href="/service/health"
              sx={{ my: 1, mx: 1.5, color: '#2E4230', textDecoration: 'none' }}
            >
              <img alt="health" src="./health.png" style={{ width: '25%', margin: '8px' }} />
            </Link>


          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Typography sx={{ color: '#435645', fontWeight: '800' }}>애니타임 프로모션</Typography>
            <Typography sx={{ color: '#435645', fontSize: "0.9em" }}>더 많은 정보를 알고 싶다면? </Typography>
          </div><br />
          <Skeleton variant="rounded" height={90} width="80%" sx={{ margin: "0 auto", marginBottom: '8px' }} />
          <Skeleton variant="rounded" height={90} width="80%" sx={{ margin: "0 auto" }} />

        </Grid>
        <Grid item xs={12} sx={{ position: 'relative' }} md={5}>
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
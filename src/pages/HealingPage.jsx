import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import { Divider,Box, Checkbox, FormControlLabel, FormGroup,  Typography, Grid, } from '@mui/material';

const HealingPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <div>
        <Typography textAlign="left" sx={{ color: '#8E8E8E' }}>위치 지정</Typography><br /><br />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="직장인 동호회" sx={{ color: '#8E8E8E' }} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="주변 맛집" sx={{ color: '#8E8E8E' }} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="원데이 클래스" sx={{ color: '#8E8E8E' }} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="액티비티" sx={{ color: '#8E8E8E' }} />
        </FormGroup>
      </div>
      <Grid></Grid>
    </Box>
  );
}

export default HealingPage;
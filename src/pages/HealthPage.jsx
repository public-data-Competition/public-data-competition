import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Skeleton } from '@mui/material';

import { PUBLIC_URL } from '../global_variables';
import useHttpRequest from '../hook/use-http';
const HealthPage = () => {
  const { isLoading, sendGetRequest } = useHttpRequest();
  const navigate = useNavigate();

  useEffect(() => {
    const getPublicDataHandler = data => {
      console.log(data.data);
    };
    sendGetRequest(`${PUBLIC_URL}/B490001/sjHptMcalPstateInfoService`, getPublicDataHandler);
  }, []);

  return (
    <>
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="산재병원 의료 현황정보" />
        <FormControlLabel control={<Checkbox />} label="근로자 건강센터 현황" />
        <FormControlLabel control={<Checkbox />} label="근로자 건강증진활동 관련 민관전문기관" />
        <FormControlLabel control={<Checkbox />} label="산재재활기관관리정보" />
      </FormGroup>
      <Box height="900px" >
        <Skeleton height="100%">

        </Skeleton>
      </Box>
    </>
  );
}

export default HealthPage;
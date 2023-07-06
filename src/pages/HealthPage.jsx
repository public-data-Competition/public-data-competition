import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, FormControlLabel, FormGroup, Skeleton } from '@mui/material';

import { PUBLIC_URL } from '../global_variables';
import useHttpRequest from '../hook/use-http';
import KakaoMap from '../components/KakaoMap';

const HealthPage = () => {
  const { isLoading, sendGetRequest } = useHttpRequest();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getPublicDataHandler = data => {
  //     console.log(data);
  //   };
  //   sendGetRequest(`${PUBLIC_URL}/B490001/sjHptMcalPstateInfoService/getSjJijeongHptChakgiList?serviceKey=QTM%2Bsk32UMfVLD9pw13UXm%2FIAaDOGy3I0zKkbgdbppFTEg95hFdZpOOkgoesQwT48dig8oY7f3R9PC3%2Fw%2Fm8KQ%3D%3D`, getPublicDataHandler);
  // }, []);

  return (
    <>
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="산재병원 의료 현황정보" />
        <FormControlLabel control={<Checkbox />} label="근로자 건강센터 현황" />
        <FormControlLabel control={<Checkbox />} label="근로자 건강증진활동 관련 민관전문기관" />
        <FormControlLabel control={<Checkbox />} label="산재재활기관관리정보" />
      </FormGroup>
      <Box height="900px" >
        <KakaoMap/>
        {/* <Skeleton width="100vw" height="100vh"></Skeleton> */}
      </Box>
    </>
  );
}

export default HealthPage;
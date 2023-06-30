import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import { Box, Checkbox, FormControlLabel, FormGroup, Skeleton } from '@mui/material';

const HealthPage = () => {
  const navigate = useNavigate();

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
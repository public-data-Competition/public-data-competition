import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';
import good from "../data/good.json";
import happy from "../data/happy.json";
import { Box } from '@mui/system';
import { Grid, Typography } from "@mui/material";

const StressResultPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <center style={{ marginTop: '100px' }}>
        <Lottie className="result-icon" animationData={good} />
        <Typography>00님의 스트레스 지수는 '정상' 수준입니다.</Typography><br /><br />
        <div className='basic basic-wrap'>
          <img alt="happy" src="/any-good.png" className="happy" />
          <img alt="talk" src="/talk.png" style={{ width: '70%' }} />
        </div>
        <Typography color="#AFC0B3" fontSize="13px">본 결과는 정신건강에 대한 대체적인 경향을 체크할 수 있도록 제공된 것 입니다.<br />
          정확한 증상과 판단을 위해서는 전문가의 상담 또는 진료가 필요함을 안내드립니다.</Typography>
      </center>
      <Grid container className="basic" mt="50px">
        <Grid item xs={3.5} className="result-path basic-row" margin="4px">
          <img alt="마음검진" src={`/panic.png`} />
          <Typography>마음검진</Typography>
        </Grid>
        <Grid item xs={3.5} className="result-path basic-row " margin="4px">
          <img alt="소리산책" src={`/mindset.png`} />
          <Typography>소리산책</Typography>
        </Grid>
        <Grid item xs={3.5} className="result-path basic-row " margin="4px">
          <img alt="건강지도" src={`/mapIcon.png`} />
          <Typography>건강지도</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StressResultPage;
import { Grid, Typography, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Lottie from "lottie-react";

import BasicTable from '../components/BasicTable';
import { mentState, totalScoreState } from "../store/store";
import SignIn from '../components/SignIn';
import surprised from "../data/surprised.json";
import good from "../data/good.json";
import worry from "../data/worry.json";
import angry from "../data/angry.json";



const StressResultPage = () => {
  const totalScore = useRecoilValue(totalScoreState)
  const navigate = useNavigate();
  const [animationData, setAnimationData] = useState(good);
  const [name, setName] = useState('아무개');
  const [range, setRange] = useState('');
  const [ment, setMent] = useState('');
  const [testment, setTestMent] = useRecoilState(mentState);

  function resultButton(totalScore) {
    return totalScore > 16 ? (
      <Grid container className="basic" mt="50px">
        <Grid item xs={3.5} className="result-path basic-row" margin="4px">
          {/* <img alt="애니와 대화하기" src={`/panic.png`} /> */}
          <Typography>애니와 대화하기</Typography>
          <Typography p="20px">주변 친구에게 말못할 고민이나 걱정, 뭐든지 나한테 말해도 돼</Typography>
        </Grid>
        <Grid item xs={3.5} className="result-path basic-row " margin="4px">
          {/* <img alt="소리산책" src={`/mindset.png`} /> */}
          <Typography>소리산책</Typography>
          <Typography p="20px">일상 속에서 자연의 소리를 들으며 마음의 안정을 느낄 수 있어</Typography>
        </Grid>
        <Grid item xs={3.5} className="result-path basic-row " margin="4px">
          {/* <img alt="성장일기" src={`/mapIcon.png`} /> */}
          <Typography>성장일기</Typography>
          <Typography p="20px">매일을 기록하다 보면 성장한 너를 발견할 수 있을 거야</Typography>
        </Grid>
        <Typography color="#AFC0B3" fontSize="13px">본 결과는 정신건강에 대한 대체적인 경향을 체크할 수 있도록 제공된 것 입니다.<br />
          정확한 증상과 판단을 위해서는 전문가의 상담 또는 진료가 필요함을 안내드립니다.</Typography>
      </Grid>
    ) : (
      <div
        className='basic basic-wrap'
        onClick={() => { navigate('/test') }}
      >
        <img alt="stressButton" src="/button2.png" style={{ width: '350px' }} />
      </div>
    )
  }

  useEffect(() => {
    setTestMent(`추가검진을 하러 와줘서 고마워 마음 편하게 너의 기분을 표시해주면 좋겠어! 나는 항상 너를 응원하는 거 알지?`);
    if (totalScore >= 0 && totalScore <= 12) {
      setMent(`${name}아 건강한 스트레스 관리를 하고 있구나 애니타임으로 건강한 정신건강을 유지하길 바라! 아래 버튼을 클릭하면 바로 이용할 수 있어`);
      setRange('정상');
      setAnimationData(good);
    } else if (totalScore >= 13 && totalScore <= 15) {
      setMent(`조금 지쳐 있는 ${name}아! 이런 서비스를 이용하며 스트레스 관리를 해보는 것은 어떨까? 아래 버튼을 클릭하면 바로 이용할 수 있어`);
      setRange('경도');
      setAnimationData(surprised);
    } else if (totalScore >= 16 && totalScore <= 17) {
      setMent(`회사 일이 힘들었구나. 스트레스 지수가 높게 나오는 데 추가 테스트를 해보는 건 어때?`);
      setRange('중도');
      setAnimationData(worry);

    } else if (totalScore >= 18) {
      setMent(`회사 일이 힘들었구나. 스트레스 지수가 높게 나오는 데 추가 테스트를 해보는 건 어때?`);
      setRange('고도');
      setAnimationData(angry);
    }
  }, []);

  return (
    <Box>
      <center style={{ marginTop: '100px' }}>
        <Lottie className="result-icon" animationData={animationData} />
        <Typography>{name}님의 스트레스 지수는 {totalScore}점, {range} 수준입니다.</Typography><br /><br />
        <div className='basic basic-wrap'>
          <img alt="happy" src="/any-good.png" className="happy" />
          <div class="image-container">
            <img alt="talk" src="/talk.png" style={{ width: '70%' }} />
            <div class="text-overlay">{ment}</div>
          </div>
        </div>
      </center>
      {resultButton(totalScore)}

    </Box>
  );
}

export default StressResultPage;
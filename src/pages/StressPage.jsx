import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';
import { Box } from '@mui/system';
import { useState,useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mentState, nameState } from '../store/store';

const StressPage = () => {
  const navigate = useNavigate();
  const [name,setName] = useRecoilState(nameState);
  const [ment, setMent] = useRecoilState(mentState)

  useEffect(() => {
    setMent(`${name}야 요즘 회사생활은 어때? 업무가 너무 많거나, 동료들이 힘들게 하진 않고? 너의 상황은 알려주면 그에 맞는 스트레스 관리 방법을 알려줄게!`);
  }, []);
  return (
    <Box>
      <center style={{marginTop:'100px'}}>
        <img alt="stress1" src="/stress1.png" style={{ width: '80%' }} />
        <div 
        className='basic basic-wrap'
        onClick={()=>{navigate('/test')}} 
        style={{ width: '220px' }}
        >
          <img alt="stressButton" src="/stressButton.png" style={{ width: '220px' }} />
        </div>
      </center>
    </Box>
    // <BasicTable/>
  );
}

export default StressPage;
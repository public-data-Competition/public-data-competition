import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';
import { Box } from '@mui/system';

const StressResultPage = () => {
  const navigate = useNavigate();

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

export default StressResultPage;
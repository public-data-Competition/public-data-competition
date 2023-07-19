import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';
import { Box } from '@mui/system';

const StressPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <center>
        <div className='basic basic-wrap'>
          <img alt="smile" src="/smile.png" style={{ width: '10%', marginRight: '20px' }} />
          <img alt="talk" src="/talk.png" style={{ width: '70%' }} />
        </div>
        <img alt="stress1" src="/stress1.png" style={{ width: '80%' }} />
        <div 
        className='basic basic-wrap'
        onClick={()=>{navigate('/test')}} 
        style={{ width: '220px' }}
        >
          <img alt="stressButton" src="/stressButton.png" style={{ width: '80%' }} />
        </div>
      </center>
    </Box>
    // <BasicTable/>
  );
}

export default StressPage;
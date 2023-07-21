import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import { Box } from '@mui/system';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';
import happy from "../data/happy.json";
const StressTestPage = () => {
  const navigate = useNavigate();

  return (
    <>
    
      <div className='basic basic-wrap'>
      <Lottie className="happy" animationData={happy}/>
        {/* <img alt="smile" src="/smile.png" style={{ width: '10%', marginRight: '20px' }} /> */}
        <img alt="talk" src="/talk.png" style={{ width: '70%' }} />
      </div>
      <BasicTable />
    </>
  );
}

export default StressTestPage;
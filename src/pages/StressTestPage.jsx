import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';
import { Box } from '@mui/system';

const StressTestPage = () => {
  const navigate = useNavigate();

  return (
    <BasicTable/>
  );
}

export default StressTestPage;
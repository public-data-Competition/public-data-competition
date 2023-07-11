import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import BasicTable from '../components/BasicTable';

const StressPage = () => {
  const navigate = useNavigate();

  return (
    <BasicTable/>
  );
}

export default StressPage;
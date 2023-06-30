import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';

const StressPage = () => {
  const navigate = useNavigate();

  return (
    <div>스트레스 지수 페이지</div>
  );
}

export default StressPage;
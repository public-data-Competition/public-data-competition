import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <SignIn />
  );
}

export default SignInPage;
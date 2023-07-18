import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import { Grid } from '@mui/material';

const IntrodecePage = () => {
  const navigate = useNavigate();

  return (
    <Grid container mt="90px">
      <Grid item xs={2}>
        <img alt="smile" src="./smile.png" style={{ width: '50%' }} />
      </Grid>
      <Grid item xs={10}>
        <img alt="introduce" src="./introduce.png" style={{ width: '100%'}} />
      </Grid>
    </Grid>
  );
}

export default IntrodecePage;
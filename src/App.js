import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';
import './App.css';
import Layout from './layout/Layout';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ServicePage from './pages/ServicePage';
import StressPage from './pages/StressPage';
import PeacePage from './pages/PeacePage';
import HealthPage from './pages/HealthPage';
import HealingPage from './pages/HealingPage';
import IntrodecePage from './pages/IntrodecePage';
import StressTestPage from './pages/StressTestPage';
import StressResultPage from './pages/StressResultPage';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif"
    },
    palette: {
      primary: {
        light: '#FFF9E6',
        main: '#2E4230',
        dark: '#D9E1E8',
        contrastText: 'white',
      },
      secondary: {
        light: '#FFF9E6',
        main: '#2E4230',
        dark: '#D9E1E8',
        contrastText: 'white',
      },
      common: {
        light: '#f5faf8',
        main: '#3da684',
        dark: '#2a7e63',
        contrastText: 'white',
      },
    },
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="signin" element={<SignInPage />} />
                <Route path="introduce" element={<IntrodecePage />} />
                <Route path="healing" element={<HealingPage />} />
                <Route path="test" element={<StressTestPage />} />
                <Route path="result" element={<StressResultPage />} />
                <Route path="service" element={<ServicePage />}>
                  <Route path="stress" element={<StressPage />} />
                  <Route path="peace" element={<PeacePage />} />
                  <Route path="health" element={<HealthPage />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </RecoilRoot >
  );
}

export default App;

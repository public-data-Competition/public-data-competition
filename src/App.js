import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';
import './App.css';
import Layout from './layout/Layout';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#FFF9E6',
        main: '#2B90D9',
        dark: '#D9E1E8',
        contrastText: 'white',
      },
      secondary: {
        light: '#FFF9E6',
        main: '#2B90D9',
        dark: '#D9E1E8',
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
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            </Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

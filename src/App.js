import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';
import './App.css';
import MainPage from './pages/MainPage';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#FFF9E6',
        main: '#FCC400',
        dark: '#FCC400',
        contrastText: 'white',
      },
      secondary: {
        light: '#A48FFA',
        main: '#FCC400',
        dark: '#A48FFA',
        contrastText: '#000',
      },
    },
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

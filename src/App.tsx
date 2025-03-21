import { ThemeProvider } from '@mui/material';
import './App.css'
import LandingPage from './pages/LandingPage'
import { globalTheme } from './themes/globalTheme';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <LandingPage />
    </ThemeProvider>
  )
}

export default App

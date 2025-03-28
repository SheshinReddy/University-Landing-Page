import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { globalTheme } from './themes/globalTheme';
import "@fontsource/urbanist/index.css"
import App from './App';
import { UniversityProvider } from './context/UniversityContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UniversityProvider>
      <ThemeProvider theme={globalTheme}>
        <App /> {/* Use App.tsx here */}
      </ThemeProvider>
    </UniversityProvider>
  </StrictMode>,
)

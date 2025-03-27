import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from "react-router-dom";
import { homePageRouter } from "./routes/HomePageRoutes";
import { ThemeProvider } from '@emotion/react';
import { globalTheme } from './themes/globalTheme';
import "@fontsource/urbanist/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={globalTheme}>
      <RouterProvider router={homePageRouter} />
    </ThemeProvider>
  </StrictMode>,
)

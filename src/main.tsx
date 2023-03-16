import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './routes'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './configs';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PermanentDrawerLeft>
        <Router />
      </PermanentDrawerLeft>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './routes'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './configs';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PermanentDrawerLeft>
        <Router />
      </PermanentDrawerLeft>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

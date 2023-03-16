import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
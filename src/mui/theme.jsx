'use client';
import { createTheme } from '@mui/material/styles';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#045496"
    },
    secondary: {
      main: 'rgb(254 151 76)'
    },
    background: {
      paper: '#1a1919',
      default: '#1a1919',
    },
    error: {
      main: '#ff1200',
    },
    info: {
      main: '#ffffff'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  }

});

export default theme;
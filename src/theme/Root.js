import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import theme from './theme';

// Default implementation, that you can customize
export default function Root({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

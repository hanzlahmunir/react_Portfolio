import React, { createContext, useMemo, useState, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#1976d2'
                    },
                    background: {
                        default: mode === 'dark' ? '#121212' : '#f4f6f8',
                        paper: mode === 'dark' ? '#1e1e1e' : '#fff'
                    }
                },
                shape: { borderRadius: 8 }
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

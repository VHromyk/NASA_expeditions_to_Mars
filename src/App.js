import * as React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: 'orange',
                    borderRadius: 100,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: 264,
                    height: 40,
                },
            },
        },
        
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'grey',
                },
            },
        },
    },
});



function App() {
    return (
        <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>
            <Gallery />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;

import * as React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: 'orange',
                    borderRadius: 100,
                    '&:hover': {
                        backgroundColor: '#EF6C00',
                    },
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
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'orange',
                    color: 'white',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Gallery />
    </ThemeProvider>
  );
}

export default App;

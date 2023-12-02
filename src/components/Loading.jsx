'use client'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export const Loading = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#354676'
            },
            secondary: {
                main: '#CAA55E',
            },
        },
    });
    return (
        <div className='loading'>
            <img src="/img/logo.webp" alt="Vitrina Colombia" />
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '50%' }}>
                    <LinearProgress color='primary' />
                </Box>
            </ThemeProvider>
        </div>
    )
}

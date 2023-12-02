'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { isNull } from 'lodash';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { LayoutInmuebles } from '../../Templates/LayoutInmuebles';

export default function InmFavoritos() {
    const router = useRouter();
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
        const dataInmFavoritos = () => {
            const response = localStorage?.getItem('favoritos');

            if (!isNull(response)) {
                const data = JSON.parse(response);
                setFavoritos(data);
            } else {
                router.push('/');
            }
            setLoading(true);
        }

        dataInmFavoritos();


    }, [router]);

    return (
        <div>
            {loading ? 
                <LayoutInmuebles
                    loading={loading}
                    inmuebles={favoritos}
                    Notion={false}
                    Elim={true}
                    fav={true}
                />
                : 
    
                <div className='loading'>
                    <img src="/img/colraicesInmobiliario/home/logo.svg" alt="Portal Inmobiliario" />
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: '50%' }}>
                            <LinearProgress color='primary' />
                        </Box>
                    </ThemeProvider>
                </div>
            }
        </div>
            
    )
}

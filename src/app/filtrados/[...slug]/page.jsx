'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation';
import { LayoutInmuebles } from '../../../Templates/LayoutInmuebles';
import { APIURL } from '../../../config';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import LinearProgress from '@mui/material/LinearProgress';

export default function InmFiltrados() {
    const { slug } = useParams();
    const query = useSearchParams();
    const [city = '0', type = '0', state = '0'] = slug || []
    const typeProperty = type === "Otros" ? "Cabaña" : type;

    const [loading, setLoading] = useState(false);
    const [inm, setInm] = useState(false);
    const [inmuebles, setInmuebles] = useState([]);

    const objectQuery = Object.fromEntries(query.entries());
    const properties = ["habitaciones", "area-desde", "area-hasta", "banos", "desde", "hasta"];
    const objectValidate = properties.reduce((obj, property) => {
        obj[property] = objectQuery[property] || "0";
        return obj;
    }, {});

    let urlApi = `${APIURL}filtro?city=${city}&type=${typeProperty}&state=${state}&rooms=${objectValidate.habitaciones}&areaFrom=${objectValidate['area-desde'] || '0'}&areaTo=${objectValidate['area-hasta']}&baths=${objectValidate.banos}&p1=${objectValidate.desde}&p2=${objectValidate.hasta}`;

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

        const fetchData = async () => {
            setInm(false);
            setLoading(false);
            const response = await fetch(urlApi);
            const data = await response.json();
            if (data?.data.length > 0) {
                setInmuebles(data.data);
            } else {
                const resp = await fetch(`${APIURL}filtro-region?city=${city}&state=${state}`);
                const data = await resp.json();
                setInmuebles(data.data);
                setInm(true);

            }
            setLoading(true);
        }

        fetchData();

    }, [urlApi, city, state]);


    return (
        <div>
            {loading ? 
                <LayoutInmuebles
                    loading={loading}
                    inmuebles={inmuebles}
                    Notion={true}
                    inm={inm}
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

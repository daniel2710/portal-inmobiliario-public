'use client'
import React, { useEffect, useState } from "react";
import { TitleSection } from "../components/TitleSection";
import { ItemInmueble } from "../molecules/ItemInmueble";
import { APIURL } from '../config';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const InmReciente = () => {

    const [inmueblesRecionetes, setInmueblesRecionetes] = useState([]);
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
        const inmueblesRes = async () => {
            const resp = await fetch(`${APIURL}properties`);
            const data = await resp.json();
            setInmueblesRecionetes(data.data);
            setLoading(true);
        }

        inmueblesRes();

    }, [])


    return (
        <section className="slider-recientes">
            <TitleSection title={"Nuevas"} span={'propiedades'}>
                Los mejores proyectos en nuestro país los encuentras aquí, con diferentes tipos de inmuebles, en las mejores ciudades de Colombia.
            </TitleSection>

            {loading ?
                <div className="container__reciente">
                    <Swiper
                        navigation={true}
                        pagination={{ dynamicBullets: true }}
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={8}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            930: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                        }}
                    >
                        {inmueblesRecionetes.map((inmuebleRecionete) => (
                            <SwiperSlide key={inmuebleRecionete.id} className="mySlide">
                                <ItemInmueble dataInmueble={inmuebleRecionete} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
                :
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '70%', margin: '4rem auto' }}>
                        <LinearProgress color='primary' />
                    </Box>
                </ThemeProvider>
            }


        </section>

    );
}


'use client'
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { APIURL } from '../config';
import { itemsEligenos } from '../helpers/options';
const ItemFeatured = dynamic(() => import('../molecules/ItemFeatured'), { ssr: false })
const ItemTextFeatured = dynamic(() => import('../molecules/ItemTextFeatured'), { ssr: false })


export const FeaturedProperties = () => {
    const [inmFeatured, setInmFeatured] = useState([]);
    const [loading, setLoading] = useState(false);
    const [width, setWidth] = useState(false);
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
        const featured = async () => {
            const response = await fetch(`${APIURL}likes`);
            const data = await response.json();
            setInmFeatured(data?.data);
            setLoading(true)
        }
        if (typeof window !== undefined) {
            if (window.innerWidth > 930) {
                setWidth(true)
            }
        }
        featured();
    }, [])

    return (
        <section className='container__featured'>
            {loading ?
                <Swiper
                    navigation={true}
                    pagination={{ dynamicBullets: true }}
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={8}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        930: {
                            slidesPerView: 1,
                            spaceBetween: 1,
                        },
                    }}
                >
                    {
                        inmFeatured?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ItemFeatured
                                    itemProperty={item}
                                />
                            </SwiperSlide>
                        ))
                    }

                </Swiper> :
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '50%', margin: 'auto' }}>
                        <LinearProgress color='primary' />
                    </Box>
                </ThemeProvider>
            }
            {width ?
                <div className='container__items-featured'>
                    <h1>Explora nuestras <span>propiedades destacadas</span></h1>
                    <ul>
                        {itemsEligenos?.map((item) => (
                            <li key={item.id}><img src={item.src} alt="Text icon" /><p>{item.text}</p></li>
                        ))}
                    </ul>
                </div>
                :

                <Swiper
                    className='swiper__text-featured'
                    navigation={true}
                    pagination={{ clickable: false }}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={8}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        930: {
                            slidesPerView: 1,
                            spaceBetween: 1,
                        },
                    }}
                >

                    {itemsEligenos?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ItemTextFeatured item={item} />
                        </SwiperSlide>
                    ))
                    }

                </Swiper>

            }
        </section>
    )
}

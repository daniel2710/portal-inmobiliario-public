'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BarSearch } from '../molecules/BarSearch'

export const Banner = (props) => {

    const [fid, setFid] = useState(false)
    const video = useRef(null)
    const observar = useRef(null)
    const [width, setWidth] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 930) {
            setWidth(true)
        }
        observar.current = new IntersectionObserver(function (entries) {
            setFid(entries[0].isIntersecting);
        }, { root: null });
        video.current.play();
        observar.current.observe(document.querySelector('.sticky-barSearch'));

        const bar = document.querySelector('.barSearch');
        const containerFilter = document.querySelector('.container__filter');
        const containerList = document.querySelector('.container__list');
        const containerState = document.querySelector('.container__list-state');
        const containerSearch = document.querySelector('.container__search');

        fid ? bar.classList.remove('fijo') : bar.classList.add('fijo');
        fid ? containerFilter?.classList.remove('sticky') : containerFilter?.classList.add('sticky');
        fid ? containerList?.classList.remove('sticky__list') : containerList?.classList.add('sticky__list');
        fid ? containerState?.classList.remove('sticky__state') : containerState?.classList.add('sticky__state');
        fid ? containerSearch?.classList.remove('sticky__search') : containerSearch?.classList.add('sticky__search');
        return () => {
            observar.current && observar.current.disconnect();
        }

    }, [fid]);
    return (
        <section>
            <div className={`sticky-barSearch banner ${!props.main && 'bannermin'}`} >
                <div className='video'>
                    <video autoPlay muted loop ref={video}>
                        <source src={props.main ? "/video/banner.mp4" : "/video/banner2.mp4"} type="video/mp4" />
                    </video>
                </div>


                <div className='banner-content'>
                    <div className='banner__text'>
                        <img src="/img/colraicesInmobiliario/home/logo.svg" alt="colraices logo" />
                    </div>
                    {!width && <BarSearch />}
                </div>

            </div>
            {width && <BarSearch />}
        </section>
    )
}

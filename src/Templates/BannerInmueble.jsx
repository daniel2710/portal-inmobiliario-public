'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { VscChromeClose } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { FreeMode, Navigation, Thumbs } from "swiper"
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/navigation";
import { ItemFormulario } from '../molecules/ItemFormulario';



export const BannerInmueble = ({ imagenes, video, numberImages }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectImage, setSelectImage] = useState(imagenes);
    const enlace = video != null && video?.substr(17, 50);
    const numberImg = video != null ? numberImages - 4 : numberImages - 5;
    const modal = useRef(null);
    const handleImagenSpan = (index, image) => {
        let arrayNew = [...imagenes];
        arrayNew.splice(index, 1);
        arrayNew.unshift(image);
        setSelectImage([].concat(arrayNew));
        modal.current.classList.toggle("no-modal");
    }

    const handleClose = () => {
        modal.current.classList.toggle("no-modal");
    }
    return (
        <>
            {screen.width >= 940 ?
                <section>
                    <div className='button_view'>

                        {numberImages >= 5 ? <><p><FaPlus size={30} />{numberImg} </p>
                            <button onClick={() => { handleClose() }}>Ver más fotos</button></> : ''}
                    </div>
                    <div className='bannerInmueble'>

                        {video != null && <iframe src={`https://www.youtube.com/embed/${enlace}?controls=0&autoplay=1&loop=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&mute=1`} allow="accelerometer; autoplay; gyroscope; web-share"></iframe>}

                        {imagenes?.slice(0, 5).map((imagen, index) => (
                            <img className={`  ${video != null ? "" : "image"}`} onClick={() => { handleImagenSpan(index, `${imagen}`) }} key={`imagen-${index}`} src={`${imagen}`} alt="imagen" />
                        ))}
                    </div>

                    <section className="modal" ref={modal}>
                        <div className='modal-content'>
                            <Swiper
                                navigation={true}
                                spaceBetween={1}
                                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                                modules={[FreeMode, Navigation, Thumbs]} className="mySwiper"
                            >
                                {selectImage?.map((imagen, index) => (
                                    <SwiperSlide className='bigimg' key={`imagen-${index}`}>
                                        <img src={`${imagen}`} alt="imagen" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <section className='formular'>
                                <button className='close' type='button' onClick={() => { handleClose() }}>
                                    <VscChromeClose />
                                </button>

                                <ItemFormulario />

                            </section>
                        </div>
                        <div className='thumbs'><Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >

                            {imagenes?.map((imagen, index) => (
                                <SwiperSlide key={`imagen-${index}`}>
                                    <img className='thumbnail' src={`${imagen}`} alt="imagen" />
                                </SwiperSlide>
                            ))}

                        </Swiper></div>

                    </section>
                </section>
                : <section className='container__responsive'>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                            "--swiper-navigation-size": "30px",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {video != null && <SwiperSlide><iframe className='container__video' src={`https://www.youtube.com/embed/${enlace}?controls=0&autoplay=1&loop=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&mute=1`} allow="accelerometer; autoplay; gyroscope; web-share"></iframe></SwiperSlide>}
                        {imagenes?.slice(0, 5).map((imagen, index) => (
                            <SwiperSlide key={`imagen-${index}`}>
                                <img className='image__slide' src={`${imagen}`} alt="imagen" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >

                        {imagenes?.slice(0, 5).map((imagen, index) => (
                            <SwiperSlide key={`imagen-${index}`}>
                                <img src={`${imagen}`} alt="imagen" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </section>
            }
        </>
    )
}

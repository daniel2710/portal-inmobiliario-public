'use client'
import { CartTextCol } from '../components/CartTextCol'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

export default function ItemEligenos({ description, img, children, slideshow, slidesView, slidesViewDesktop, spaceBetween, customClass }) {
    return (
        <div className={`container__eligenos-item`}>
            <article className={`eligenos__item ${customClass && customClass} `}>
                <CartTextCol description={description}>
                    {children}
                </CartTextCol>
                <div className='container__img'>
                    <img src={img} alt="image" />
                </div>
                {slideshow &&
                    <div className='slider'>
                        <Swiper
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            slidesPerView={slidesView}
                            spaceBetween={spaceBetween}
                            loop={true}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 2,
                                },
                                1024: {
                                    slidesPerView: slidesViewDesktop,
                                    spaceBetween: 1,
                                    navigation: false,
                                },
                            }}
                        >
                            {slideshow?.map((slide, index) =>
                                <SwiperSlide key={index}>
                                    <div className='container__img-item'>
                                        <img src={slide} alt="Logo" />
                                    </div>

                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                }
            </article>
        </div>
    )
}

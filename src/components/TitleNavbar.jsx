'use client'

export const TitleNavbar = (props) => {
    return (
        <section className={`title-section-navbar ${props.shadow && 'shadow'}`} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            <h4 className='title-section-title-navbar'>{props.title}</h4>
        </section>
    )
}

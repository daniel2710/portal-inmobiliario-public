'use client'

export const TitleSection = (props) => {
    return (
        <section className={`title-section ${props.shadow && 'shadow'}`} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            <h4 className='title-section-title'>{props.title} <span>{props.span}</span></h4>
            <p className='title-section-paragraph'>{props.children}</p>
        </section>
    )
}

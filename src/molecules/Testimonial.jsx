'use client'

export const Testimonial = ({ testimonial }) => {
    const { nombre, testimonio } = testimonial;
    return (
        <article className="card-container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            <div className="card">
                <img src='/img/colraicesInmobiliario/icons/testimonial.svg' alt="Icon cliente satisfecho" />
                <h3>{nombre}</h3>
            </div>
            <p>{testimonio}</p>
        </article>
    );
};

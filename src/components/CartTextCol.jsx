'use client'

export const CartTextCol = (props) => {
    return (
        <article className='cartTextCol' data-aos="fade-down" >
            <h3 className='cartTextCol-title'>{props.children}</h3>
            <p className='cartTextCol-paragraf'>{props.description}</p>
        </article>
    )
}

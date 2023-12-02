

export default function ItemTextFeatured({ item }) {
    const { id, src, text } = item
    return (
        <div className='container__item-text'>
            <article key={id}>
                <img src={src} alt="Icon" />
                <p>{text}</p>
            </article>
        </div>

    )
}

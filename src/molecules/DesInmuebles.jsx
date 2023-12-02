export const DesInmuebles = ({ title, description }) => {
    const descriptionText = description.replace(/<\/?[^>]+(>|$)/g, '');
    return (
        <article className='desInmuebles'>
            <p className='desInmuebles__title'>{title}</p>
            <div className='desInmuebles__description'><p>{descriptionText}</p></div>
        </article>
    )
}

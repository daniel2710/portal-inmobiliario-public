import { ItemInmueble } from '../molecules/ItemInmueble'

export const InmSimilares = ({ similares }) => {
    return (
        <section className='inmSimilares'>

            <ItemInmueble dataInmueble={similares[0]} />
            <ItemInmueble dataInmueble={similares[1]} />

        </section>
    )
}

import Link from 'next/link'
import { MdLocationOn } from 'react-icons/md'
import { useCurrency } from '../hooks/useCurrency'

export default function ItemFeatured({ itemProperty }) {
    const { thumbnail, titulo, precio, ciudad, region, area_const, habitaciones, baños, slug } = itemProperty;
    const [formatePrice] = useCurrency();
    return (
        <div className='container__item-featured'>
            <article>
                <div>
                    <img src={thumbnail} alt="Image Property" />
                </div>
                <h3>{titulo}</h3>
                <p className='price'>Desde {formatePrice(precio)} COP</p>
                <p className='ubication'><MdLocationOn className="icon" />{ciudad} - {region}</p>
                <ul className='information'><li>Desde {area_const}m²</li> <li>{habitaciones} Hab</li> <li>{baños} Baños</li></ul>
                <button className='btn-view' type='button'><Link href={`/inmueble/${slug}`}>Ver Proyecto</Link></button>
            </article>
        </div>
    )
}

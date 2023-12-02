import Image from 'next/image';
import Link from 'next/link'
import { MdLocationOn } from 'react-icons/md'
import { useCurrency } from '../hooks/useCurrency'
import { useContext } from 'react';
import { ContextLike } from '@/Context/Like';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import likedIcon from '../../public/img/colraicesInmobiliario/icons/heart-fill.svg';
import disLikedIcon from '../../public/img/colraicesInmobiliario/icons/heart.svg';
import toast from 'react-hot-toast';

export default function ItemFavorite({ itemProperty }) {
    const { thumbnail, titulo, precio, ciudad, region, area_const, habitaciones, baños, slug } = itemProperty;
    const [formatePrice] = useCurrency(); 
    const [liked, setLiked] = useLocalStorage(slug, false);
    const { handelLike, handelDelete } = useContext(ContextLike);

    
    const handelLikeInmueble = () => {
        setLiked(!liked);
        handelLike(itemProperty);
        toast('!Añadido a favoritos! ',
            {
                duration: 1700,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                icon: '💙',
            }
        );
    }

    const handelDeleteIcon = (dataInmueble) => {
        setLiked(!liked);
        handelDelete(dataInmueble);
        toast('!Se Eliminó de favoritos! ',
            {
                duration: 1700,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                icon: '💔',
            }
        );
    }

    return (
        <div className='container__item-favorite'>
            {liked ?
                <Image onClick={() => handelDeleteIcon(itemProperty)} className='likedIcon' src={likedIcon} alt='heart fill' width={40} height={40} />
                :
                <Image onClick={() => handelLikeInmueble()} className='likedIcon' src={disLikedIcon} alt='heart fill' width={40} height={40} />
            }
            <article>
                <div className='container-image'>
                    <img src={thumbnail} alt="Image Property" />
                </div>
                <h3>{titulo}</h3>
                <p className='price'>Desde {formatePrice(precio)} COP</p>
                <div className='ubication'>
                    <MdLocationOn className="icon" />
                    <p>{ciudad} - {region}</p>
                </div>
                <ul className='information'><li>Desde {area_const}m²</li> <li>{habitaciones} Hab</li> <li>{baños} Baños</li></ul>
                <Link href={`/inmueble/${slug}`}>
                    <button className='btn-view' type='button'>Ver Proyecto</button>
                </Link>
            </article>
        </div>
    )
}

'use client'
import React, { useContext, useState } from 'react';
import { BiBath, BiExpand, BiBed } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { Link } from 'next/link';
import { Like } from '../Context/Like';
import { useCurrency } from '../hooks/useCurrency';
import { useLocalStorage } from "../hooks/useLocalStorage";
import toast from 'react-hot-toast';

export const ItemRecomend = ({ inmuebleRec }) => {

    const { titulo, precio, descripcion, habitaciones, baños, area_const, thumbnail, like, estado, tipo, ciudad, region, num_img, slug } = inmuebleRec;

    const [formatePrice] = useCurrency();
    const [likes, setLikes] = useState(like);
    const [liked, setLiked] = useLocalStorage(slug, false);
    const { handelLike, handelDelete } = useContext(Like);


    const handelLikeInmueble = () => {

        setLikes(Number(likes) + 1);
        handelLike(inmuebleRec);
        setLiked(!liked);
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

    const handelDeleteIcon = (inmueble) => {
        setLikes(Number(likes) - 1)
        setLiked(!liked);
        handelDelete(inmueble);
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

    const createMarkup = (element) => {
        return { __html: element };
    }

    return (
        <article className='itemRecomend' data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="111" data-aos-offset="0">
            <Link className='item__itemRecomend' to={slug}>
                <div className='item__img' style={{ backgroundImage: `url(${thumbnail})` }}></div>

                <div className='itemRecomed__header'>
                    <p>{estado}</p>
                    <p>
                        <span>{tipo}</span>
                        <span className='bgred'>{ciudad}</span>
                    </p>
                </div>
                <div className="itemRecomed__footer">
                    <p>{region}</p>
                    <span>{num_img} <BsImages /> </span>
                </div>

            </Link>
            <div className='item__text'>
                <div className='item__paragraf'>
                    <h4 className='name'>{titulo}</h4>
                    <p className='precio'>Desde: {formatePrice(precio)}</p>
                    <div className='paragraf' dangerouslySetInnerHTML={createMarkup(descripcion)}></div>
                </div>
                <div className='icons-item'>
                    <div className='icons-atributos'>
                        <p><i><BiBed /></i> {habitaciones}</p>
                        <p><i><BiBath /></i> {baños}</p>
                        <p><i><BiExpand /></i> {area_const} &#13217;</p>
                    </div>
                    <div className='favorite'>
                        <button onClick={liked ? () => handelDeleteIcon(inmuebleRec) : () => handelLikeInmueble()}>
                            {liked ?
                                <TiHeartFullOutline /> :
                                <TiHeartOutline />
                            }
                        </button>
                        <p>
                            {likes}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}
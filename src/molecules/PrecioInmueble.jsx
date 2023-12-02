'use client'
import React, { useContext, useState } from 'react'
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { RWebShare } from "react-web-share";
import { BsShare, BsPrinter } from "react-icons/bs";
import toast from 'react-hot-toast';
import { ContextLike } from '../Context/Like';
import { Simulador } from '../molecules/Simulador';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCurrency } from '../hooks/useCurrency';

export const PrecioInmueble = ({ inmueble }) => {

    const { precio, titulo, descripcion } = inmueble;

    const [formatePrice] = useCurrency();
    const [liked, setLiked] = useLocalStorage(inmueble.slug, false);
    const { handelLike, handelDelete } = useContext(ContextLike);
    const [simulador, setSimulador] = useState(false);

    const handelLikeInmueble = () => {
        handelLike(inmueble);
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


    return (
        <div className='precioinmueble'>
            <h2 className='precioinmueble__title'>Desde: <span>{formatePrice(precio)}</span></h2>
            <button className='button__simulator' onClick={() => { setSimulador(!simulador) }}>Simulación de cuotas</button>
            <section className='precioinmueble__buttons'>
                <RWebShare
                    sites={["facebook", "whatsapp", "mail", "telegram"]}
                    data={{
                        text: `${titulo}  ${descripcion}`,
                        url: `${window.location.href}`,
                        title: "Vitrina Colombia",
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <button><BsShare /> Compartir</button>
                </RWebShare>
                <button onClick={liked ? () => handelDeleteIcon(inmueble) : () => handelLikeInmueble()}>
                    {liked ?
                        <TiHeartFullOutline /> :
                        <TiHeartOutline />
                    }
                    Favorito
                </button>
                <button>
                    <BsPrinter /> Imprimir
                </button>
            </section>
            {simulador && <Simulador precioInmueble={precio}></Simulador>}

        </div>


    )
}

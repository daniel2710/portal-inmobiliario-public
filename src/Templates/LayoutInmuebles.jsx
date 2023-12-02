'use client'
import { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import PropTypes from 'prop-types';
import { Banner } from '../Templates/Banner';
import { TitleSection } from '../components/TitleSection';
import Navbar from '@/components/Navbar';
import { TitleNavbar } from '@/components/TitleNavbar';
import ItemFavorite from '@/molecules/ItemFavorite';
import Pagination from '@/components/Pagination';
import { usePagination } from '@/hooks/usePagination';
import { ItemInmueble } from '@/molecules/ItemInmueble';
import { ItemFormResultado } from '@/molecules/ItemFormResultado';
import { scrollSection } from '../helpers/actionScroll';
import { BarSearch } from '@/molecules/BarSearch';
import medal from '../../public/img/colraicesInmobiliario/icons/medal.svg';
import heart from '../../public/img/colraicesInmobiliario/icons/heart.svg';
import AB from '../../public/img/colraicesInmobiliario/icons/AB.svg';
import billetera from '../../public/img/colraicesInmobiliario/icons/billetera.svg';

export const LayoutInmuebles = ({ loading, inmuebles, Notion, Elim, inm, fav }) => {
    const { currentItems, currentPage, handleNextPage, handlePrevPage, totalPages } = usePagination(3, inmuebles)
    const [fid, setFid] = useState(false)
    const observar = useRef(null)

    useEffect(() => {
        observar.current = new IntersectionObserver(function (entries) {
            setFid(entries[0].isIntersecting);
        }, { root: null });
        observar.current.observe(document.querySelector('.sticky-barSearch'));

        const bar = document.querySelector('.barSearch');
        const containerFilter = document.querySelector('.container__filter');
        const containerList = document.querySelector('.container__list');
        const containerState = document.querySelector('.container__list-state');
        const containerSearch = document.querySelector('.container__search');

        fid ? bar.classList.remove('fijo') : bar.classList.add('fijo');
        fid ? containerFilter?.classList.remove('sticky') : containerFilter?.classList.add('sticky');
        fid ? containerList?.classList.remove('sticky__list') : containerList?.classList.add('sticky__list');
        fid ? containerState?.classList.remove('sticky__state') : containerState?.classList.add('sticky__state');
        fid ? containerSearch?.classList.remove('sticky__search') : containerSearch?.classList.add('sticky__search');
        return () => {
            observar.current && observar.current.disconnect();
        }

    }, [fid]);

    return (
        <>
            {!fav && < Banner />}
            {fav && <Navbar/>}
            {fav && <TitleNavbar title={"Mis favoritos"} />}

            {!fav && 
                <img className='btn-float-form' src='/img/colraicesInmobiliario/icons/widget-form.webp' onClick={() => scrollSection("form-container", true, -150)} alt="Icon" />
            }

            <section className={fav ? 'favSection' : 'inmRegion'}>
                <div className={fav ? 'favSection__flex' : 'inmRegion__grid'}>
                    {!fav && <TitleSection
                        title={inm ? "¡A falta de uno, muchos más!" : "Estos son los proyectos"}
                        span={inm ? "Estos inmuebles tienen detalles que encajan con tu búsqueda" : "que tenemos para ti"}
                    />}

                    {fav && 
                        <div className='only-desktop'>
                            <TitleSection
                                title={"Aquí están tus"}
                                span={"inmuebles favoritos."}
                            >
                                Ingresa al que más te gusta, regístrate y nosotros nos encargamos del resto.
                            </TitleSection>
                        </div>
                    }

                    {fav && 
                        <div className='sticky-barSearch only-desktop container-barSearch'>
                            <BarSearch  />
                        </div>
                    }


                    {fav ? 
                        <div className="favSection-menu">
                            <div className="container-leftBar">
                                <Link href={'/'} className="item-rightBar">
                                    <Image src={medal} alt="rocket" width={40} height={40} />
                                    <p>Para ti</p>
                                </Link>
                                <Link href={'/favoritos'} className="item-rightBar">
                                    <Image src={heart} alt="rocket" width={40} height={40} />
                                    <p>Mis inmuebles favoritos</p>
                                </Link>
                                <Link href={'/'} className="item-rightBar">
                                    <Image src={AB} alt="rocket" width={40} height={40} />
                                    <p>Comparar propiedades</p>
                                </Link>
                                <Link href={'https://colraices.com/cupocreditoalinstante/'} target="_blank" className="item-rightBar">
                                    <Image src={billetera} alt="rocket" width={40} height={40} />
                                    <p>Simulación de cuota</p>
                                </Link>
                            </div>
                            <section className='only-desktop-flex favSection__grid__inm'>
                                {inmuebles?.map(inmueble => (
                                    <ItemFavorite key={inmueble.id} itemProperty={inmueble} />
                                ))}
                            </section>
                            
                            <section className='only-mobile  favSection__grid__inm'>
                                {currentItems?.map(inmueble => (
                                    <ItemFavorite key={inmueble.id} itemProperty={inmueble} />
                                ))}
                            </section>
                        </div>
                    :        
                        <section className='inmRegion__grid__inm'>
                            {inmuebles?.map(inmueble => (
                                <ItemInmueble key={inmueble.id} dataInmueble={inmueble} Notion={Notion} Elim={Elim} />
                            ))}
                        </section>
                    }

                    {fav && <div className='container-flex-center'>
                        <Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} />
                    </div>}
                </div>

                {!fav && <ItemFormResultado /> }

            </section>
        </>
    )
}


LayoutInmuebles.propTypes = {
    loading: PropTypes.bool.isRequired,
    inmuebles: PropTypes.array.isRequired
}
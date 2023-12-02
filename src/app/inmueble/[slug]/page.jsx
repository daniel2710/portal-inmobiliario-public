import { AtributInmueble } from '../../../molecules/AtributInmueble';
import { DesInmuebles } from '../../../molecules/DesInmuebles';
import { ItemMap } from '../../../molecules/ItemMap';
import { ItemFormulario } from '../../../molecules/ItemFormulario';
import { ItemPlano } from '../../../molecules/ItemPlano';
import { PrecioInmueble } from '../../../molecules/PrecioInmueble';
import { PropInmuebles } from '../../../molecules/PropInmuebles';
import { TitleInmueble } from '../../../molecules/TitleInmueble';
import { BannerInmueble } from '../../../Templates/BannerInmueble';
import { InmSimilares } from '../../../Templates/InmSimilares';
import { APIURL } from '../../../config';
import { Header } from '@/Templates/Header';
export async function generateMetadata({ params }) {
    const fetching = await fetch(`${APIURL}properties/${params.slug}`, { cache: 'no-cache' })
    const response = await fetching.json();
    const inmueble = response.data;
    const { tipo, ciudad, titulo } = inmueble;
    return {
        title: `${tipo} en venta en ${ciudad} | ${titulo}`
    }
}

export default async function Inmueble({ params }) {
    const fetching = await fetch(`${APIURL}properties/${params.slug}`, { cache: 'no-cache' })
    const response = await fetching.json();
    const inmueble = response.data;
    const { titulo, descripcion, baños, habitaciones, garajes, area_const, fecha_const, pro_ser, region, ciudad, like, imagenes, planos, tipo, url, num_img } = inmueble;
    const similaresRegion = response.similares_region;
    const existPlano = planos?.length > 0 && true;
    const existSimilar = similaresRegion?.length > 0 && true;
    return (
        <>
            <BannerInmueble imagenes={imagenes} numberImages={num_img} video={url} />
            <Header />
            
            <section className='inmueblee'>

                <div className='inmueble__grid'>

                    <main className='inmueble__main'>
                        <TitleInmueble
                            titulo={titulo}
                            region={region}
                            ciudad={ciudad}
                            tipo_inmueble={tipo}
                        />
                        <div className='container-price-mobile'>
                            <PrecioInmueble
                                inmueble={inmueble}
                            />
                        </div>


                        <PropInmuebles
                            fecha={fecha_const}
                            habitaciones={habitaciones}
                            baños={baños}
                            area_const={area_const}
                            garajes={garajes}
                        />
                        <DesInmuebles
                            title={titulo}
                            description={descripcion}
                        />
                        <AtributInmueble
                            pro_ser={pro_ser}
                        />

                        {existPlano &&
                            <ItemPlano
                                planos={planos}
                                titulo={titulo}
                            />
                        }

                        <ItemMap
                            lat={Number(inmueble.coordenadas?.lat)}
                            lng={Number(inmueble.coordenadas?.lng)}
                        />
                        {existSimilar &&
                            <InmSimilares
                                similares={similaresRegion}
                            />
                        }

                    </main>

                    <section>
                        <div className='container-price-desktop'>
                            <PrecioInmueble
                                inmueble={inmueble}
                            />
                        </div>

                        <div className='inmueble__formularios'>
                            <ItemFormulario />
                        </div>
                    </section>

                </div>

            </section>
        </>
    )
}

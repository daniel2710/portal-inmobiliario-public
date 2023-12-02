import dynamic from 'next/dynamic'
import { TitleSection } from '../components/TitleSection'
const ItemEligenos = dynamic(() => import('../molecules/ItemEligenos'), { ssr: false })

export const Eligenos = () => {

    return (
        <main className='eligenos'>
            <div className='section__title'>
                <TitleSection title={'Por qué elegirnos'} shadow={true}>
                    Encontrarás un servicio de calidad que te acompañará de forma personalizada en el proceso de comprar tu casa en Colombia desde el exterior. Te ofrecemos las mejores oportunidades para invertir y crecer económicamente.
                </TitleSection>
            </div>
            <div className='eligenos__container'>
                <ItemEligenos
                    description={'Invierte de forma segura y confiable en nuestros proyectos inmobiliarios, respaldados por importantes constructoras aliadas en Colombia.'}
                    img={'/img/eligenos/aliados.webp'}
                    slideshow={
                        ['img/aliados/5.webp', 'img/aliados/6.webp',
                            'img/aliados/7.webp', 'img/aliados/8.webp',
                            'img/aliados/12.webp',
                        ]
                    }
                    slidesView={2}
                    slidesViewDesktop={4}
                    spaceBetween={0}
                    customClass={'construction'}
                >
                    <span>Nuestras</span> constructoras aliadas
                </ItemEligenos>
                <ItemEligenos
                    description={'Nuestros inmuebles nuevos y usados pasan por un riguroso proceso de verificación para garantizar su calidad y características específicas. Con Colraices, invierte con confianza y seguridad en la propiedad que deseas.'}
                    img={'/img/eligenos/inmuebles.webp'}
                    customClass={'housing'}
                >
                    Viviendas con las
                    <span>mejores condiciones</span>
                </ItemEligenos>
                <ItemEligenos
                    description={'Accede fácilmente a créditos de nuestros bancos aliados reconocidos a nivel nacional e internacional por sus beneficios y trayectoria en apoyo a los colombianos en el exterior. Confía en Colraices para hacer una inversión segura y exitosa.'}
                    img={'/img/eligenos/constructoras.webp'}
                    slideshow={['img/aliados/2.webp', 'img/aliados/1.svg', 'img/aliados/11.webp']
                    }
                    slidesView={3}
                    slidesViewDesktop={3}
                    spaceBetween={10}
                >
                    Nuestros aliados
                    <span>financieros</span>

                </ItemEligenos>
            </div>

        </main>
    )
}

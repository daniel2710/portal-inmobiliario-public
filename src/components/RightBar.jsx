'use client'
import Image from "next/image"
import Link from "next/link"
import rocket from '../../public/img/colraicesInmobiliario/icons/rocket.svg';
import medal from '../../public/img/colraicesInmobiliario/icons/medal.svg';
import heart from '../../public/img/colraicesInmobiliario/icons/heart.svg';
import AB from '../../public/img/colraicesInmobiliario/icons/AB.svg';
import colateral from '../../public/img/colraicesInmobiliario/icons/colateral.svg';
import billetera from '../../public/img/colraicesInmobiliario/icons/billetera.svg';
import close from '../../public/img/colraicesInmobiliario/icons/X.svg';

const RightBar = ({ closeRightBar }) => {
  return (
    <div className="container-rightBar">
        <Image onClick={closeRightBar} className="closeIcon" src={close} alt="rocket" width={40} height={40} />

        <Link href={'/'} className="item-rightBar">
            <Image src={rocket} alt="rocket" width={40} height={40} />
            <p>Explorar más inmuebles</p>
        </Link>

        <Link href={'/'} className="item-rightBar">
            <Image src={medal} alt="rocket" width={40} height={40} />
            <p>Para ti</p>
        </Link>

        <Link href={'/'} className="item-rightBar">
            <Image src={heart} alt="rocket" width={40} height={40} />
            <p>Contacto</p>
        </Link>

        <Link href={'/'} className="item-rightBar">
            <Image src={AB} alt="rocket" width={40} height={40} />
            <p>Comparar propiedades</p>
        </Link>

        <Link href={'/'} className="item-rightBar">
            <Image src={colateral} alt="rocket" width={40} height={40} />
            <p>Pre-aprueba tu crédito</p>
        </Link>

        <Link href={'/'} className="item-rightBar">
            <Image src={billetera} alt="rocket" width={40} height={40} />
            <p>Simulación de cuota</p>
        </Link>
    </div>
  )
}

export default RightBar
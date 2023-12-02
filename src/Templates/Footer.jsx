import { infoContact, linksFooter, socialNetworks } from '../helpers/options';

export const Footer = () => {

    return (
        <footer id='contact'>
            <section>
                <img className='logo' src="/img/colraicesInmobiliario/home/logo.svg" alt="logo" />
                {infoContact?.map((item) =>
                    <p key={item.id}>
                        <a href={item.map} target='_blank'>
                            <strong> {item.office} </strong>
                            {item.address}
                        </a>
                        <span> {item.phoneNumber && 'Teléfono:'} {item.phoneNumber} </span>
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                    </p>
                )}

                <nav className="side-links">
                    <ul>
                        <div>
                            {linksFooter?.map((item) =>
                                <a key={item.id} href={item.url} target='_blank'><li>{item.name}</li></a>
                            )}
                        </div>
                        <div>
                            <li>Política de privacidad</li>
                            <li>Mapa del sitio</li>
                            <a href="https://momentumdigital.com.co/" target="_blank"><li>{new Date().getFullYear()} Momentum</li></a>
                        </div>
                    </ul>
                </nav>
                <div className="social-networks">
                    {socialNetworks?.map((item) =>
                        <a key={item.id} href={item.url} target='_blank'>
                            <img src={item.src} alt="Icon" />
                        </a>
                    )}

                </div>
            </section>
            <a id="whatsapp-widget" href="https://wa.me/+15136479405" target="_blank"><img src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="WhatsApp Logo" /></a>
        </footer>

    )
}

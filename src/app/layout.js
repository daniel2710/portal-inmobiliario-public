import { ContextLikeProvider } from '@/Context/Like';
import { FiltroContextProvider } from '../Context/Filtro';
// import { Header } from '@/Templates/Header';
import { Footer } from '@/Templates/Footer';
import { Animation } from '@/molecules/Animation';
import HeadScript from '@/components/HeadScript';
import { Montserrat } from 'next/font/google'
import '../sass/app.scss'
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Compra tu casa en Colombia desde el exterior | Portal Inmobiliario',
  description: 'El mejor sitio para comprar tu casa en Colombia desde el exterior',
  keywords: "Casa en Colombia | Comprar casa en Colombia | Invertir en Colombia desde el exterior | Crédito hipotecario | Crédito hipotecario en Colombia | Consultoría financiera | Requisitos para el crédito | Envio de dinero a Colombia",
  lenguage: 'es',
  audience: 'all',
  robots: 'index, all, follow',
  googlebot: 'index, all, follow',
  google: 'translete',
  copyright: 'momentumdigital.com.co',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <HeadScript />
      <ContextLikeProvider>
        <FiltroContextProvider>
          <body className={montserrat.className}>
            <Animation>
              <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
              {/* <Header /> */}
              {children}
              <Footer />
            </Animation>
          </body>
        </FiltroContextProvider>
      </ContextLikeProvider>
    </html>
  )
}

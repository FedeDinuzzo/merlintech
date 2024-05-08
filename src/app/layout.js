import { Inter } from '@next/font/google'
import { Suspense, lazy } from "react"
import { CustomCursor } from './components/CustomCursor'
import Navbar from './components/Navbar/Navbar'
import Whatsapp from "./components/Whatsapp"
import styles from '../styles/globals.css'

// Importar los componentes de forma dinámica solo cuando sean necesarios
const LazyContact = lazy(() => import('./components/Contact'))
const LazyFooter = lazy(() => import('./components/Footer'))

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['400', '500']
})

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${font.variable}`}>
        <CustomCursor />
        <Navbar />
        <Whatsapp />
        <div className={`pt-36`}>
          <main>{children}</main>
          <Suspense fallback={`Loading...`}>
            <LazyContact onLoad={() => setIsContactLoaded(true)} />
            <LazyFooter onLoad={() => setIsFooterLoaded(true)} />
          </Suspense>
        </div>
      </body>
    </html>
  )
}


// export const metadata = {
//   title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
//   description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon.ico',
//     apple: '/favicon.ico',
//   },
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 5,
//   },
//   openGraph: {
//     type: "website",
//     url: "https://service-electrolux.ar/",
//     title: '▷ Service de Heladeras y Lavarropas ❄️ ELECTROLUX | Arreglos EN EL DÍA',
//     description: 'Service autorizado ELECTROLUX ✓ Ingresa y contactanos - Servicio Tecnico de heladeras y lavarropas ESPECIALIZADO y ¡Atendido por sus Dueños!',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },
//   keywords: ["servicio", "service", "electrolux", "heladeras", "lavarropas", "reparacion", "arreglo", "tecnicos", "asistencia", "capital federal", "zona norte", "zona sur", "servicio tecnico de heladeras y lavarropas electrolux", "service de lavarropas y heladeras electrolux", "reparacion de heladeras y lavarropas electrlux"],
//   creator: "Federico Di Nuzzo",
//   generator: "Next.js",
//   publisher: "Vercel",
//   verification: {
//     google: 'google',
//   },
// }
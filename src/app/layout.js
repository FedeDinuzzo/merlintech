"use client"

import { Inter } from '@next/font/google'
import styles from '../styles/globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'

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

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['400', '500']
})


export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${font.variable}`}>
        <Navbar />
        <div className={`bg-primary`}>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
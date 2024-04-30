import styles from "./constants/style"
import Hero from './components/Hero'
import { lazy, Suspense } from "react"

const Clients = lazy(() => import('./components/Clients'))
const Scroll = lazy(() => import('./components/Scroll'))
const Partners = lazy(() => import('./components/Partners'))

export const metadata = {
  alternates: {
    canonical: "https://merlintech.com.ar/",
  },
}

function Home() {
  return (
    <div className={``}>
      <Hero
        title="Soporte Tecnico IT"
        title2="Para Empresas"
      />
      <Suspense fallback={`Loading...`}>
        <Clients />
        <Scroll />
        <Partners />
      </Suspense>
    </div>
  )
}

export default Home
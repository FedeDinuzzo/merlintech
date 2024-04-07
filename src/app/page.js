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
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />

        <Suspense fallback={`Loading...`}>
          <Clients />
          <Scroll />
          <Partners />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
import styles from "./constants/style"
import Hero from './components/Hero'
import Clients from './components/Clients'
import Scroll from './components/Scroll'
import Partners from './components/Partners'

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
      <Clients />
      <Scroll />
      <Partners />
    </div>
  )
}

export default Home
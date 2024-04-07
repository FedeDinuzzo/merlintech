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
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Clients />
        <Scroll />
        <Partners />
      </div>
    </div>
  )
}

export default Home
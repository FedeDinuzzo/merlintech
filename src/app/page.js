import styles from "./constants/style"
import Hero from './components/Hero'
import dynamic from 'next/dynamic'

const DynamicClients = dynamic(() => import('./components/Clients'), { loading: () => <p>Loading...</p>, })
const DynamicScroll = dynamic(() => import('./components/Scroll'), { loading: () => <p>Loading...</p>, })
const DynamicPartners = dynamic(() => import('./components/Partners'), { loading: () => <p>Loading...</p>, })

export const metadata = {
  alternates: {
    canonical: "https://merlintech.com.ar/",
  },
}

function Home() {
  return (
    <div className={`space-y-24 m:space-y-48`}>
      <Hero />
      <DynamicClients />
      <DynamicScroll />
      <DynamicPartners />
    </div>
  )
}

export default Home
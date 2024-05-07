import styles from "@/app/constants/style"
import Image from 'next/image'
import cuposLimitados from "@/public/cuposLimitados.png"
import { Button } from "./Buttons"
import { ButtonTwo } from "./Buttons"
import { ButtonThree } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import Lights from "../../public/Lights.png"
import MainCard from "./MainCard"
import { RingOne } from "./Ring"
import { RingTwo } from "./Ring"

const Hero = () => {

  return (
    <section className={`flex flex-col flex-nowrap min-h-[100vh] justify-center`}>
      <div id="home" className={`absolute top-0`} />

      <div className={`absolute -left-3 top-[60px] bg-lines h-[1000px] w-[100vw]`}></div>

      <div className={`flex-none inset-0 overflow-hidden absolute min-h-[1440px]`}>
        <div className={`absolute bg-radial-white w-[760px] m:w-[1054px] top-[200px]`}></div>
        <div className={`absolute bg-radial-violet w-[500px] m:w-[807px] top-[400px]`}></div>
      </div>

      <div className={`flex-none inset-0 overflow-hidden absolute min-h-[1440px] m:hidden`}>
        <div className={`absolute bg-radial-white w-[760px] top-[580px]`}></div>
        <div className={`absolute bg-radial-violet w-[500px] top-[740px]`}></div>
      </div>

      <div className={`text-center m:mx-10 l:mx-20 relative px-5 z-50`}>
        <div className={`${styles.flexCenter} mb-5`}>
          <ButtonThree image={ChevronRight} text="Top 1 del pais" link="" />
        </div>
        <div className={`${styles.flexCenter} flex-col`}>
          <h1 className={`${styles.heading} text-gradient py-2 m:py-4 max-w-[520px]`}>Soporte IT</h1>
          <h3 className={`${styles.heading} text-gradient py-2 m:py-4 max-w-[520px]`}>Para Empresas</h3>
        </div>
        <div className={`${styles.flexCenter} my-5`}>
          <p className={`${styles.paragraph} max-w-[500px] min-w-[346px]`}>
            Optimiza tu tecnología con nuestro soporte IT especializado.
            ¡Maximiza la productividad y minimiza los tiempos de inactividad!
            Nuestros profesionales mantendrán tus sistemas en marcha
          </p>
        </div>
        <div className={`${styles.flexCenter}`}>
          <Button image={ChevronRight} text="CONSULTORÍA GRATUITA" link="" />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`relative my-12 `}>
          <div className={`${styles.flexCenter} min-h-[627px]`}> {/* border-[.75px] border-[rgba(255, 255, 255, .1)] border-solid blur-[7.5px] ${styles.flexStart} bg-[#050505e6] rounded-[23px] flex flex-row flex-nowrap gap-[15px] inset-0 mix-blend-screen overflow-hidden p-0 absolute will-change-transform */}
            <Image className={`absolute w-full h-full`} src={Lights} alt="Lights" priority />
            <MainCard />

            <div className={`absolute top-[20%] left-[5%] m:left-[7%] m:-top-[13%] l:-left-[9%] z-50`}>
              <RingOne />
            </div>
            <div className={`absolute right-[0%] top-[89%] m:right-[10%] m:top-[82%] l:-right-[9%] l:top-[40%] z-50`}>
              <RingTwo />
            </div>
          </div>

          <div className="flex relative item">
            <div className={`bg-card-hero absolute flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 -top-[330px] left-1/2 translate-x-[-50%] l:left-[88%] l:-top-[670px] z-40`}>
              <Image src={cuposLimitados} alt="supportIT" width="1200" height="627" priority />
              <h2 className={`${styles.heading3} my-2.5`}>Soporte IT Personalizado</h2>
              <p className={`${styles.paragraph} mb-2.5`}>Asegure que sus datos y sistemas estén siempre disponibles, protegidos y actualizados.</p>
              <ButtonTwo image={ChevronRight} text="Realizar Auditoria" link="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
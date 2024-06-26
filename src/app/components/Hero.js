import styles from "@/app/constants/style"
import Image from "next/image"
import cuposLimitados from "../../public/cuposLimitados.png"
import { Button } from "./Buttons"
import { ButtonTwo } from "./Buttons"
import { ButtonThree } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import MainCard from "./MainCard"
import { RingOne } from "./Ring"
import { RingTwo } from "./Ring"

const Hero = () => {

  return (
    <section className={`flex flex-col flex-nowrap min-h-[100vh] justify-center`}>
      <div id="home" className={`absolute top-0`} />

      <div className={`hidden m:flex absolute -left-3 top-[60px] bg-lines h-[1000px] w-[100vw]`}></div>

      <div className={`flex-none inset-0 overflow-hidden absolute min-h-[1440px] opacity-90 l:opacity-100`}>
        <div className={`absolute bg-radial-white w-[760px] m:w-[1054px] top-[200px]`}></div>
        <div className={`absolute bg-radial-violet w-[500px] m:w-[807px] top-[400px]`}></div>
      </div>

      <div className={`text-center m:mx-10 l:mx-20 relative px-5 z-50`}>
        <div className={`${styles.flexCenter} mb-5`}>
          <ButtonThree image={ChevronRight} text="Top 1 del país" link={`#clientes`} />
        </div>
        <div className={`${styles.flexCenter} flex-col space-y-5`}>
          <div>
            <h1 className={`${styles.heading} text-gradient py-2 m:py-4 max-w-[520px]`}>Soporte IT</h1>
            <h3 className={`${styles.heading} text-gradient py-2 m:py-4 max-w-[520px]`}>Para Empresas</h3>
          </div>
          <p className={`${styles.paragraph} max-w-[500px] min-w-[370px]`}>
            Optimiza tu tecnología con nuestro soporte IT especializado.
            ¡Maximiza la productividad y minimiza los tiempos de inactividad!
            Operatividad 24/7 Garantizada por expertos.
          </p>
          <Button image={ChevronRight} text="CONSULTORÍA GRATUITA" link="#servicios" />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`relative my-12 `}>
          <div className={`${styles.flexCenter} min-h-[627px] l:w-[1100px]`}>
            <div className={`flex-none inset-0 overflow-hidden absolute min-h-[20px] w-full`}>
              <div className={`absolute bg-lights w-[calc(100%-40px)] h-1`}></div>
            </div>
            <div className="hidden m:flex ">
              <MainCard />
            </div>
            <div className={`absolute top-[-6%] right-[36px] m:right-0 m:left-[7%] m:-top-[13%] l:-left-[9%] z-10`}>
              <RingOne />
            </div>
            <div className={`absolute right-[-165px] top-[92%] m:right-[10%] m:top-[82%] l:-right-[9%] l:top-[40%] z-10`}>
              <RingTwo />
            </div>
          </div>

          <div className="-mt-[220px] l:mt-0 flex relative">
            <div className={`bg-card-hero absolute flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 -top-[330px] left-1/2 translate-x-[-50%] l:left-[88%] l:-top-[670px] z-40`}>
              <Image src={cuposLimitados} width="300" height="123" alt="card" priority />
              <h2 className={`${styles.heading3} my-2.5`}>Soporte IT Personalizado</h2>
              <p className={`${styles.paragraph} mb-2.5`}>Asegure que sus datos y sistemas estén siempre disponibles, protegidos y actualizados.</p>
              <ButtonTwo image={ChevronRight} text="Realizar Auditoria" tgt={`_blank`} link="https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20" />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero
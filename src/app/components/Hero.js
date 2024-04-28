import styles from "@/app/constants/style"
import Image from 'next/image'
import supportIT from "@/public/supportIT.png"
import HeroBlur from "@/public/HeroBlur.png"
import cuposLimitados from "@/public/cuposLimitados.png"
import { Button } from "./Buttons"
import { ButtonTwo } from "./Buttons"
import { ButtonThree } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import ProgressRing from "../../public/ProgressRing.svg"
import SupportRing from "../../public/SupportRing.svg"

const Hero = () => {

  return (
    <section id="home" className={`flex flex-col flex-nowrap min-h-min justify-center items-center overflow-hidden relative w-full px-0`}>
      <div className={`absolute top-[60px]`}>
        <div className={`hidden m:flex bg-lines h-[1500px] w-[100vw]`}></div>
      </div>

      <div className={`flex-none inset-0 overflow-hidden absolute  z-0`}>
        <div className={`absolute bg-radial-blue h-[1054px] top-[14px]`}></div>
      </div>

      <div className={`text-center m:mx-10 l:mx-20 relative`}>
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
            Nuestros profesionales mantendran tus sistemas en marcha
          </p>
        </div>
        <div className={`${styles.flexCenter}`}>
          <Button image={ChevronRight} text="CONSULTORIA GRATUITA" link="" />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`relative my-5`}>
          <div className={`${styles.flexCenter} min-h-[627px]`}> {/* border-[.75px] border-[rgba(255, 255, 255, .1)] border-solid blur-[7.5px] ${styles.flexStart} bg-[#050505e6] rounded-[23px] flex flex-row flex-nowrap gap-[15px] inset-0 mix-blend-screen overflow-hidden p-0 absolute will-change-transform */}
            <Image className={`min-h-[627px]`} src={supportIT} alt="supportIT" width="1200" height="627" priorty />
            <div className={`absolute top-[5%] left-[5%] z-10`}>
              <Image className={``} src={SupportRing} alt="SupportRing" width="136" height="136" priorty />
            </div>
            <div className={`absolute right-[5%] top-[70%] z-10`}>
              <Image className={``} src={ProgressRing} alt="progressRing" width="148" height="148" priorty />
            </div>
          </div>

          <div className="flex item">
            <div className={`bg-card-hero absolute flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
              <Image src={cuposLimitados} alt="supportIT" width="1200" height="627" priorty />
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
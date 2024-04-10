import styles from "@/app/constants/style"
import Image from 'next/image'
import supportIT from "@/public/supportIT.png"
import { ButtonThree } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"

const Hero = ({ title, title2, button, content, icon }) => {

  return (
    <section id="home" className={`min-h-[100vh]`}>
      <div className={`text-center mx-5 m:mx-10 l:mx-20`}>
        <div className={`${styles.flexCenter} mb-5`}>
          <ButtonThree image={ChevronRight} text="Top 1 del pais" link="" />
        </div>
        <h1 className={`${styles.heading} text-gradient p-4`}>Soporte Tecnico IT</h1>
        <h3 className={`${styles.heading} text-gradient p-4`}>Para Empresas</h3>
        <div className={`${styles.flexCenter} my-5`}>
          <p className={`${styles.paragraph} max-w-[500px]`}>
            Optimiza tu tecnología con nuestro soporte IT especializado.
            ¡Maximiza la productividad y minimiza los tiempos de inactividad!
            Nuestros profesionales mantendran tus sistemas en marcha
          </p>
        </div>
        <button className={``}>{button}</button>
      </div>

      <div className={``}>

      </div>
    </section>
  )
}

export default Hero
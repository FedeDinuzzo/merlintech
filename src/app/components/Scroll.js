import React from 'react'
import Link from 'next/link'
import styles from '../constants/style'
import ServicesCard from './ServicesCard'
import { Button } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import { RingThree } from "./Ring"

function Scroll() {
  return (
    <>
      <section className={`min-h-[120vh] m:h-[220vh] l:m:h-[auto]  relative flex justify-between items-center z-40`}>
        <div id="servicios" smooth="true" className={`-mt-[1040px]`} />
        <div className={`-mt-20 flex flex-col mx-5 m:mx-8 l:mx-24 w-full l:pr-72 z-50`}>
          <h2 className={`${styles.heading} m:leading-[70px] mb-16`}>
            Simplifica
            <span className={`inline text-white opacity-40`}> tus
              operaciones con nuestro servicio de soporte IT</span>
          </h2>

          <div className={`m:min-w-[450px]`}>
            <h3 className={`${styles.heading3White}`}>Servicios</h3>
            <p className={`${styles.paragraph}`}>Nuestra gama de servicios de soporte IT está diseñada para abordar y resolver todos los desafíos tecnológicos de tu empresa.</p>

            <div className={`my-10`}>
              <h3 className={`${styles.heading3White} opacity-40`}>Destacados en Argentina</h3>
              <p className={`${styles.paragraph} opacity-50`}>En Argentina y en el mundo, somos lideres en Soporte IT.</p>
            </div>
            <div className={`mb-10`}>
              <h3 className={`${styles.heading3White} opacity-40`}>Sobre Nosotros</h3>
              <p className={`${styles.paragraph} opacity-50`}>Haz clic en la inicial, y descubrí como llegamos a ser los mejores del sector.</p>
            </div>
          </div>

          <Button image={ChevronRight} text={`COMENZAR CONSULTORÍA`} tgt={`_blank`} link={'https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20'} />
        </div>

        <div className={`-mt-20 m:mt-0 m:ml-0 flex-none inset-0 overflow-hidden p-40 absolute min-h-[790px]`}>
          <div className={`absolute bg-radial-white h-[700px] opacity-80 `}></div>
          <div className={`absolute bg-radial-violet h-[500px] mt-[150px] ml-[5%]`}></div>
        </div>

        <div className={`hidden m:flex absolute right-[0%] l:right-[38%] l:top-[50%] z-50`}>
          <RingThree />
        </div>

        <div className={`hidden m:flex h-[840px] relative`}>
          <Link href="/servicios">
            <div className="w-full h-[260px] absolute bottom-0 bg-gradient-to-b from-transparent to-black rounded-[23px] z-50"></div>
            <div className={`flex-none inset-0 overflow-hidden absolute min-h-[20px] w-full`}>
              <div className={`absolute bg-lights w-[calc(100%-48px)] h-1`}></div>
            </div>

            <ServicesCard />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Scroll
import React from 'react'
import Image from 'next/image'
import styles from '../constants/style'
import ScrollCard from '../../public/ScrollBlur.png'
import { Button } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"

function Scroll() {
  return (
    <>
      <section className={`min-h-[116vh] relative flex justify-between`}>
        <div id="servicios" smooth={true} className={`absolute -mt-32`} />
        {/* <Image className={`absolute flex`} src={ScrollCard} alt="" width="990" height="762" /> */}
        <div className={`flex flex-col m:p-16 max-w-[582px]`}>
          <h2 className={`${styles.heading}`}>
            Simplifica
            <span className={`inline text-white opacity-40`}>tus
              operaciones con nuestro servicio de soporte IT</span>
          </h2>

          <div className={``}>
            <div className={``}>
              <h3 className={``}>Servicios</h3>
              <p className={``}>Nuestra gama de servicios de soporte IT está diseñada para abordar y resolver todos los desafíos tecnológicos de tu empresa.</p>
            </div>
            <div className={``}>
              <h3 className={``}>Destacados en Argentina</h3>
              <p className={``}>En Argentina y en el mundo, somos lideres en Soporte IT.</p>
            </div>
            <div className={``}>
              <h3 className={``}>Sobre Nosotros</h3>
              <p className={``}>Haz clic en la inicial, y descubri como llegamos a ser los mejores del sector.</p>
            </div>
          </div>

          <Button image={ChevronRight} text={`COMENZAR CONSULTORIA`} link={''} />
        </div>

        <div className={`flex-none inset-0 overflow-hidden absolute z-40 min-h-[790px]`}>
          <div className={`absolute bg-radial-white h-[790px] z-40`}></div>
          <div className={`absolute bg-radial-violet h-[600px] mt-[95px] ml-[5%] z-50`}></div>
        </div>


        {/* <div className={`flex`}>
          <Image className={``} src={ScrollCard} alt="" width="990" height="762" />
        </div> */}
        <div className={`hidden`}>

        </div>
        <div className={`hidden`}>

        </div>
      </section>
    </>
  )
}

export default Scroll
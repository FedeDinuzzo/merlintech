import React from 'react'
import Image from 'next/image'
import styles from '../constants/style'
import ScrollCard from '../../public/ScrollBlur.png'
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"

function Scroll() {
  return (
    <>
      <section className={`min-h-[100vh] flex justify-between`}>
        {/* <Image className={`absolute flex`} src={ScrollCard} alt="" width="990" height="762" /> */}
        <div className={`flex flex-col m:p-16`}>
            <h1 className={`inline text-white`}>Simplifica </h1>
            <h3 className={`opacity-40 inline`}>tus
            operaciones con nuestro servicio de soporte IT</h3>

          <h2 className={`${styles.heading}`}>
            <span className={``}>Simplifica </span>
            tus
            operaciones con nuestro servicio de soporte IT
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

          <ButtonFour image={ChevronRight} text={`COMENZAR CONSULTORIA`} link={''} />
        </div>

        <div className={`flex`}>
          <Image className={``} src={ScrollCard} alt="" width="990" height="762" />
        </div>
        <div className={`hidden`}>

        </div>
        <div className={`hidden`}>

        </div>
      </section>
    </>
  )
}

export default Scroll
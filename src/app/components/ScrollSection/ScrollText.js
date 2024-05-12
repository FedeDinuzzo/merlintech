import React from 'react'
import Link from 'next/link'
import styles from '../../constants/style'
import { Button } from "../Buttons"
import ChevronRight from "../../../public/ChevronRight.svg"

function ScrollText() {
  return (
    <>
      <div className={`sticky top-20 -mt-20 flex flex-col mx-5 m:mx-8 l:mx-24 l:pr-72 z-50 w-full `}>
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
    </>
  )
}

export default ScrollText
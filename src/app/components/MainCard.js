import React from 'react'
import styles from "@/app/constants/style"
import Image from 'next/image'
import logo from '../../public/LogoMerlin.svg'
import MenuNineCircles from '../../public/MainCard/MenuNineCircles.svg'
import Hand from '../../public/MainCard/Hand.svg'
import PatternLock from '../../public/MainCard/PatternLock.svg'
import CreditCard from '../../public/MainCard/CreditCard.svg'
import PlayCircles from '../../public/MainCard/PlayCircles.svg'
import Square from '../../public/MainCard/Square.svg'
import Photo from '../../public/MainCard/Photo.svg'
import Keyboard from '../../public/MainCard/Keyboard.svg'
import Settings from '../../public/MainCard/Settings.svg'
import Help from '../../public/MainCard/Help.svg'

export default function MainCard() {
  return (
    <section className="flex h-[627px] min-w-[375px] w-[1100px] relative visible">
      <div className={`bg-main-card border-[.75px] border-solid border-secondary border-opacity-10 flex flex-none flex-row flex-nowrap justify-start gap-15 inset-0 overflow-hidden p-0 absolute bg-[#050505e6] content-start items-start backdrop-blur-[7.5px]`}>
        <div className={`min-w-[150px] w-[203px] border-[.75px] border-solid border-white rounded-l-[23px] border-opacity-10 bg-black bg-opacity-10 flex flex-col justify-between h-full p-15 relative overflow-visible`}>
          <div className={`flex flex-col items-start justify-between p-[15px] gap-6 min-h-min-content overflow-visible relative w-full h-full`}>
            <Image className="w-18 h-6 mt-[7.5px]" src={logo} alt="logo" priority />

            <div className={`-mt-20`}>
              <div className={`flex mx-[15px] mb-[7.5px] space-y-4`}>
                <Image className="mt-3" src={MenuNineCircles} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Todos los Servicios</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Hand} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Soporte de PC</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={PatternLock} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Redes y Servidores</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={CreditCard} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Licencias de Software</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={PlayCircles} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Backup en la Nube</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Square} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Servicio de Hosting</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Photo} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Camaras de Seguridad</p>
              </div>
            </div>

            <div className={`border-[.75px] border-solid border-white rounded-b-[10px] border-opacity-5 bg-black bg-opacity-10`}>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Keyboard} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Suministro Hardware</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Settings} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Proteccion y Seguridad</p>
              </div>
              <div className={`flex mx-[15px] my-[7.5px] space-y-4 mb-3`}>
                <Image className="mt-3" src={Help} alt="" priority />
                <p className={`${styles.heading3MainCard} pl-[9px]`}>Centro de Ayuda</p>
              </div>
            </div>
          </div>
        </div>

        <div className={``}>
          <div className={``}>
            barra busqueda
          </div>
          <div className={``}>
            ubicaciones
          </div>
          <div className={``}>Cards
            <div className={``}>
              Card col 1
            </div>
            <div className={``}>
              Card col 2
            </div>
            <div className={``}>
              Card col 3
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



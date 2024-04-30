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
import Search from '../../public/MainCard/Search.svg'
import AvatarProgress from '../../public/MainCard/AvatarProgress.png'
import ChevronDown from '../../public/ChevronDown.svg'

export default function MainCard() {
  return (
    <section className="flex h-[627px] min-w-[375px] w-[1100px] max-w-[100vw] rounded-[23px] bg-gradient-to-b from-[#0000] to-[#0006]">
      <div className={`bg-main-card border-[.75px] border-solid border-secondary border-opacity-10 flex flex-none flex-row flex-nowrap justify-start gap-15 inset-0 overflow-hidden p-0 absolute bg-[#050505e6] content-start items-start backdrop-blur-[7.5px]`}>
        <div className={`min-w-[150px] max-w-[33vw] border-r-[.75px] border-solid border-white border-opacity-10 bg-black bg-opacity-10 flex flex-col justify-between h-full p-15 relative overflow-visible`}>
          <div className={`flex flex-col items-start justify-between p-[15px] gap-6 min-h-min-content overflow-visible relative w-full h-full`}>
            <Image className="w-18 h-6 mt-[7.5px]" src={logo} alt="logo" priority />

            <div className={`-mt-20`}>
              <div className={`flex m:mx-[15px] mb-[7.5px] space-y-4`}>
                <Image className="mt-3" src={MenuNineCircles} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Todos los Servicios</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Hand} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Soporte de PC</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={PatternLock} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Redes y Servidores</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={CreditCard} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Licencias de Software</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={PlayCircles} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Backup en la Nube</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Square} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Servicio de Hosting</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Photo} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Camaras de Seguridad</p>
              </div>
            </div>

            <div className={`border-[.75px] border-solid border-white rounded-b-[10px] border-opacity-5 bg-black bg-opacity-10`}>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Keyboard} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Suministro Hardware</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Settings} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Proteccion y Seguridad</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4 mb-3`}>
                <Image className="mt-3" src={Help} alt="" priority />
                <p className={`${styles.heading3MainCard} leading-4 pl-[9px]`}>Centro de Ayuda</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-col text-white w-[897px] h-full max-w-[65vw] p-[15px]`}>

          <div className={`flex justify-between`}>
            <div className={`shadow-main-card flex justify-center items-center w-[300px] max-w-[50vw] gap-[9px] py-[7.5px] px-[15px] overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
              <p className={`${styles.heading3MainCard} leading-5 text-[12px]`}>Encontra tu solucion</p>
              <Image className="" src={Search} alt="" priority />
            </div>
            <Image className="hidden m:flex h-[37.5px] w-[37.5px]" src={AvatarProgress} alt="" priority />
          </div>

          <div className={`border-t-[1px] mt-[15px] border-secondary border-solid border-opacity-10`}></div>

          <div className={`flex justify-between my-[15px] h-[34px]`}>
            <div className={`shadow-main-card flex justify-center items-center p-1 overflow-hidden border-[.75px] bg-[#0009] bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
              <div className={`flex justify-between items-center w-[210px]`}>
                <h4 className={`${styles.heading3MainCard} px-2 leading-5 flex justify-center items-center overflow-hidden border-[.75px] bg-secondary bg-opacity-10 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>Ubicacion</h4>
                <h4 className={`${styles.heading3MainCard} ml-5`}>Baires</h4>
                <h4 className={`${styles.heading3MainCard}`}>Argentina</h4>
              </div>
            </div>

            <div className={`hidden m:flex space-x-5`}>
              <div className={`shadow-main-card flex justify-center items-center px-3 overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
                <h4 className={`${styles.heading3MainCard} text-[12px]`}>Capital Federal</h4>
                <Image className="ml-[9px]" src={ChevronDown} alt="" priority />
              </div>
              <div className={`shadow-main-card flex justify-center items-center px-3 overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
                <h4 className={`${styles.heading3MainCard} text-[12px]`}>Argentina</h4>
                <Image className="ml-[9px]" src={ChevronDown} alt="" priority />
              </div>
            </div>
          </div>

          <div className={`flex justify-between w-full`}>
            <div className={`flex flex-col space-y-4 w-full`}>
              <div className={`z-20 flex w-full h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
              <div className={`z-20 flex w-full h-[144px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
              <div className={`z-20 flex w-full h-[162px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
            </div>

            <div className={`hidden m:flex flex-col space-y-4 px-[15px] w-full`}>
              <div className={`z-20 flex w-full h-[342px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
              <div className={`z-20 flex w-full h-[160px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
            </div>

            <div className={`hidden l:flex flex-col space-y-4 w-full`}>
              <div className={`z-20 flex w-full h-[232px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
              <div className={`z-20 flex w-full h-[260px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}



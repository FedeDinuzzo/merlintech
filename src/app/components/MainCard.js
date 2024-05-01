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
import ImageCard from '../../public/MainCard/ImageCard.png'
import SupportTool from '../../public/MainCard/SupportTool.svg'
import Toggle from '../../public/MainCard/Toggle.svg'
import DISmall from '../../public/MainCard/DISmall.svg'
import home from '../../public/MainCard/home.svg'
import Bars from '../../public/MainCard/Bars.png'
import BarsHorizontal from '../../public/MainCard/BarsHorizontal.svg'
import separator from '../../public/MainCard/separator.svg'
import merlinCard from '../../public/MainCard/merlinCard.svg'
import Stats from '../../public/MainCard/Stats.svg'
import AvatarChino from '../../public/MainCard/AvatarChino.png'
import AvatarUnicef from '../../public/MainCard/AvatarUnicef.png'
import AvatarDisney from '../../public/MainCard/AvatarDisney.png'
import AvatarNike from '../../public/MainCard/AvatarNike.png'
import AvatarFox from '../../public/MainCard/AvatarFox.png'


export default function MainCard() {
  return (
    <section className="flex h-[627px] min-w-[375px] w-[1100px] max-w-[100vw] rounded-[23px] bg-gradient-to-b from-[#0000] to-[#0006]">
      <div className={`bg-main-card border-[.75px] border-solid border-secondary border-opacity-10 flex flex-none flex-row flex-nowrap justify-start gap-15 inset-0 overflow-hidden p-0 absolute bg-[#050505e6] content-start items-start backdrop-blur-[7.5px]`}>
        <div className={`min-w-[150px] max-w-[33vw] border-r-[.75px] border-solid border-white border-opacity-10 bg-black bg-opacity-10 flex flex-col justify-between h-full p-15 relative overflow-visible`}>
          {/* COLUMN LEFT SIDE */}
          <div className={`flex flex-col items-start justify-between p-[15px] gap-6 min-h-min-content overflow-visible relative w-full h-full`}>
            {/* LOGO */}
            <Image className="w-18 h-6 mt-[7.5px]" src={logo} alt="logo" priority />
            {/* SERVICES */}
            <div className={`-mt-20`}>
              {/* SERVICES TOP */}
              <div className={`flex m:mx-[15px] mb-[7.5px] space-y-4`}>
                <Image className="mt-3" src={MenuNineCircles} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Todos los Servicios</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Hand} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Soporte de PC</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={PatternLock} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Redes y Servidores</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={CreditCard} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Licencias de Software</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={PlayCircles} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Backup en la Nube</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Square} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Servicio de Hosting</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Photo} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Camaras de Seguridad</p>
              </div>
            </div>
            {/* SERVICES BOTTOM */}
            <div className={`border-[.75px] border-solid border-white rounded-b-[10px] border-opacity-5 bg-black bg-opacity-10`}>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Keyboard} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Suministro Hardware</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4`}>
                <Image className="mt-3" src={Settings} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Proteccion y Seguridad</p>
              </div>
              <div className={`flex m:mx-[15px] my-[7.5px] space-y-4 mb-3`}>
                <Image className="mt-3" src={Help} alt="" priority />
                <p className={`${styles.headingMainCard} leading-4 pl-[9px]`}>Centro de Ayuda</p>
              </div>
            </div>
          </div>
        </div>
        {/* TOP SEARCH */}
        <div className={`flex flex-col text-white w-[897px] h-full max-w-[65vw] p-[15px]`}>
          <div className={`flex justify-between`}>
            <div className={`shadow-main-card flex justify-center items-center w-[300px] max-w-[50vw] gap-[9px] py-[7.5px] px-[15px] overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
              <p className={`${styles.headingMainCard} leading-5 text-[12px]`}>Encontra tu solucion</p>
              <Image className="" src={Search} alt="" priority />
            </div>
            <Image className="hidden m:flex h-[37.5px] w-[37.5px]" src={AvatarProgress} alt="" priority />
          </div>
          {/* LINE */}
          <div className={`border-t-[1px] mt-[15px] border-secondary border-solid border-opacity-10`}></div>
          {/* TOP UBCATION */}
          <div className={`flex justify-between my-[15px] h-[34px]`}>
            <div className={`shadow-main-card flex justify-center items-center p-1 overflow-hidden border-[.75px] bg-[#0009] bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
              <div className={`flex justify-between items-center w-[210px]`}>
                <h4 className={`${styles.headingMainCard} px-2 leading-5 flex justify-center items-center overflow-hidden border-[.75px] bg-secondary bg-opacity-10 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>Ubicacion</h4>
                <h4 className={`${styles.headingMainCard} ml-5`}>Baires</h4>
                <h4 className={`${styles.headingMainCard}`}>Argentina</h4>
              </div>
            </div>

            <div className={`hidden m:flex space-x-5`}>
              <div className={`shadow-main-card flex justify-center items-center px-3 overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
                <h4 className={`${styles.headingMainCard} text-[12px]`}>Capital Federal</h4>
                <Image className="ml-[9px]" src={ChevronDown} alt="" priority />
              </div>
              <div className={`shadow-main-card flex justify-center items-center px-3 overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
                <h4 className={`${styles.headingMainCard} text-[12px]`}>Argentina</h4>
                <Image className="ml-[9px]" src={ChevronDown} alt="" priority />
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className={`flex justify-between w-full`}>
            {/* COLUMN ONE */}
            <div className={`flex flex-col space-y-4 w-full`}>
              {/* CARD ONE */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex`}>
                  <div className={`flex flex-col w-1/2 justify-between space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <h4 className={`${styles.headingMainCard} text-white font-medium`}>Horarios -&gt;</h4>
                    <h4 className={`${styles.headingMainCard} opacity-80`}>Ubicacion -&gt;</h4>
                    <Image className={`w-28`} src={merlinCard} alt="" priority />
                  </div>

                  <Image className="w-1 flex py-1" src={separator} alt="" priority />

                  <div className={`flex flex-col w-1/2 space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <h4 className={`${styles.headingMainCard} font-medium`}>9:00AM - 6:00PM</h4>
                    <p className={`${styles.headingMainCard} opacity-80`}>Billinghurst 1193 4 piso, depto A</p>
                    <p className={`${styles.headingMainCard} opacity-80`}>CABA - ARG</p>
                  </div>
                </div>
              </div>
              {/* CARD TWO */}
              <div className={`overflow-hidden z-20 flex h-[144px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between`}>
                  <div className={`flex flex-col w-1/2 pl-2.5 m-2.5 space-y-2`}>
                    <Image className="-mb-3 w-14 -ml-2" src={SupportTool} alt="" priority />
                    <h4 className={`${styles.headingMainCard} font-medium text-[13px]`}>Asistencia IT</h4>
                    <p className={`${styles.headingMainCard} text-[10px] opacity-80 w-28`}>Soluciones dinamicas</p>
                    <div className='w-[10px] border-[1.75px] border-secondary border-solid rounded-lg'></div>
                  </div>
                  <div className={`flex flex-col w-1/2 m-2.5 space-y-1`}>
                    <div className={`flex items-center mt-1`}>
                      <div className={`flex text-[10px] px-2 py-[3px] mr-1 bg-black rounded-full`}>1</div>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Cyber Seguridad</h4>
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`flex text-[10px] px-2 py-[3px] mr-1 bg-black rounded-full`}>2</div>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Conectividad</h4>
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`flex text-[10px] px-2 py-[3px] mr-1 bg-black rounded-full`}>3</div>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Instalacion</h4>
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`flex text-[10px] px-2 py-[3px] mr-1 bg-black rounded-full`}>4</div>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Hardware</h4>
                    </div>
                    <div className={`flex items-center`}>
                      <div className={`flex text-[10px] px-2 py-[3px] mr-1 bg-black rounded-full`}>5</div>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Software</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD THREE */}
              <div className={`overflow-hidden z-20 flex w-full h-[162px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between px-2.5 py-1`}>
                  <Image className="w-10 -mt-16 mr-2" src={Stats} alt="" priority />
                  <div className={`flex flex-col p-2 space-y-3`}>
                    <h4 className={`${styles.headingMainCard} font-medium text-[13px]`}>Clientes satisfechos</h4>
                    <p className={`${styles.headingMainCard} opacity-80`}>Gracias al equipo de soporte IT por mantener la magia de Disney. Su dedicación es fundamental para nuestro éxito</p>
                    <div className={`flex items-center`}>
                      <Image className="mr-2 h-6 w-6" src={AvatarDisney} alt="" priority />
                      <div>
                        <h4 className={`${styles.headingMainCard} font-medium`}>Ceo Disney</h4>
                        <p className={`${styles.headingMainCard} opacity-80`}>Mensaje de agradecimiento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COLUMN TWO */}
            <div className={`hidden m:flex flex-col space-y-4 px-[15px] w-full`}>
              {/* CARD FOUR */}
              <div className={`overflow-hidden z-20 flex w-full h-[342px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col p-[15px]`}>
                  <Image className="w-full mb-[6px]" src={ImageCard} alt="" priority />
                  <div className={`${styles.headingMainCard} my-1 bg-[#3395FF] rounded-md flex justify-center py-1 text-[13px] w-[160px]`}>ATENCION INMEDIATA</div>
                  <h4 className={`${styles.headingMainCard} my-1 font-medium text-[13px]`}>Resolución Continua</h4>
                  <p className={`${styles.headingMainCard} my-1 opacity-80`}>Nos brindaron soluciones inmediatas, disponibles las 24 horas del día</p>
                  <div className={`flex my-3`}>
                    <div className={`h-[3px] w-2/3 rounded-xl bg-[#3395FF]`}></div>
                    <div className={`h-[3px] w-1/3 rounded-r-xl bg-white opacity-40 z-40`}></div>
                  </div>
                  <div className={`flex items-center`}>
                    <Image className="mr-2 h-6 w-6" src={AvatarFox} alt="" priority />
                    <div>
                      <h4 className={`${styles.headingMainCard} font-medium`}>Gerente FOX</h4>
                      <p className={`${styles.headingMainCard} opacity-80`}>Mensaje de Conformidad</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD FIVE */}
              <div className={`overflow-hidden z-20 flex w-full h-[160px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col items-center w-full space-y-3`}>
                  <h4 className={`${styles.headingMainCard} text-medium pl-6 text-[13.5px] mt-[15px] `}>Monitoreo Permanente</h4>
                  <Image className="w-full px-6" src={Bars} alt="" priority />
                </div>
              </div>
            </div>
            {/* COLUMN THREE */}
            <div className={`hidden l:flex flex-col space-y-4 w-full`}>
              {/* CARD SIX */}
              <div className={`overflow-hidden z-20 flex w-full h-[232px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col`}>
                  <Image className="" src={Toggle} alt="" priority />
                  <h4 className={``}>Planes</h4>
                  <p className={``}>El mejor precio del mercado</p>
                  <div className='w-[7.5px] border-[2.25px] border-secondary border-solid rounded-lg'></div>
                  <p className={``}>Contamos con los mejores partners y resellers, ofreciendo un Soporte IT de categoria, a un precio competitivo, sin dudas la calidad esta asegurada</p>
                  <div className='w-[7.5px] border-[2.25px] border-secondary border-solid rounded-lg'></div>
                  <p className={``}><Image className="" src={DISmall} alt="" priority />Diego Pineda, Creador de Merlin</p>
                </div>
              </div>
              {/* CARD SEVEN */}
              <div className={`overflow-hidden z-20 flex w-full h-[260px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between`}>
                  <h4 className={``}>Notificaciones</h4>
                  <div className={`flex`}>
                    <Image className="" src={home} alt="" priority />
                    <Image className="" src={BarsHorizontal} alt="" priority />
                    <Image className="" src={AvatarChino} alt="" priority />
                  </div>
                </div>
                <div className={`flex flex-col`}>
                  <div className={`flex`}>
                    <Image className="" src={AvatarFox} alt="" priority />
                    <div className={`flex flex-col`}>
                      <h4 className={``}>Gerente FOX</h4>
                      <p className={``}>Ticket resuelto</p>
                    </div>
                    <p className={``}>2m ago</p>
                  </div>
                  <div className={`flex`}>
                    <Image className="" src={AvatarUnicef} alt="" priority />
                    <div className={`flex flex-col`}>
                      <h4 className={``}>Ong Unicef</h4>
                      <p className={``}>Tecnico en camino</p>
                    </div>
                    <p className={``}>5m ago</p>
                  </div>
                  <div className={`flex`}>
                    <Image className="" src={AvatarDisney} alt="" priority />
                    <div className={`flex flex-col`}>
                      <h4 className={``}>Ceo Disney</h4>
                      <p className={``}>Servidores en linea</p>
                    </div>
                    <p className={``}>15m ago</p>
                  </div>
                  <div className={`flex`}>
                    <Image className="" src={AvatarNike} alt="" priority />
                    <div className={`flex flex-col`}>
                      <h4 className={``}>Manager Nike</h4>
                      <p className={``}>Mantenimiento activado</p>
                    </div>
                    <p className={``}>1d ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
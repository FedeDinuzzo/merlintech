import React from 'react'
import styles from "@/app/constants/style"
import Image from 'next/image'
import cardInnerShadow from "../../public/card-inner-shadow.webp"
import key from '../../public/key.svg'
import cloud from '../../public/cloud.svg'
import cloudKey from '../../public/cloudKey.svg'
import circuit from '../../public/circuit.svg'
import toolService from '../../public/toolService.svg'
import AvatarProgress from '../../public/MainCard/AvatarProgress.png'
import ChevronDown from '../../public/ChevronDown.svg'
import Bars from '../../public/MainCard/Bars.png'
import BarsHorizontal from '../../public/MainCard/BarsHorizontal.svg'
import separator from '../../public/MainCard/separator.svg'
import merlinCard from '../../public/MainCard/merlinCard.svg'
import Stats from '../../public/MainCard/Stats.svg'
import AvatarDisney from '../../public/MainCard/AvatarDisney.png'
import LogoServicios from '../../public/MainCard/LogoServicios.png'


export default function ServicesCard() {
  return (
    <section className="flex h-[627px] min-w-[375px] w-[800px] max-w-[100vw] rounded-[23px] bg-gradient-to-b from-[#0000] to-[#0006]">
      <div className={`bg-main-card border-[.75px] border-solid border-secondary border-opacity-10 flex flex-none flex-row flex-nowrap justify-start gap-15 inset-0 overflow-hidden p-0 absolute bg-[#050505e6] content-start items-start backdrop-blur-[7.5px]`}>
        {/* TOP SEARCH */}
        <div className={`flex flex-col text-white w-[897px] h-full max-w-[65vw] p-[15px]`}>
          <Image className={`absolute h-full w-full -m-[15px] opacity-60`} src={cardInnerShadow} alt="supportIT" />
          <div className={`flex justify-between items-center pl-4`}>
            <Image className={`-mr-12`} src={LogoServicios} alt="" priority />
            <div className={`flex items-center max-w-[50vw] py-[7.5px] gap-9 overflow-hidden `}>
              <h4 className={`${styles.headingMainCard} text-[12px] text-center border-[.75px] px-2 py-1 bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>Soporte</h4>
              <h4 className={`${styles.headingMainCard} text-[12px]`}>Redes</h4>
              <h4 className={`${styles.headingMainCard} text-[12px]`}>Servidores</h4>
              <h4 className={`${styles.headingMainCard} text-[12px]`}>Software</h4>
              <h4 className={`${styles.headingMainCard} text-[12px]`}>Hardware</h4>
            </div>
            <div className={`flex items-center gap-4`}>
              AR
              <Image className={`mr-2`} src={ChevronDown} alt="" priority />
              <Image className="hidden m:flex h-[37.5px] w-[37.5px]" src={AvatarProgress} alt="" priority />
            </div>


          </div>
          {/* LINE */}
          <div className={`border-t-[1px] mt-[15px] border-secondary border-solid border-opacity-10`}></div>
          {/* TOP UBCATION */}
          <div className={`flex justify-between my-[15px] h-[34px] pr-3 m:pr-0`}>
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
          <div className={`flex justify-between w-full pr-3 m:pr-0`}>
            {/* COLUMN ONE */}
            <div className={`flex flex-col space-y-4 w-full`}>
              {/* CARD ONE */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex justify-between space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <Image className={`w-28`} src={toolService} alt="" priority />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingMainCard} text-white font-medium`}>Soporte de PC</h4>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Planes para empresas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full`}>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Mantenimiento</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Cableado</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Consultoria IT</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD TWO */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <h4 className={`${styles.headingMainCard} text-white font-medium`}>Servicios en la nube</h4>
                  <div className={`flex`}>
                    <div className={`flex flex-col`}>
                      <p className={`${styles.headingMainCard} opacity-80`}>Backups</p>
                      <p className={`${styles.headingMainCard} opacity-80`}>Correos</p>
                    </div>
                    <div className={`flex flex-col`}>
                      <Image className={`w-28`} src={cloud} alt="" priority />
                      <p className={`${styles.headingMainCard} opacity-80`}>Cloud</p>
                    </div>
                    <div className={`flex flex-col`}>
                      <p className={`${styles.headingMainCard} opacity-80`}>Aplicaciones</p>
                      <p className={`${styles.headingMainCard} opacity-80`}>Archivos</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD THREE */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex justify-between space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <Image className={`w-28`} src={merlinCard} alt="" priority />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingMainCard} text-white font-medium`}>Soporte de PC</h4>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Planes para empresas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full`}>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Mantenimiento</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Cableado</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Consultoria IT</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD FOUR */}
              <div className={`overflow-hidden z-20 flex w-full h-[162px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between px-2.5 py-1`}>
                  <Image className="w-10 -mt-16 mr-2" src={Stats} alt="" priority />
                  <div className={`flex flex-col p-2 space-y-3`}>
                    <h4 className={`${styles.headingMainCard} font-medium text-[13px]`}>Clientes satisfechos</h4>
                    <p className={`${styles.headingMainCard} opacity-80`}>Gracias al equipo de soporte IT por mantener la magia de Disney. Su dedicación es fundamental para nuestro éxito</p>
                    <div className={`flex items-center`}>
                      <Image className="mr-2 h-6 w-6" src={cloudKey} alt="" priority />
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
            <div className={`hidden m:flex flex-col space-y-4 pl-[15px] w-full`}>
              {/* CARD FIVE */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex justify-between space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <Image className={`w-28`} src={merlinCard} alt="" priority />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingMainCard} text-white font-medium`}>Soporte de PC</h4>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Planes para empresas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full`}>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Mantenimiento</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Cableado</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Consultoria IT</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD SIX */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex justify-between space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <Image className={`w-28`} src={key} alt="" priority />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingMainCard} text-white font-medium`}>Soporte de PC</h4>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Planes para empresas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full`}>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Mantenimiento</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Cableado</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Consultoria IT</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD SEVEN */}
              <div className={`overflow-hidden z-20 flex w-full h-[162px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between px-2.5 py-1`}>
                  <Image className="w-10 -mt-16 mr-2" src={circuit} alt="" priority />
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
              {/* CARD EIGHT */}
              <div className={`overflow-hidden z-20 flex h-[105px] max-w-[60vw] rounded-[10px] backdrop-blur-[15px] bg-[#0009] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex justify-between space-y-2 max-h-[105px] p-2.5 py-2 m-2.5`}>
                    <Image className={`w-28`} src={toolService} alt="" priority />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingMainCard} text-white font-medium`}>Soporte de PC</h4>
                      <h4 className={`${styles.headingMainCard} opacity-80`}>Planes para empresas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full`}>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Mantenimiento</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Cableado</p>
                    </div>
                    <div className={`flex`}>
                      <div className={``}></div>
                      <p className={`${styles.headingMainCard} opacity-80`}>Consultoria IT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}
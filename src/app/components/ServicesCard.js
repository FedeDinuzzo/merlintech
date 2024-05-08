import React from 'react'
import styles from "@/app/constants/style"
import Image from 'next/image'
import cardInnerShadow from "../../public/card-inner-shadow.webp"
import key from '../../public/key.svg'
import cloud from '../../public/cloud.svg'
import cloudKey from '../../public/cloudKey.svg'
import circuit from '../../public/circuit.svg'
import toolService from '../../public/toolService.svg'
import AvatarProgress from '../../public/AvatarProgress.png'
import ChevronDown from '../../public/ChevronDown.svg'
import LogoServicios from '../../public/LogoServicios.png'


export default function ServicesCard() {
  return (
    <section className="flex h-[627px] min-w-[375px] w-[800px] rounded-[23px] bg-gradient-to-b from-[#0000] to-[#0004]">
      <div className={`bg-main-card border-[.75px] border-solid border-secondary border-opacity-10 flex flex-none flex-row flex-nowrap justify-start gap-15 inset-0 overflow-hidden p-0 absolute bg-[#050505e6] content-start items-start backdrop-blur-[7.5px]`}>
        {/* TOP SEARCH */}
        <div className={`flex flex-col text-white w-[897px] h-full max-w-[65vw] p-[15px]`}>
          <Image className={`absolute h-full w-full -m-[15px] opacity-80`} src={cardInnerShadow} alt="supportIT" />
          <div className={`flex justify-between items-center pl-4`}>
            <Image className={`-mr-12`} src={LogoServicios} alt="" />
            <div className={`flex items-center max-w-[50vw] py-[7.5px] gap-9 overflow-hidden `}>
              <h4 className={`${styles.headingServicesCard} text-[12px] text-center border-[.75px] px-2 py-1 bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>Soporte</h4>
              <h4 className={`${styles.headingServicesCard} text-[12px]`}>Redes</h4>
              <h4 className={`${styles.headingServicesCard} text-[12px]`}>Servidores</h4>
              <h4 className={`${styles.headingServicesCard} text-[12px]`}>Software</h4>
              <h4 className={`${styles.headingServicesCard} text-[12px]`}>Hardware</h4>
            </div>
            <div className={`flex items-center gap-4`}>
              AR
              <Image className={`mr-2`} src={ChevronDown} alt="" />
              <Image className="hidden m:flex h-[37.5px] w-[37.5px]" src={AvatarProgress} alt="" />
            </div>


          </div>
          {/* LINE */}
          <div className={`border-t-[1px] mt-[15px] border-secondary border-solid border-opacity-10`}></div>
          {/* TOP UBCATION */}
          <div className={`flex justify-between my-[15px] h-[34px] pr-3 m:pr-0`}>
            <div className={`shadow-main-card flex justify-center items-center pr-2.5 p-1 overflow-hidden border-[.75px] bg-[#0006] bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
              <div className={`flex justify-between items-center w-[210px]`}>
                <h4 className={`${styles.headingServicesCard} px-2 leading-5 flex justify-center items-center overflow-hidden border-[.75px] bg-secondary bg-opacity-10 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>Ubicación</h4>
                <h4 className={`${styles.headingServicesCard} ml-5`}>Baires</h4>
                <h4 className={`${styles.headingServicesCard}`}>Argentina</h4>
              </div>
            </div>

            <div className={`hidden l:flex space-x-5`}>
              <div className={`shadow-main-card flex justify-center items-center px-3 overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
                <h4 className={`${styles.headingServicesCard} text-[12px]`}>Capital Federal</h4>
                <Image className="ml-[9px]" src={ChevronDown} alt="" />
              </div>
              <div className={`shadow-main-card flex justify-center items-center px-3 overflow-hidden border-[.75px] bg-secondary bg-opacity-5 rounded-[74px] border-secondary border-solid border-opacity-10 backdrop-blur-[7.5px]`}>
                <h4 className={`${styles.headingServicesCard} text-[12px]`}>Argentina</h4>
                <Image className="ml-[9px]" src={ChevronDown} alt="" />
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className={`flex justify-between w-full pr-3 m:pr-0`}>
            {/* COLUMN ONE */}
            <div className={`flex flex-col space-y-4 w-full`}>
              {/* CARD ONE */}
              <div className={`overflow-hidden z-20 flex h-[130px] max-w-[30vw] min-w-[350px] rounded-[12px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex max-h-[62px] px-4 py-2.5 m-4 border-[1px] rounded-[12px] border-solid border-secondary border-opacity-10`}>
                    <Image className={`mr-4 mt-1 w-8 h-8`} src={toolService} alt="" />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingServicesCard} text-[14px] text-white font-medium`}>Soporte de PC</h4>
                      <h4 className={`${styles.headingServicesCard} opacity-80`}>Planes para empresas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full justify-around`}>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-0.5 max-h-[14px]`}>
                        <div className={`mt-[2px] rounded-full w-2 h-2 bg-sky-500`}></div>
                      </div>
                      <p className={`${styles.headingServicesCard}`}>Mantenimiento</p>
                    </div>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-1.5 max-h-[14px]`}></div>
                      <p className={`${styles.headingServicesCard}`}>Cableado</p>
                    </div>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-1.5 max-h-[14px]`}></div>
                      <p className={`${styles.headingServicesCard}`}>Consultoría IT</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD TWO */}
              <div className={`overflow-hidden z-20 flex flex-col h-[197px] max-w-[30vw] min-w-[350px] rounded-[12px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <h4 className={`${styles.headingServicesCard} text-[14px] text-white font-medium px-4 pt-5`}>Servicios en la nube</h4>
                <div className={`h-[120px] flex flex-col items-center  justify-center px-4 py-2.5 m-4 border-[1px] rounded-[12px] border-solid border-secondary border-opacity-10`}>

                  <div className={`flex justify-between items-center mt-1 w-full`}>
                    <div className={`flex flex-col`}>
                      <p className={`${styles.headingServicesCard}`}>Backups</p>
                      <p className={`${styles.headingServicesCard} opacity-80`}>Correos</p>
                    </div>
                    <div className={`flex flex-col items-center`}>
                      <Image className={`w-22 h-22`} src={cloud} alt="" />
                      <p className={`${styles.headingServicesCard}`}>Cloud</p>
                    </div>
                    <div className={`flex flex-col`}>
                      <p className={`${styles.headingServicesCard}`}>Aplicaciones</p>
                      <p className={`${styles.headingServicesCard} opacity-80 text-right`}>Archivos</p>
                    </div>
                  </div>
                  <div className={`flex justify-center my-3 w-full border-[0.5px] border-dashed border-secondary border-opacity-10 rounded-full`}></div>
                  <p className={`${styles.headingServicesCard} text-[14px] text-center`}>Desde cualquier lugar, en todo momento</p>
                </div>
              </div>
              {/* CARD THREE */}
              <div className={`overflow-hidden z-20 flex flex-col h-[108px] max-w-[30vw] min-w-[350px] rounded-[24px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <h4 className={`${styles.headingServicesCard} text-[14px] text-center text-white font-medium px-4 pt-5`}>Infraestructura de redes y servidores</h4>
                <div className={`h-[40px] flex flex-col items-center justify-center px-4 m-4 border-[1px] rounded-full border-solid border-secondary border-opacity-10`}>
                  <div className={`flex justify-between items-center w-full`}>
                    <p className={`${styles.headingServicesCard} opacity-80`}>Dispositivos</p>
                    <div className='w-1 h-4 rounded bg-secondary bg-opacity-10' />
                    <p className={`${styles.headingServicesCard} text-center text-sky-500`}>Hardware</p>
                    <div className='w-1 h-4 rounded bg-secondary bg-opacity-10' />
                    <p className={`${styles.headingServicesCard} opacity-80 text-right`}>Conexiones</p>
                  </div>
                </div>
              </div>
              {/* CARD FOUR */}
              <div className={`overflow-hidden z-20 flex w-full h-[140px] max-w-[30vw] min-w-[350px] rounded-[24px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between items-center pl-4 py-1`}>
                  <div className='h-12 bg-sky-500 rounded-full p-3 mr-3 '>
                    <Image className="mt-0.5 w-10 h-5" src={cloudKey} alt="" width={40} height={20} />
                  </div>
                  <div className={`flex flex-col space-y-2`}>
                    <div className='flex items-center justify-between'>
                      <h4 className={`${styles.headingServicesCard} font-medium text-[14px]`}>Protección y Seguridad</h4>
                      <div className={`flex mr-5 space-x-14 items-center justify-between`}>
                        <div className={`mt-[2px] rounded-full w-4 h-2 bg-sky-500`}></div>
                        <h4 className={`${styles.headingServicesCard} font-medium`}>24min</h4>
                      </div>

                    </div>
                    <p className={`${styles.headingServicesCard} opacity-80 pr-10`}>Recuperación de datos, control de acceso y perimetral mediante cámaras y DVR</p>
                  </div>
                </div>
              </div>
            </div>
            {/* COLUMN TWO */}
            <div className={`hidden m:flex flex-col space-y-4 pl-[15px] w-full`}>
              {/* CARD FIVE */}
              <div className={`overflow-hidden z-20 flex flex-col h-[108px] max-w-[30vw] min-w-[350px] rounded-[24px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <h4 className={`${styles.headingServicesCard} text-[14px] text-center text-white font-medium px-4 pt-5`}>Data center services</h4>
                <div className={`h-[40px] flex flex-col items-center justify-center px-4 m-4 border-[1px] rounded-full border-solid border-secondary border-opacity-10`}>
                  <div className={`flex text-center justify-between items-center w-full px-2`}>
                    <p className={`${styles.headingServicesCard}`}>Disponibilidad continua</p>
                    <p className={`${styles.headingServicesCard} text-sky-500`}>Alojamiento web</p>
                  </div>
                </div>
              </div>
              {/* CARD SIX */}
              <div className={`overflow-hidden z-20 flex flex-col h-[197px] max-w-[30vw] min-w-[350px] rounded-[12px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <h4 className={`${styles.headingServicesCard} text-[14px] text-white font-medium px-4 pt-5`}>Licenciamiento de software</h4>
                <div className={`h-[120px] flex flex-col items-center  justify-center px-4 py-2.5 m-4 border-[1px] rounded-[12px] border-solid border-secondary border-opacity-10`}>

                  <div className={`flex justify-between items-center mt-1 w-full`}>
                    <div className={`flex flex-col`}>
                      <p className={`${styles.headingServicesCard}`}>Garantía</p>
                      <p className={`${styles.headingServicesCard} opacity-80`}>Tranquilidad</p>
                    </div>
                    <div className={`flex flex-col items-center`}>
                      <Image className={`w-22 h-22`} src={key} alt="" />
                      <p className={`${styles.headingServicesCard}`}>Passwords</p>
                    </div>
                    <div className={`flex flex-col`}>
                      <p className={`${styles.headingServicesCard} text-right`}>Legalidad</p>
                      <p className={`${styles.headingServicesCard} opacity-80 text-right`}>Productividad</p>
                    </div>
                  </div>
                  <div className={`flex justify-center my-3 w-full border-[0.5px] border-dashed border-secondary border-opacity-10 rounded-full`}></div>
                  <p className={`${styles.headingServicesCard} text-[14px] text-center`}>Utiliza todas las funcionalidades siempre</p>
                </div>
              </div>
              {/* CARD SEVEN */}
              <div className={`overflow-hidden z-20 flex w-full h-[144px] max-w-[30vw] min-w-[350px] rounded-[24px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex justify-between items-center pl-4 py-1`}>
                  <div className='mr-3 bg-sky-500 p-3 w-20 h-11 rounded-full'>
                    <Image className="-mt-0.5 w-6 h-6 " src={circuit} alt="" />
                  </div>
                  <div className={`flex flex-col space-y-2`}>
                    <div className='flex items-center justify-between'>
                      <h4 className={`${styles.headingServicesCard} font-medium text-[14px]`}>Protección y Seguridad</h4>
                      <div className={`flex mr-5 space-x-12 items-center justify-between`}>
                        <div className={`mt-[2px] rounded-full w-4 h-2 bg-sky-500`}></div>
                        <h4 className={`${styles.headingServicesCard} font-medium`}>24min</h4>
                      </div>
                    </div>
                    <p className={`${styles.headingServicesCard} opacity-80 pr-10`}>Asesoramiento integral en la compra de equipos y sistemas. Confía en nosotros para maximizar el valor de tus inversiones</p>
                  </div>
                </div>
              </div>
              {/* CARD EIGHT */}
              <div className={`overflow-hidden z-20 flex h-[124px] max-w-[30vw] min-w-[350px] rounded-[12px] backdrop-blur-[15px] bg-[#0006] bg-opacity-60 border-[.75px] border-secondary border-solid border-opacity-10`}>
                <div className={`flex flex-col w-full`}>
                  <div className={`flex max-h-[58px] px-4 py-2.5 m-4 border-[1px] rounded-[12px] border-solid border-secondary border-opacity-10`}>
                    <Image className={`mr-4 mt-1 w-8 h-8`} src={toolService} alt="" />
                    <div className={`flex flex-col w-full`}>
                      <h4 className={`${styles.headingServicesCard} text-white font-medium`}>Productividad empresarial</h4>
                      <h4 className={`${styles.headingServicesCard} opacity-80`}>Integrando todos tus sistemas</h4>
                    </div>
                  </div>

                  <div className={`flex w-full justify-around px-2`}>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-1.5 max-h-[14px]`}></div>
                      <p className={`${styles.headingServicesCard}`}>Comunicación</p>
                    </div>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-1.5 max-h-[14px]`}></div>
                      <p className={`${styles.headingServicesCard}`}>Telefonía</p>
                    </div>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-0.5 max-h-[14px]`}>
                        <div className={`mt-[2px] rounded-full w-2 h-2 bg-sky-500`}></div>
                      </div>

                      <p className={`${styles.headingServicesCard}`}>Datos</p>
                    </div>
                    <div className={`flex space-x-1.5`}>
                      <div className={`mt-[3px] border-[1px] border-solid border-secondary border-opacity-10 rounded-full px-1.5 max-h-[14px]`}></div>
                      <p className={`${styles.headingServicesCard}`}>Email</p>
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
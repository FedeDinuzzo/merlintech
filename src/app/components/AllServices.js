import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonTwo } from "./Buttons"
import MonitoreoLines from "../../public/MonitoreoLines.svg"
import ServicesBackground from "../../public/ServicesBackground.webp"
import ChevronRight from "../../public/ChevronRight.svg"
import Card1Services from "../../public/Card1Services.png"
import Card2Services from "../../public/Card2Services.png"
import Card3Services from "../../public/Card3Services.png"
import Card4Services from "../../public/Card4Services.png"

const AllServices = () => {

  return (
    <section className={`flex flex-col flex-wrap justify-center gap-5`}>
      <div id="home" className={`absolute top-0`} />
      <div className={`flex flex-col items-center`}>
        <Image className="opacity-80 -top-[40px] absolute" src={ServicesBackground} alt="Ball" priority />
      </div>
      <div className={`flex justify-center z-[20] p-5`}>
        <div className={`bg-line-services`}></div>
        <div>
          <div className={`-mb-32`}>
            <Image src={MonitoreoLines} alt="supportIT" width="819" height="138" priority />
          </div>
          <h2 className={`${styles.heading3Monitoreo} text-center text-gradient mb-2.5`}>Monitoreo 24/7</h2>
          <h1 className={`${styles.headingServices} text-center text-gradient max-w-[770px] h-[120%]`}>Soporte técnico y mantenimiento a sus redes, computadoras servidores y sistemas.</h1>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap p-5 m:p-8 l:p-10 gap-5 m:gap-10 max-w-[1100px] mx-auto`}>
        <div className={`bg-card-service flex flex-col justify-evenly items-center min-h-[380px] w-[340px] p-5`}>
          <div className={`light-main-card absolute h-[380px] w-full opacity-30 rounded-[40px]`}></div>

          <Image className={`mb-2.5 min-h-[99px] z-10`} src={Card1Services} alt="supportIT" width="300" height="99" priority />
          <h2 className={`${styles.heading3} my-2.5 z-10`}>Backups y Copias de Seguridad</h2>
          <p className={`${styles.paragraph} mb-2.5 z-10`}>Mantenga a salvo los datos e información de su negocio con la configuración de Backups remotos y automatizados</p>
          <div className={`flex w-[340px] px-5`}>
            <ButtonTwo className={``} image={ChevronRight} text={`Disaster Recovery`} tgt={`_blank`} link={'https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20'} />
          </div>
        </div>

        <div className={`bg-card-service flex flex-col h-[380px] w-[340px] m:w-[620px] gap-2.5`}>
          <div className={`light-main-card absolute h-[380px] w-full opacity-30 rounded-[40px]`}></div>
          <div className={`flex flex-col h-[380px] w-[340px] m:w-[620px] gap-2.5 pt-5 m:pt-[22px] px-5 pb-0 z-10`}>
            <h2 className={`${styles.heading3} my-2.5`}>Recuperación de la Información</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Protéjase de una eventual pérdida de datos con un almacenamiento encriptado y una recuperación virtual a través de nuestro escritorio remoto. Accediendo a sus equipos para reparar cualquier problema en su software.</p>
            <ButtonTwo image={ChevronRight} text={`Protección y resguardo`} tgt={`_blank`} link={'https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20'} />
            <Image className={`mt-3`} src={Card2Services} alt="supportIT" width="580" height="147" />
          </div>
        </div>

        <div className={`bg-card-service flex flex-col min-h-[380px] w-[340px] m:w-[620px] gap-2.5`}>
          <div className={`light-main-card absolute h-[410px] m:h-[380px] w-full opacity-30 rounded-[40px]`}></div>
          <div className={`flex flex-col min-h-[380px] w-[340px] m:w-[620px] gap-2.5 p-5 z-10`}>
            <Image src={Card3Services} alt="supportIT" width="580" height="99" />
            <h2 className={`${styles.heading3} my-2.5`}>Streaming: Centro Operacional</h2>
            <p className={`${styles.paragraph} mb-2.5`}>El centro de control BOCC ha sido diseñado para mejorar la calidad, la fiabilidad y la disponibilidad de la transmisión de contenidos multimedia. Delegue la monitorización, las alertas, la asistencia en vivo y preserve sus flujos de vídeo OTT con los expertos en contenido multimedia de Merlin.</p>
            <ButtonTwo image={ChevronRight} text={`Protección y resguardo`} tgt={`_blank`} link={'https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20'} />
          </div>
        </div>

        <div className={`bg-card-service flex flex-col justify-evenly items-center min-h-[380px] w-[340px] p-5`}>
          <div className={`light-main-card absolute h-[380px] w-full opacity-30 rounded-[40px]`}></div>
          <h2 className={`${styles.heading3} my-2.5 z-10`}>Cyber Seguridad</h2>
          <p className={`${styles.paragraph} mb-2.5 z-10`}>Proteja su negocio de malware, hackers, virus y prevenga futuros riesgos de seguridad</p>
          <div className={`flex w-[340px] px-5`}>
            <ButtonTwo image={ChevronRight} text={`Defensa Multinivel`} tgt={`_blank`} link={'https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20'} />
          </div>
          <Image className={`mt-2.5  z-10`} src={Card4Services} alt="supportIT" width="300" height="99" />
        </div>
      </div>
    </section >
  )
}

export default AllServices
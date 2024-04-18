import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonTwo } from "./Buttons"
import MonitoreoLines from "../../public/MonitoreoLines.svg"
import ServicesBackground from "../../public/ServicesBackground.webp"
import ChevronRight from "../../public/ChevronRight.svg"
import cardInnerShadow from "../../public/card-inner-shadow.webp"
import Card1Services from "../../public/Card1Services.png"
import Card2Services from "../../public/Card2Services.png"
import Card3Services from "../../public/Card3Services.png"
import Card4Services from "../../public/Card4Services.png"

const AllServices = () => {

  return (
    <section id="home" className={`flex flex-col flex-wrap justify-center gap-5`}>
      <div className={`flex flex-col items-center`}>
        <Image className="opacity-80 -top-[40px] absolute" src={ServicesBackground} alt="Ball" />
      </div>
      <div className={`flex justify-center`}>
        <div className={`bg-line-services`}></div>
        <div className={``}>
          <div className={`-mb-32`}>
            <Image className={``} src={MonitoreoLines} alt="supportIT" width="819" height="138" />
          </div>
          <h2 className={`${styles.heading3Monitoreo} text-center text-gradient mb-2.5`}>Monitoreo 24/7</h2>
          <h1 className={`${styles.headingServices} text-center text-gradient max-w-[770px] h-[100%]`}>Soporte tecnico y mantenimiento a sus redes, computadoras servidores y sistemas.</h1>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap p-5 m:p-8 l:p-10 gap-5 m:gap-10 max-w-[1100px] mx-auto`}>
        <div className={`bg-card-service h-[380px] max-w-[340px] mx-auto p-5`}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <Image className={`mx-auto`} src={Card1Services} alt="supportIT" width="300" height="99" />
          <h2 className={`${styles.heading3} my-2.5`}>Backups y Copias de Seguridad</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Mantenga a salvo los datos e información de su negocio con la configuración de Backups remotos y automatizados</p>
          <ButtonTwo image={ChevronRight} text={`Disaster Recovery`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-wrap h-[380px] w-[620px] gap-2.5 p-5`}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <h2 className={`${styles.heading3} my-2.5`}>Recuperacion de la Informacion</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Protéjase de una eventual pérdida de datos con un almacenamiento encriptado y una recuperación virtual a través de nuestro escritorio remoto. Accediendo a sus equipos para reparar cualquier problema en su software.</p>
          <ButtonTwo image={ChevronRight} text={`Proteccion y resguardo`} link={''} />
          <Image className={`absolute bottom-0`} src={Card2Services} alt="supportIT" width="580" height="147" />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[418px] w-[350px] m:h-[421px] m:w-[563px]  gap-2.5 p-5`}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <Image src={Card3Services} alt="supportIT" width="560" height="147" />
          <h2 className={`${styles.heading3} my-2.5`}>Streaming: Centro Operacional</h2>
          <p className={`${styles.paragraph} mb-2.5`}>El centro de control BOCC ha sido diseñado para mejorar la calidad, la fiabilidad y la disponibilidad de la transmisión de contenidos multimedia. Delegue la monitorización, las alertas, la asistencia en vivo y preserve sus flujos de vídeo OTT con los expertos en contenido multimedia de Merlin.</p>
          <ButtonTwo image={ChevronRight} text={`Gestion de Streaming`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[370px] w-[350px] m:h-[421px] m:w-[276px] gap-2.5 p-5`}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <h2 className={`${styles.heading3} my-2.5`}>Cyber Seguridad</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Proteja su negocio de malware, hackers, virus y prevenga futuros riesgos de seguridad</p>
          <ButtonTwo image={ChevronRight} text={`Defensa Multinivel`} link={''} />
          <Image src={Card4Services} alt="supportIT" width="240" height="99" />
        </div>
      </div>
    </section>
  )
}

export default AllServices
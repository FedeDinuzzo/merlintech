import styles from "@/app/constants/style"
import Image from 'next/image'
import { services } from '@/app/constants/index'
import Link from "next/link"
import { ButtonTwo } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import cardInnerShadow from "../../public/card-inner-shadow.webp"
import Card1Services from "../../public/Card1Services.png"
import Card2Services from "../../public/Card2Services.png"
import Card3Services from "../../public/Card3Services.png"
import Card4Services from "../../public/Card4Services.png"

const AllServices = () => {

  return (
    <section id="home" className={`min-h-[100vh] max-w-[1000px] mx-auto flex flex-col flex-wrap justify-center`}>
      {/* <div className={`bg-wave`}></div> */}
      <div className={`bg-radial-pink`}></div>
      <div className={`flex justify-center`}>
        <div className={`bg-line-services`}></div>
        <div className={`flex flex-wrap max-w-[770px]`}>
          <h2 className={`${styles.heading3} text-center text-gradient max-w-[200px] mx-auto`}>Monitoreo 24/7</h2>
          <h1 className={`${styles.heading2} text-center text-gradient max-w-[770px] h-[100%]`}>Soporte tecnico y mantenimiento a sus redes, computadoras servidores y sistemas.</h1>
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap p-[20px] gap-[20px] m:p-[30px] l:p-[40px] m:gap-[10px] l:gap-[40px]`}>
        <div className={`bg-card-service flex flex-col flex-nowrap h-[370px] w-[350px] m:h-[421px] m:w-[276px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <Image src={Card1Services} alt="supportIT" width="240" height="99" />
          <h2 className={`${styles.heading3} my-2.5`}>Backups y Copias de Seguridad</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Mantenga a salvo los datos e información de su negocio con la configuración de Backups remotos y automatizados</p>
          <ButtonTwo image={ChevronRight} text={`Disaster Recovery`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[398px] w-[350px] m:h-[421px] m:w-[563px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <h2 className={`${styles.heading3} my-2.5`}>Recuperacion de la Informacion</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Protéjase de una eventual pérdida de datos con un almacenamiento encriptado y una recuperación virtual a través de nuestro escritorio remoto. Accediendo a sus equipos para reparar cualquier problema en su software.</p>
          <ButtonTwo image={ChevronRight} text={`Proteccion y resguardo`} link={''} />
          <Image src={Card2Services} alt="supportIT" width="560" height="174" />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[418px] w-[350px] m:h-[421px] m:w-[563px]  gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <div className={`absolute top-0 right-0 left-0 bottom-0`}>
            <Image className={`block object-center render-auto rounded-[40px] h-[100%]`} src={cardInnerShadow} alt="supportIT" width={`100%`} height={`100%`} />
          </div>
          <Image src={Card3Services} alt="supportIT" width="560" height="147" />
          <h2 className={`${styles.heading3} my-2.5`}>Streaming: Centro Operacional</h2>
          <p className={`${styles.paragraph} mb-2.5`}>El centro de control BOCC ha sido diseñado para mejorar la calidad, la fiabilidad y la disponibilidad de la transmisión de contenidos multimedia. Delegue la monitorización, las alertas, la asistencia en vivo y preserve sus flujos de vídeo OTT con los expertos en contenido multimedia de Merlin.</p>
          <ButtonTwo image={ChevronRight} text={`Gestion de Streaming`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[370px] w-[350px] m:h-[421px] m:w-[276px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
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
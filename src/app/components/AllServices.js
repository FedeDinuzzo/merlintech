import styles from "@/app/constants/style"
import Image from 'next/image'
import { services } from '@/app/constants/index'
import Link from "next/link"
import { ButtonThree } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import Card1Services from "../../public/Card1Services.png"
import Card2Services from "../../public/Card2Services.png"
import Card3Services from "../../public/Card3Services.png"
import Card4Services from "../../public/Card4Services.png"

const AllServices = () => {

  return (
    <section id="home" className={`min-h-[100vh] flex justify-center`}>
      {/* <div className={`bg-wave`}></div> */}
      {/* <div className={`bg-radial-pink`}></div> */}
      <div className={``}>
        <div className={`bg-line-services`}></div>
        <h2 className={``}></h2>
        <h1 className={``}></h1>
      </div>

      <div className={`${styles.flexCenter} w-[1000px] flex-wrap`}>
          <div className={`bg-card-hero flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
            <Image src={Card1Services} alt="supportIT" width="300" height="99" priorty />
            <h2 className={`${styles.heading3} my-2.5`}>Backups y Copias de Seguridad</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Mantenga a salvo los datos e información de su negocio con la configuración de Backups remotos y automatizados</p>
            <ButtonThree image={ChevronRight} text={`Disaster Recovery`} link={''} />
          </div>

          <div className={`bg-card-hero flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
            <h2 className={`${styles.heading3} my-2.5`}>Recuperacion de la Informacion</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Protéjase de una eventual pérdida de datos con un almacenamiento encriptado y una recuperación virtual a través de nuestro escritorio remoto. Accediendo a sus equipos para reparar cualquier problema en su software.</p>
            <ButtonThree image={ChevronRight} text={`Proteccion y resguardo`} link={''} />
            <Image src={Card2Services} alt="supportIT" width="300" height="99" priorty />
          </div>

          <div className={`bg-card-hero flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
            <Image src={Card3Services} alt="supportIT" width="300" height="99" priorty />
            <h2 className={`${styles.heading3} my-2.5`}>Streaming: Centro Operacional</h2>
            <p className={`${styles.paragraph} mb-2.5`}>El centro de control BOCC ha sido diseñado para mejorar la calidad, la fiabilidad y la disponibilidad de la transmisión de contenidos multimedia. Delegue la monitorización, las alertas, la asistencia en vivo y preserve sus flujos de vídeo OTT con los expertos en contenido multimedia de Merlin.</p>
            <ButtonThree image={ChevronRight} text={`Gestion de Streaming`} link={''} />
          </div>

          <div className={`bg-card-hero flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
            <h2 className={`${styles.heading3} my-2.5`}>Cyber Seguridad</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Proteja su negocio de malware, hackers, virus y prevenga futuros riesgos de seguridad</p>
            <ButtonThree image={ChevronRight} text={`Defensa Multinivel`} link={''} />
            <Image src={Card4Services} alt="supportIT" width="300" height="99" priorty />
          </div>
      </div>
    </section>
  )
}

export default AllServices
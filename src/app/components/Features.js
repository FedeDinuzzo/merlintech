import styles from "@/app/constants/style"
import Image from 'next/image'
import { services } from '@/app/constants/index'
import Link from "next/link"
import { ButtonTwo } from "./Buttons"
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import cardInnerShadow from "../../public/card-inner-shadow.webp"
import Card1Empresa from "../../public/Card1Empresa.png"
import Card2Empresa from "../../public/Card2Empresa.png"
import Card3Empresa from "../../public/Card3Empresa.png"
import Card4Empresa from "../../public/Card4Empresa.png"

const Features = () => {

  return (
    <section id="features" className={`min-h-[100vh] max-w-[1360px] mx-auto flex flex-col flex-wrap justify-center`}>
      {/* <div className={`bg-wave`}></div> */}
      <div className={`bg-radial-pink`}></div>
      <div className={`flex justify-center`}>
        <div className={`bg-line-services`}></div>
        <div className={`flex flex-col max-w-[1400px] mx-auto`}>
          <h1 className={`${styles.heading2} text-gradient max-w-[770px] h-[100%] mb-10`}>Nuestra Filosofia se centra en proporcionar soluciones eficientes y efectivas para  satisfacer las necesidades y desafíos tecnológicos de sus clientes</h1>
          <ButtonFour image={ChevronRight} text={`CUPOS LIMITADOS`} link={''} />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap p-[20px] gap-[20px] m:p-[30px] l:p-[40px] m:gap-[10px] l:gap-[20px]`}>
        <div className={`bg-card-service flex flex-col flex-nowrap h-[542px] w-[350px] m:h-[465px] m:w-[720px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <Image src={Card1Empresa} alt="supportIT" width="240" height="99" />
          <h2 className={`${styles.heading3} my-2.5`}>+300 Empresas nos eligieron</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Ellos confian y confiaron en nosotros. Porque entendemos a la perfección sus necesidades tecnológicas y les brindamos soluciones a medida y efectivas.</p>
          <ButtonTwo image={ChevronRight} text={`Disaster Recovery`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[313px] w-[350px] m:h-[465px] m:w-[520px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <Image src={Card2Empresa} alt="supportIT" width="240" height="99" />
          <h2 className={`${styles.heading3} my-2.5`}>+25 Años en el rubro</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Desde nuestros inicios, nos enfocamos en alcanzar altos estándares de calidad. Con un equipo de expertos en tecnología, logramos ofrecer excelencia técnica año a año.</p>
          <ButtonTwo image={ChevronRight} text={`Disaster Recovery`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[313px] w-[350px] m:h-[465px] m:w-[520px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <Image src={Card3Empresa} alt="supportIT" width="240" height="99" />
          <h2 className={`${styles.heading3} my-2.5`}>+5 Paises presentes</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Nuestra flexibilidad y adaptabilidad nos permiten ajustar nuestros servicios para llegar a todo el mundo, cumpliendo con todas las leyes y regulaciones pertinentes de cada pais.</p>
          <ButtonTwo image={ChevronRight} text={`Disaster Recovery`} link={''} />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[542px] w-[350px] m:h-[465px] m:w-[720px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <Image src={Card4Empresa} alt="supportIT" width="240" height="99" />
          <h2 className={`${styles.heading3} my-2.5`}>+ Y seguimos creciendo</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Nuestro enfoque de innovación continua nos permite poseer últimas actualizaciones y avances en tecnología, mejorando nuestra performance con mayor eficiencia.</p>
          <ButtonTwo image={ChevronRight} text={`Disaster Recovery`} link={''} />
        </div>
      </div>
    </section>
  )
}

export default Features
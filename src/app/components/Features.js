import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonFour } from "./Buttons"
import ContactBall from "../../public/ContactBall.webp"
import ChevronRight from "../../public/ChevronRight.svg"
import Card1Empresa from "../../public/Card1Empresa.png"
import Card2Empresa from "../../public/Card2Empresa.png"
import Card3Empresa from "../../public/Card3Empresa.png"
import Card4Empresa from "../../public/Card4Empresa.png"

const Features = () => {

  return (
    <section id="features" className={``}>
      <div className={`flex flex-col items-center`}>
        <Image className="mt-72 m:mt-60 m:-ml-48 w-[60%] opacity-60 absolute" src={ContactBall} alt="Ball" />
      </div>
      <div className={`flex mb-[60px]`}>
        <div className={`flex flex-col l:w-[1260px] mx-auto gap-[30px]   m:px-0`}>
          <div className={`${styles.heading3Contact} max-w-[770px] h-[100%] pr-2`}>
            <div className={`bg-line-services`}></div>
            <h1 className={`inline text-white`}>Nuestra Filosofia </h1>
            <h3 className={`opacity-40 inline`}>se centra en proporcionar soluciones eficientes y efectivas para  satisfacer las necesidades y desafíos tecnológicos de sus clientes</h3>
          </div>
          <ButtonFour image={ChevronRight} text={`CUPOS LIMITADOS`} link={''} />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap p-[20px] gap-[20px] m:p-[30px] l:p-[40px] m:gap-[10px] l:gap-[20px] max-w-[1380px] mx-auto`}>
        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:w-[720px] p-8`}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card1Empresa} alt="supportIT" width="360" height="210" />
            <h2 className={`${styles.heading3} my-2.5`}>+300 Empresas nos eligieron</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Ellos confian y confiaron en nosotros. Porque entendemos a la perfección sus necesidades tecnológicas y les brindamos soluciones a medida y efectivas.</p>
          </div>
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:w-[520px] p-8`}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card2Empresa} alt="supportIT" width="360" height="210" />
            <h2 className={`${styles.heading3} my-2.5`}>+25 Años en el rubro</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Desde nuestros inicios, nos enfocamos en alcanzar altos estándares de calidad. Con un equipo de expertos en tecnología, logramos ofrecer excelencia técnica año a año.</p>
          </div>
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:w-[520px] p-8`}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card3Empresa} alt="supportIT" width="360" height="210" />
            <h2 className={`${styles.heading3} my-2.5`}>+5 Paises presentes</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Nuestra flexibilidad y adaptabilidad nos permiten ajustar nuestros servicios para llegar a todo el mundo, cumpliendo con todas las leyes y regulaciones pertinentes de cada pais.</p>
          </div>
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:w-[720px] p-8 `}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card4Empresa} alt="supportIT" width="360" height="210" />
            <h2 className={`${styles.heading3} my-2.5`}>+ Y seguimos creciendo</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Nuestro enfoque de innovación continua nos permite poseer últimas actualizaciones y avances en tecnología, mejorando nuestra performance con mayor eficiencia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
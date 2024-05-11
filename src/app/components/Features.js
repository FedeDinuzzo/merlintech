import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import Card1Empresa from "../../public/Card1Empresa.png"
import Card2Empresa from "../../public/Card2Empresa.png"
import Card3Empresa from "../../public/Card3Empresa.png"
import Card4Empresa from "../../public/Card4Empresa.png"

const Features = () => {

  return (
    <section>
      <div id="home" className={`absolute top-0`} />
      <div className='absolute w-full h-[2000px] mt-40 l:-ml-10'>
        <div className={`flex-none inset-0 overflow-hidden absolute`}>
          <div className={`absolute bg-radial-violet w-[780px] h-[780px] mt-40 ml-28 -z-10`}></div>
          <div className={`absolute bg-radial-blue w-[780px] h-[780px] mt-60 z-0`}></div>
          <div className={`absolute bg-radial-blue-dark w-[520px] h-[520px] mt-96 -ml-12 z-0`}></div>
        </div>
      </div>

      <div className={`flex mb-[60px] px-5 z-50`}>
        <div className={`flex flex-col l:w-[1260px] mx-auto gap-[30px] z-50`}>
          <div className={`${styles.heading3Contact} max-w-[810px] h-[100%] pr-2`}>
            <div className={`bg-line-services`}></div>
            <h1 className={`inline text-white`}>Nuestra Filosofía </h1>
            <h3 className={`opacity-40 inline`}>se centra en proporcionar soluciones eficientes y efectivas para  satisfacer las necesidades y desafíos tecnológicos de sus clientes</h3>
          </div>
          <ButtonFour className="cursor-pointer" image={ChevronRight} text={`CUPOS LIMITADOS`} tgt={`_blank`} link={`https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20%F0%9F%92%BB%20Les%20escribo%20desde%20el%20sitio%20web%20`} />
        </div>
      </div>

      <div className={`${styles.flexCenter} px-5 flex-wrap gap-[20px] m:p-[30px] l:p-[40px] m:gap-[10px] l:gap-[20px] max-w-[1380px] mx-auto`}>
        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:w-[720px] p-8 `}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card1Empresa} alt="supportIT" width="360" height="210" priority />
            <h2 className={`${styles.heading3} my-2.5`}>+300 Empresas nos eligieron</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Ellos confían y confiaron en nosotros. Porque entendemos a la perfección sus necesidades tecnológicas y les brindamos soluciones a medida y efectivas.</p>
          </div>
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:max-w-[520px] l:w-[520px] p-8`}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card2Empresa} alt="supportIT" width="360" height="210" />
            <h2 className={`${styles.heading3} my-2.5`}>+25 Años en el rubro</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Desde nuestros inicios, nos enfocamos en alcanzar altos estándares de calidad. Con un equipo de expertos en tecnología, logramos ofrecer excelencia técnica año a año.</p>
          </div>
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap justify-evenly m:h-[465px] m:max-w-[520px] l:w-[520px] p-8`}>
          <div className={`max-w-[360px] mx-auto`}>
            <Image className={`min-w-[282px] mb-5`} src={Card3Empresa} alt="supportIT" width="360" height="210" />
            <h2 className={`${styles.heading3} my-2.5`}>+5 Países presentes</h2>
            <p className={`${styles.paragraph} mb-2.5`}>Nuestra flexibilidad y adaptabilidad nos permiten ajustar nuestros servicios para llegar a todo el mundo, cumpliendo con todas las leyes y regulaciones pertinentes de cada país.</p>
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
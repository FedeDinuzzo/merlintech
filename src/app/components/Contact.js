import styles from "@/app/constants/style"
import Image from 'next/image'
import { services } from '@/app/constants/index'
import Link from "next/link"
import { ButtonTwo } from "./Buttons"
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import cardInnerShadow from "../../public/card-inner-shadow.webp"
// image bottom shadow
import Card1Empresa from "../../public/Card1Empresa.png"
import Card2Empresa from "../../public/Card2Empresa.png"


const Contact = () => {

  return (
    <section id="features" className={`min-h-[100vh] max-w-[1360px] mx-auto flex flex-col flex-wrap justify-center`}>
      {/* <div className={`bg-wave`}></div> */}
      <div className={`bg-radial-pink`}></div>
      <div className={`flex justify-center`}>
        <div className={`bg-line-services`}></div>
        <div className={`flex flex-col max-w-[1400px] mx-auto`}>
          <h1 className={`${styles.heading2} text-gradient max-w-[770px] h-[100%] mb-10`}>Agentes Disponibles. Contactanos y reserva tu lugar en merlintech. Tu negocio crece, nosotros crecemos con vos</h1>
          <ButtonFour image={ChevronRight} text={`COMENZAR CONSULTORIA`} link={''} />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap p-[20px] gap-[20px] m:p-[30px] l:p-[40px] m:gap-[10px] l:gap-[20px]`}>
        <div className={`bg-card-service flex flex-col flex-nowrap h-[313px] w-[350px] m:h-[465px] m:w-[520px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>  
          <h3 className={`${styles.heading3} my-2.5`}>Disney</h3>
          <p className={`${styles.paragraph} mb-2.5`}>DesignCode UI offers an expansive library of UI components, each meticulously crafted for functionality and aesthetics.a</p>
          <Image src={Card1Empresa} alt="supportIT" width="240" height="99" />
        </div>

        <div className={`bg-card-service flex flex-col flex-nowrap h-[313px] w-[350px] m:h-[465px] m:w-[520px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
          <h2 className={`${styles.heading3} my-2.5`}>Nike Argentina</h2>
          <p className={`${styles.paragraph} mb-2.5`}>Our platform provides real-time guidance and advice on UI design best practices whether you're working on layout optimization, color scheme selection, or typography.</p>
          <div className={``}>
            <Image src={Card2Empresa} alt="supportIT" width="240" height="99" />
            <Image src={Card2Empresa} alt="supportIT" width="240" height="99" />
          </div>
        </div>

        <div className={`bg-card-service flex `}>
          <div className={`grid md:grid-cols-4`}>
            <div className={`grid grid-cols-2`}>
              <div>
                <Image src={``} alt="supportIT" width="240" height="99" />
              </div>
              <div className={``}>
                <div className={``}>
                  <h4 className={`${styles.heading3} my-2.5`}>Ubicacion . </h4>
                  <p className={`${styles.paragraph} mb-2.5`}> Billinghurst 1193, 4to A, Buenos Aires, Argentina</p>
                </div>
                <div className={``}>
                  <h4 className={`${styles.heading3} my-2.5`}>Horarios . </h4>
                  <p className={`${styles.paragraph} mb-2.5`}> Lunes a Viernes de 9:00 a 18:00</p>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-2`}>
              <div>
                <Image src={``} alt="supportIT" width="240" height="99" />
              </div>
              <div className={``}>
                <div className={``}>
                  <h4 className={`${styles.heading3} my-2.5`}>Telefono . </h4>
                  <p className={`${styles.paragraph} mb-2.5`}> +54 911 7090-5150</p>
                </div>
                <div className={``}>
                  <h4 className={`${styles.heading3} my-2.5`}>Email . </h4>
                  <p className={`${styles.paragraph} mb-2.5`}> info@merlintech.com.ar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
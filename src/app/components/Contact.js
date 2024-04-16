import styles from "@/app/constants/style"
import Image from 'next/image'
import { services } from '@/app/constants/index'
import Link from "next/link"
import { ButtonTwo } from "./Buttons"
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import ShadowContact from "../../public/ShadowContact.png"
import Disney from "../../public/TestimonialDisney.jpg"
import Nike from "../../public/TestimonialNike1.jpg"
import Nike2 from "../../public/TestimonialNike2.jpg"


const Contact = () => {

  return (
    <section id="features" className={`min-h-[100vh] mx-auto flex flex-col justify-center`}>
      {/* <div className={`bg-wave`}></div> */}
      <div className={`flex justify-center`}>
        <div className={`bg-line-services`}></div>
        <div className={`flex flex-col mx-auto`}>
          <h1 className={`${styles.heading2} text-gradient max-w-[770px] h-[100%] mb-10`}>Agentes Disponibles. Contactanos y reserva tu lugar en merlintech. Tu negocio crece, nosotros crecemos con vos</h1>
          <ButtonFour image={ChevronRight} text={`COMENZAR CONSULTORIA`} link={''} />
        </div>
      </div>


      <div className={`${styles.flexCenter} flex-wrap p-[20px] gap-[20px] m:p-[30px] m:gap-[10px] l:gap-[20px]`}>
        <div className={`bg-card-contact h-[465px] max-w-[620px] p-5`}>
          {/* AGREGAR SOMBRA CON CSS */}
          <Image className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-10" src={ShadowContact} alt="Overlay" />
          <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Disney</h3>
          <p className={`${styles.paragraph} mb-5 pr-32`}>DesignCode UI offers real-time guidance and advice on UI design best an expansive library of UI components, each meticulously crafted for functionality and aesthetics.a</p>
          <div className={`flex justify-end absolute inset-0`}>
            <Image className={`self-end rounded-br-[20px]`} src={Disney} alt="supportIT" width="603" height="305" />
          </div>
        </div>

        <div className={`bg-card-contact h-[465px] max-w-[620px] p-5`}>
          <h2 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Nike Argentina</h2>
          <p className={`${styles.paragraph} mb-5 pr-32`}>Our platform provides real-time guidance and advice on UI design best practices whether you're working on layout optimization, color scheme selection, or typography.</p>
          <div className={`flex justify-end absolute inset-0`}>
            {/* EFECTO FONDO 1 - RECORTAR DE NUEVO */}
            <Image className={`self-end`} src={Nike} alt="supportIT" width="245" height="266" />
            <Image className={`self-end rounded-br-[20px]`} src={Nike2} alt="supportIT" width="362" height="320" />
          </div>
        </div>

        <div className={`flex justify-evenly bg-card-contact m:h-[194px] m:min-w-[1000px] l:w-[1260px] mx-auto`}>
          <div className={`${styles.flexCenter}`}>
            <div className={`mx-2.5`}>
              <Image src={``} alt="supportIT" width="24" height="24" />
            </div>
            <div className={`max-w-[362px]`}>
              <div className={``}>
                <h4 className={`${styles.heading3} my-2.5 inline`}>Ubicacion . </h4>
                <p className={`${styles.paragraph} mb-2.5 inline`}> Billinghurst 1193, 4to A, Buenos Aires, Argentina</p>
              </div>
              <div className={``}>
                <h4 className={`${styles.heading3} my-2.5 inline`}>Horarios . </h4>
                <p className={`${styles.paragraph} mb-2.5 inline`}> Lunes a Viernes de 9:00 a 18:00</p>
              </div>
            </div>
          </div>

          <div className={`${styles.flexCenter}`}>
            <div className={`mx-2.5`}>
              <Image src={``} alt="supportIT" width="24" height="24" />
            </div>
            <div className={`max-w-[362px]`}>
              <div className={``}>
                <h4 className={`${styles.heading3} my-2.5 inline`}>Telefono . </h4>
                <p className={`${styles.paragraph} mb-2.5 inline`}> +54 911 7090-5150</p>
              </div>
              <div className={``}>
                <h4 className={`${styles.heading3} my-2.5 inline`}>Email . </h4>
                <p className={`${styles.paragraph} mb-2.5 inline`}> info@merlintech.com.ar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact
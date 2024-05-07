import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import ContactBall from "../../public/ContactBall.webp"
import ShadowContact from "../../public/ShadowContact.png"
import Disney from "../../public/TestimonialDisney.jpg"
import Nike from "../../public/TestimonialNike1.jpg"
import Nike2 from "../../public/TestimonialNike2.jpg"
import Number from "../../public/Number.svg"
import Number2 from "../../public/Number2.svg"

const Contact = () => {
  return (
    <section className={`mt-96 px-5`}>
      <div id="testimonios" className={`absolute -mt-20`} />
      <div className={`flex justify-center -ml-40`}>
        <Image className="mt-44 hidden m:flex absolute" src={ContactBall} alt="Ball" />
      </div>
      <div className={`flex mb-[60px]`}>
        <div className={`flex flex-col mx-auto gap-[30px] l:w-[1260px]`}>
          <div className={`${styles.heading3Contact} max-w-[770px] h-[100%] pr-20`}>
            <h3 className={`inline text-white`}>Agentes Disponibles </h3>
            <h3 className={`opacity-40 inline`}>contactanos y reserva tu lugar en merlintech. Tu negocio crece, nosotros crecemos con vos.</h3>
          </div>
          <ButtonFour image={ChevronRight} text={`COMENZAR CONSULTORÍA`} link={''} />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-wrap py-[20px] gap-[20px] m:py-[30px] m:gap-[10px] l:gap-[20px] max-w-[1380px] mx-auto`}>
        <div className={`bg-card-contact pt-5 pl-5 max-w-[590px] l:max-w-[620px]`}>
          {/* AGREGAR SOMBRA CON CSS */}
          <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Disney</h3>
          <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>DesignCode UI offers real-time guidance and advice on UI design best an expansive library of UI components, each meticulously crafted for functionality and aesthetics.a</p>
          <div className={`flex`}>
            <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
            <Image className={`self-end rounded-br-[20px]`} src={Disney} alt="supportIT" width="603" height="305" />
          </div>
        </div>

        <div className={`bg-card-contact pt-5 pl-5 max-w-[590px] l:max-w-[620px]`}>

          <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Nike Argentina</h3>
          <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>Our platform provides real-time guidance and advice on UI design best practices whether youre working on layout optimization, color scheme selection, or typography.</p>
          <div className={`flex`}>
            <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
            <Image className={`self-end w-2/5`} src={Nike} alt="supportIT" width="245" height="266" />
            <Image className={`self-end w-3/5 rounded-br-[20px]`} src={Nike2} alt="supportIT" width="362" height="320" />
          </div>
        </div>

        <div className={`bg-card-contact flex flex-grow flex-wrap max-w-[1260px] min-h-[194px] justify-evenly p-10`}>
          <div id="contacto" className={`absolute -mt-32`} />
          <div className={`flex flex-col m:flex-row justify-center align-top`}>
            <div className={`mr-2.5 -mt-3 mb-4 -ml-2.5 l:-ml-24`}>
              <Image src={Number} alt="supportIT" width="48" height="48" />
            </div>
            <div className={`max-w-[340px]`}>
              <div className={``}>
                <h4 className={`${styles.heading3White} my-2.5 inline`}>Ubicación . </h4>
                <p className={`${styles.paragraph} mb-2.5 pl-2 inline`}>Billinghurst 1193, 4to A, Buenos Aires, Argentina</p>
              </div>
              <div className={``}>
                <h4 className={`${styles.heading3White} my-2.5 inline`}>Horarios . </h4>
                <p className={`${styles.paragraph} mb-2.5 pl-2 inline`}>Lunes a Viernes de 9:00 a 18:00</p>
              </div>
            </div>
          </div>

          <div className={`flex flex-col m:flex-row align-top max-w-[430px] mt-12 m:mt-0`}>
            <div className={`mr-2.5 mb-4`}>
              <Image src={Number2} alt="supportIT" width="24" height="24" />
            </div>
            <div className={`max-w-[330px] flex flex-wrap items-start m:block`}>
              <div className={``}>
                <h4 className={`${styles.heading3White} my-2.5 inline`}>Telefono . </h4>
                <p className={`${styles.paragraph} mb-2.5 pl-2 inline`}>+54 911 7090-5150</p>
              </div>
              <div className={`mb-8 m:mb-0`}>
                <h4 className={`${styles.heading3White} my-2.5 inline`}>Email . </h4>
                <p className={`${styles.paragraph} mb-2.5 pl-2 inline underline underline-offset-2`}>info@merlintech.com.ar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact
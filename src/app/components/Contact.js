import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonFour } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import Number from "../../public/Number.svg"
import Number2 from "../../public/Number2.svg"
import { FlipCard } from './FlipCard.js';
import { Card1, Card2 } from './Cards'


const Contact = () => {

  const itemsArray1 = [
    <Card1 key="card1" />,
    <Card2 key="card2" />,
  ];

  const itemsArray2 = [
    <Card2 key="card2" />,
    <Card1 key="card1" />,
  ];

  return (
    <section className={`mt-96`}>
      <div id="testimonios" className={`absolute -mt-20`} />
      <div className='absolute w-full h-[2000px] mt-28'>
        <div className={`flex-none inset-0 overflow-hidden absolute`}>
          <div className={`absolute bg-radial-violet-full w-[700px] h-[700px] mt-72 ml-28 opacity-70 l:opacity-100 l:mt-40 m:w-[600px] m:h-[600px]  -z-10`}></div>
          <div className={`absolute bg-radial-blue-full w-[800px] h-[800px] mt-72 opacity-70 l:opacity-100 l:mt-40 m:w-[700px] m:h-[700px] z-0`}></div>
        </div>
      </div>

      <div className={`flex mb-[60px] px-5`}>
        <div className={`flex flex-col mx-auto gap-[30px] l:w-[1260px]`}>
          <div className={`${styles.heading3Contact} max-w-[770px] h-[100%] pr-20`}>
            <h3 className={`inline text-white`}>Agentes Disponibles </h3>
            <h3 className={`opacity-40 inline`}>contactanos y reserva tu lugar en merlintech. Tu negocio crece, nosotros crecemos con vos.</h3>
          </div>
          <ButtonFour image={ChevronRight} text={`COMENZAR CONSULTORÍA`} link={''} />
        </div>
      </div>
      <div className="space-y-10 px-5">
        <div className={`flex flex-wrap mx-auto max-w-[590px] m:max-w-[1260px] max-h-[960px] space-y-10 m:space-y-0  m:max-h-[460px]`}>
          <div className="w-full m:w-[calc(50%-20px)] m:mr-5 m:h-[460px] min-w-[356px] flex-wrap">
            <FlipCard itemsArray={itemsArray1} />
          </div>
          <div className="w-full m:w-[calc(50%-20px)] m:ml-5 m:h-[460px] min-w-[356px] flex-wrap">
            <FlipCard itemsArray={itemsArray2} />
          </div>
        </div>
        <div className={`flex flex-wrap max-w-[1260px] mx-auto`}>
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
                  <h4 className={`${styles.heading3White} my-2.5 inline`}>Teléfono . </h4>
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
      </div>
    </section >
  )
}

export default Contact
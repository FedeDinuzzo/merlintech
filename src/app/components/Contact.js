import styles from "@/app/constants/style"
import Image from 'next/image'
import { ButtonFour } from "./Buttons"
import mouse from "../../public/mouse.svg"
import Number from "../../public/Number.svg"
import Number2 from "../../public/Number2.svg"
import { FlipCard } from './FlipCard.js';
import { Card1, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10 } from './Cards'
import Link from "next/link"

const Contact = () => {

  const itemsArray1 = [
    <Card1 key="card1" />,
    <Card3 key="card3" />,
    <Card5 key="card5" />,
    <Card7 key="card7" />,
    <Card9 key="card9" />,
  ];

  const itemsArray2 = [
    <Card4 key="card4" />,
    <Card6 key="card6" />,
    <Card8 key="card8" />,
    <Card10 key="card10" />,
  ];

  return (
    <section className={`mt-80`}>
      <div id="testimonios" className={`absolute -mt-20`} />
      <div className='absolute w-full h-[1600px] m:h-[1200px] l:h-[900px] mt-28 m:mt-0 l:mt-28'>
        <div className={`flex-none inset-0 overflow-hidden absolute`}>
          <div className={`absolute bg-radial-violet-full w-[700px] h-[700px] mt-72 ml-28 opacity-70 l:opacity-100 l:mt-40 m:w-[600px] m:h-[600px]  -z-10`}></div>
          <div className={`absolute bg-radial-blue-full w-[800px] h-[800px] mt-72 opacity-70 l:opacity-100 l:mt-40 m:w-[700px] m:h-[700px] z-0`}></div>
        </div>
      </div>

      <div className={`flex mb-[60px] px-5 z-50`}>
        <div className={`flex flex-col mx-auto gap-[30px] m:w-[1260px] z-50`}>
          <div className={`${styles.heading3Contact} max-w-[770px] h-[100%] pr-10 l:pr-20`}>
            <h3 className={`inline text-white`}>Testimonios y Opiniones:</h3>
            <h3 className={`opacity-40 inline`}> Las empresas líderes en Argentina y el mundo confían en merlintech para potenciar su éxito.</h3>
          </div>
          <ButtonFour image={mouse} text={`CLICKEA LAS TARJETAS`} link={`#testimonials`} />
        </div>
      </div>
      <div id="testimonials" className="absolute -mt-20"></div>
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
                <div className={`mb-2 m:mb-0`}>
                  <Link href={`https://www.google.com/maps/place/Merlintech/@-34.5958388,-58.4138098,15z/data=!4m2!3m1!1s0x0:0x9627f54691cefafc?sa=X&ved=1t:2428&ictx=111`} target="_blank">
                    <h4 className={`${styles.heading3White} my-2.5 inline`}>Ubicación . </h4>
                    <p className={`${styles.paragraph} mb-2.5 pl-2 inline`}>Billinghurst 1193, 4to A, Buenos Aires, Argentina</p>
                  </Link>
                </div>
                <div className={``}>
                  <Link href={`https://www.google.com/search?q=merlintech&sca_esv=b2746cf197726f04&sca_upv=1&sxsrf=ADLYWILu9Z1ggP-66dgs0OJWHIHaK3ba5w%3A1715385983644&ei=f7Y-ZtfzJqLU1sQP_tOx8AU&ved=0ahUKEwiXr9ThpoSGAxUiqpUCHf5pDF4Q4dUDCBA&uact=5&oq=merlintech&gs_lp=Egxnd3Mtd2l6LXNlcnAiCm1lcmxpbnRlY2gyChAjGIAEGCcYigUyCBAAGBMYBxgeMggQABgTGAcYHjIIEAAYExgHGB4yCBAAGBMYBxgeMggQABgTGAcYHjIOEC4YExgHGMcBGB4YrwEyCBAAGBMYBxgeMgoQABgTGAcYCBgeMgoQABgTGAcYCBgeSIMQUKUHWKEKcAJ4AJABAJgBcKABnAKqAQMyLjG4AQPIAQD4AQGYAgOgAqcCwgIHECMYsAIYJ8ICCxAAGIAEGBMYChgNwgIIEAAYgAQYogSYAwCIBgGSBwMyLjGgB4ES&sclient=gws-wiz-serp#ip=1`} target="_blank">
                    <h4 className={`${styles.heading3White} my-2.5 inline`}>Horarios . </h4>
                    <p className={`${styles.paragraph} mb-2.5 pl-2 inline`}>Lunes a Viernes de 9:00 a 18:00</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`flex flex-col m:flex-row align-top max-w-[430px] mt-12 m:mt-0`}>
              <div className={`mr-2.5 mb-4`}>
                <Image src={Number2} alt="supportIT" width="24" height="24" />
              </div>
              <div className={`max-w-[330px] flex flex-wrap items-start m:block`}>
                <div className={`mb-2 m:mb-0`}>
                  <Link href={`tel:+5491170905150`} target="_blank">
                    <h4 className={`${styles.heading3White} my-2.5 inline`}>Teléfono . </h4>
                    <p className={`${styles.paragraph} mb-2.5 pl-2 inline`}>+54 911 7090-5150</p>
                  </Link>
                </div>
                <div className={`mb-8 m:mb-0`}>
                  <Link href={`mailto:info@merlintech.com.ar`} target="_blank">
                    <h4 className={`${styles.heading3White} my-2.5 inline`}>Email . </h4>
                    <p className={`${styles.paragraph} mb-2.5 pl-2 inline underline underline-offset-2`}>info@merlintech.com.ar</p>
                  </Link>
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
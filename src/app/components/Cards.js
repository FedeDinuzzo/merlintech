import React from 'react'
import styles from "@/app/constants/style"
import Image from 'next/image'
import ShadowContact from "../../public/ShadowContact.png"
import Disney from "../../public/Disney1.png"
import Unicef1 from "../../public/Unicef1.png"
import Bago1 from "../../public/Bago1.png"
import Bago2 from "../../public/Bago2.png"
import localiza1 from "../../public/localiza1.png"
import ArreBeef1 from "../../public/arrebeef1.png"
import ArreBeef2 from "../../public/arrebeef2.png"
import EnvasesLaPlata1 from "../../public/EnvasesLaPlata1.png"
import sanatorio1 from "../../public/sanatorio1.png"
import sanatorio2 from "../../public/sanatorio2.png"
import eskabe1 from "../../public/eskabe1.png"
import villa1 from "../../public/villa1.png"
import villa2 from "../../public/villa2.png"


export function Card1() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-3 mb-2`}>Disney</h3>
        <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>Si lo puedes soñar, lo puedes hacer. Gracias a todo equipo de merlintech por hacer que la magia de Disney se mantenga siempre conectada.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end rounded-br-[20px] max-h-[305px]`} src={Disney} alt="supportIT" width="603" height="305" />
        </div>
      </div>
    </>
  )
}

export function Card2() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>CAMBIAR</h3>
        <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>Our platform provides real-time guidance and advice on UI design best practices whether youre working on layout optimization, color scheme selection, or typography.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end w-2/5 max-h-[256px]`} src={""} alt="supportIT" width="241" height="256" />
          <Image className={`self-end w-3/5 rounded-br-[20px] max-h-[320px]`} src={""} alt="supportIT" width="362" height="320" />
        </div>
      </div>
    </>
  )
}

export function Card3() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-3 mb-2`}>Unicef</h3>
        <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>Estamos muy contentos con sus servicios, su trabajo incansable y compromiso nos permite avanzar en la protección y el bienestar de los niños en todo el mundo.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end rounded-br-[20px] max-h-[305px]`} src={Unicef1} alt="supportIT" width="603" height="305" />
        </div>
      </div>
    </>
  )
}

export function Card4() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Bagó</h3>
        <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>En nuestros Laboratorios siempre buscamos eficiencia, sus servicios y soporte para mantenernos en linea son vitales para nuestro compromiso con la salud global.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end w-2/5 max-h-[256px]`} src={Bago1} alt="supportIT" width="241" height="256" />
          <Image className={`self-end w-3/5 rounded-br-[20px] max-h-[320px]`} src={Bago2} alt="supportIT" width="362" height="320" />
        </div>
      </div>
    </>
  )
}

export function Card5() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-3 mb-2`}>Localiza</h3>
        <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>En Localiza, el equipo de soporte IT es como el motor que impulsa nuestra operación. Gracias por asegurar que nuestros sistemas funcionen sin problemas.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end rounded-br-[20px] max-h-[305px]`} src={localiza1} alt="supportIT" width="603" height="305" />
        </div>
      </div>
    </>
  )
}

export function Card6() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>ArreBeef</h3>
        <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>Su labor en Soporte IT es fundamental para asegurar la integridad de nuestros procesos, fortaleciendo nuestra reputación como un frigorífico de confianza.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end w-2/5 max-h-[256px]`} src={ArreBeef1} alt="supportIT" width="241" height="256" />
          <Image className={`self-end w-3/5 rounded-br-[20px] max-h-[320px]`} src={ArreBeef2} alt="supportIT" width="362" height="320" />
        </div>
      </div>
    </>
  )
}

export function Card7() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-3 mb-2`}>Envases La Plata</h3>
        <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>En nuestra fábrica de envases, ustedes son como el empaque perfecto: invisible pero esencial. Nuestros procesos y sistemas fluyen sin interrupciones.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end rounded-br-[20px] max-h-[305px]`} src={EnvasesLaPlata1} alt="supportIT" width="603" height="305" />
        </div>
      </div>
    </>
  )
}

export function Card8() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Sanatorio Mater Dei</h3>
        <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>Nosotros nos comprometemos con la salud de los pacientes y merlintech se compromete con nosotros. Su diligencia y precisión garantizan tecnología funcional.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end w-2/5 max-h-[256px]`} src={sanatorio1} alt="supportIT" width="241" height="256" />
          <Image className={`self-end w-3/5 rounded-br-[20px] max-h-[320px]`} src={sanatorio2} alt="supportIT" width="362" height="320" />
        </div>
      </div>
    </>
  )
}

export function Card9() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-3 mb-2`}>eskabe</h3>
        <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>merlintech es maestría técnica, todos los problemas de sistemas los saben resolver! Nos ayudan a transformar miles de hogares en espacios confortables.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end rounded-br-[20px] max-h-[305px]`} src={eskabe1} alt="supportIT" width="603" height="305" />
        </div>
      </div>
    </>
  )
}

export function Card10() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full cursor-pointer`}>
        <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Villa D&apos;Agri</h3>
        <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>Excelencia y disponibilidad es lo que merlintech siempre nos ofrece. Sus aportes en sistemas tecnológicos son la salsa que une nuestros ingredientes!</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end w-2/5 max-h-[256px]`} src={villa1} alt="supportIT" width="249" height="256" />
          <Image className={`self-end w-3/5 rounded-br-[20px] max-h-[320px]`} src={villa2} alt="supportIT" width="362" height="320" />
        </div>
      </div>
    </>
  )
}
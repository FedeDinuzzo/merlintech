import React from 'react'
import styles from "@/app/constants/style"
import Image from 'next/image'
import ShadowContact from "../../public/ShadowContact.png"
import Disney from "../../public/TestimonialDisney.jpg"
import Nike from "../../public/TestimonialNike1.jpg"
import Nike2 from "../../public/TestimonialNike2.jpg"

export function Card1() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full`}>
        <h3 className={`${styles.heading3} text-[20px] mt-3 mb-2`}>Disney</h3>
        <p className={`${styles.paragraph} mb-5 pr-5 m:pr-32 max-w-[620px]`}>DesignCode UI offers real-time guidance and advice on UI design best an expansive library of UI components, each meticulously crafted for functionality and aesthetics.a</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 z-10 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end rounded-br-[20px]`} src={Disney} alt="supportIT" width="603" height="305" />
        </div>
      </div>
    </>
  )
}

export function Card2() {
  return (
    <>
      <div className={`bg-card-contact pt-5 pl-5 h-full`}>
        <h3 className={`${styles.heading3} text-[20px] mt-2.5 mb-2`}>Nike Argentina</h3>
        <p className={`${styles.paragraph} mb-2 pr-5 m:pr-32 max-w-[620px]`}>Our platform provides real-time guidance and advice on UI design best practices whether youre working on layout optimization, color scheme selection, or typography.</p>
        <div className={`flex`}>
          <Image className="absolute w-full h-full object-cover top-0 left-0 rounded-[20px]" src={ShadowContact} alt="Overlay" />
          <Image className={`self-end w-2/5`} src={Nike} alt="supportIT" width="245" height="266" />
          <Image className={`self-end w-3/5 rounded-br-[20px]`} src={Nike2} alt="supportIT" width="362" height="320" />
        </div>
      </div>
    </>
  )
}

export function Card3() {
  return (
    <div>

    </div>
  )
}

export function Card4() {
  return (
    <div>

    </div>
  )
}
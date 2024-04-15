import styles from "@/app/constants/style"
import Image from 'next/image'
import { services } from '@/app/constants/index'
import Link from "next/link"
import { ButtonThree } from "./Buttons"
import ChevronRight from "../../public/ChevronRight.svg"
import Card1Services from "../../public/Card1Services.png"
import Card2Services from "../../public/Card2Services.png"
import Card3Services from "../../public/Card3Services.png"
import Card4Services from "../../public/Card4Services.png"

const AllServices = () => {
  return (
    <section id="home" className={`min-h-[100vh]`}>
      {/* <div className={`bg-wave`}></div> */}
      {/* <div className={`bg-radial-pink`}></div> */}
      <div className={``}>
        <div className={`bg-line-services`}></div>
        <h2 className={``}></h2>
        <h1 className={``}></h1>
      </div>

      <div className={`flex`}>
        {services.map((card, index) => (
          <div key={card.id} className={`bg-card-hero flex flex-col flex-nowrap h-[380px] w-[340px] gap-2.5 p-5 top-[50%] l:top-[-22px] `}>
            {index % 2 === 0 ? <Image src={`/${card.image}`} alt="supportIT" width="300" height="99" priorty /> : ''}
            
            <h2 className={`${styles.heading3} my-2.5`}>{card.title}</h2>
            <p className={`${styles.paragraph} mb-2.5`}>{card.content}</p>
            <ButtonThree image={`/${card.btnIcon}`} text={card.button} link={card.id} />
            
            {index % 2 === 0 ? '' : <Image src={} alt="supportIT" width="380" height="140" priorty />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllServices
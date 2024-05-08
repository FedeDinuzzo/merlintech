import React from 'react'
import Image from 'next/image'
import World from '../../public/Earth.jpg'
import WorldBlur from '../../public/ContactBall.webp'
import Polygon0 from '../../public/Polygon0.png'
import Polygon1 from '../../public/Polygon1.png'
import Polygon2 from '../../public/Polygon2.png'
import Polygon3 from '../../public/Polygon3.png'
import Polygon4 from '../../public/Polygon4.png'
import Polygon5 from '../../public/Polygon5.png'
import Polygon6 from '../../public/Polygon6.png'
import Polygon7 from '../../public/Polygon7.png'
import Polygon8 from '../../public/Polygon8.png'
import Polygon9 from '../../public/Polygon9.png'
import Polygon10 from '../../public/Polygon10.png'
import styles from '../constants/style'

function Clients() {
  return (
    <>
      <section id="clientes" smooth="true" className={`min-h-[90vh] w-full flex flex-col items-center justify-center px-5`}>
        <h2 className={`${styles.heading3} text-center text-[36px] m:text-[60px] font-normal py-1 m:py-4 z-20`}>Clientes destacados</h2>
        <div className={`z-20 text-center flex justify-between l:w-[1100px] `}>
          <h2 className={`${styles.heading3} text-[36px] m:text-[60px] font-normal py-1 m:py-4 m:space-x-40 l:space-x-60`}>
            <span>alrededor</span>
            <span> del mundo</span>
          </h2>
        </div>

        <div className='absolute w-full h-[100vh] mt-48'>
          <div className={`flex-none inset-0 overflow-hidden absolute`}>
            <div className={`absolute bg-radial-violet w-[300px] h-[300px] ml-12 mt-64 m:w-[400px] m:h-[400px] m:ml-48 m:mt-48 z-10`}></div>
            <div className={`absolute bg-radial-blue w-[400px] h-[400px] mt-56 m:w-[500px] m:h-[500px] m:mt-64 -ml-10 z-0`}></div>
          </div>
        </div>

        <Image className={`absolute -z-10 mt-36 m:mt-48`} src={World} alt="World" width="667" height="647" />

        <div className={`grid grid-cols-4 max-w-[100vw] px-4 m:max-w-[613px] mt-0 m:-mt-16 z-20`}>
          <div className={`mt-[56%] -mx-2 m:-mx-3`}>
            <Image className={`mb-3`} src={Polygon2} alt="Brands and Partners" width="163" height="141" />
            <Image src={Polygon6} alt="Brands and Partners" width="163" height="141" />
          </div>
          <div className={`-mx-2 m:-mx-3`}>
            <Image className={`mb-3`} src={Polygon1} alt="Brands and Partners" width="163" height="141" />
            <Image className={`mb-3`} src={Polygon4} alt="Brands and Partners" width="163" height="141" />
            <Image src={Polygon8} alt="Brands and Partners" width="163" height="141" />
          </div>
          <div className={`-mt-[56%] -mx-2 m:-mx-3`}>
            <Image className={`mb-3`} src={Polygon0} alt="Brands and Partners" width="163" height="141" />
            <Image className={`mb-3`} src={Polygon3} alt="Brands and Partners" width="163" height="141" />
            <Image className={`mb-3`} src={Polygon7} alt="Brands and Partners" width="163" height="141" />
            <Image className={`w-auto h-auto`} src={Polygon10} alt="Brands and Partners" width="163" height="141" />
          </div>
          <div className={`mt-[112%] -mx-2 m:-mx-3`}>
            <Image className={`mb-3`} src={Polygon5} alt="Brands and Partners" width="163" height="141" />
            <Image src={Polygon9} alt="Brands and Partners" width="163" height="141" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients
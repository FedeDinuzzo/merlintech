'use client'
import React, { Suspense } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ServerIframe from './ServerIframe'
import Spline from '@splinetool/react-spline'
import styles from '../constants/style'
import Hexagon0 from '../../public/Hexagon0.png'
import Hexagon1 from '../../public/Hexagon1.png'
import Hexagon2 from '../../public/Hexagon2.png'
import Hexagon3 from '../../public/Hexagon3.png'
import Hexagon4 from '../../public/Hexagon4.png'
import Hexagon5 from '../../public/Hexagon5.png'
import Hexagon6 from '../../public/Hexagon6.png'
import Hexagon7 from '../../public/Hexagon7.png'
import Hexagon8 from '../../public/Hexagon8.png'
import Hexagon9 from '../../public/Hexagon9.png'
import Hexagon10 from '../../public/Hexagon10.png'
import DistortedSpiral from '../../public/DistortedSpiral.jpg'
import Ceo from '../../public/Ceo.png'

function Partners() {
  return (
    <section className={`min-h-[116vh] flex flex-col justify-center items-center px-5`}>
      <div className={`flex z-10`}>
        <div id="socios" smooth="true" className='-mt-40'></div>
        <h3 className={`${styles.heading2Partners} text-gradient max-w-[305px] tracking-tighter`}>NUESTROS PARTNERS & RESELLERS</h3>
        <div className={`${styles.heading2Partners} m:max-w-[305px] flex flex-col items-end mt-2`}>
          <h4 className={`text-[90px] m:text-[140px] text-gradient py-8`}>+24</h4>
          <p className={`text-[16px] text-dimWhite -mt-2 m:-mt-4`}>Socios desde 2000</p>
        </div>
      </div>

      {/* <Suspense fallback={<p>Loading iframe...</p>}>
        <ServerIframe />
      </Suspense> */}
      <div className={`flex justify-center`}>
        <Image className={`absolute`} src={DistortedSpiral} alt="Brands and Partners" width="664" height="757" />
      </div>
      {/* <Spline className="w-full flex l:scale-[1.2] items-center justify-center md:justify-start" scene='https://prod.spline.design/4IeNjp3Pr8ziJ5bH/scene.splinecode' /> */}
      {/* <iframe src='https://my.spline.design/distortedspiralcopy-d85ad473f4a28e665eaab8ae4f04118b/' frameBorder='0' width='100%' height='100%'></iframe> */}

      <div className='absolute w-full h-[1000px] -mt-32 m:-mt-48'>
        <div className={`flex-none inset-0 overflow-hidden absolute pt-72`}>
          <div className={`absolute bg-radial-violet w-[500px] h-[500px] opacity-50 -mt-32 l:-mt-20 ml-40 z-10`}></div>
          <div className={`absolute bg-radial-blue w-[500px] h-[500px] opacity-40 mt-0 -ml-10 l:w-[700px] l:h-[700px] z-10`}></div>
        </div>
      </div>

      <div className={`absolute mt-10 z-0`}>
        <div className={`hidden m:flex bg-lines-partners h-[1440px] w-[100vw] max-w-[1998px] mx-auto`}></div>
      </div>

      <div className={`grid grid-cols-4 max-w-[96vw] m:max-w-[613px] z-50`}>
        <div className={`mt-[56%] -mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={Hexagon2} alt="Brands and Partners" width="175" height="151" />
          <Image src={Hexagon6} alt="Brands and Partners" width="175" height="151" />
        </div>
        <div className={`-mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={Hexagon1} alt="Brands and Partners" width="175" height="151" />
          <Image className={`mb-3`} src={Hexagon4} alt="Brands and Partners" width="175" height="151" />
          <Image src={Hexagon8} alt="Brands and Partners" width="175" height="151" />
        </div>
        <div className={`-mt-[56%] -mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={Hexagon0} alt="Brands and Partners" width="175" height="151" />
          <Image className={`mb-3`} src={Hexagon3} alt="Brands and Partners" width="175" height="151" />
          <Image className={`mb-3`} src={Hexagon7} alt="Brands and Partners" width="175" height="151" />
          <Image src={Hexagon10} alt="Brands and Partners" width="175" height="151" />
        </div>
        <div className={`mt-[112%] -mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={Hexagon5} alt="Brands and Partners" width="175" height="151" />
          <Image src={Hexagon9} alt="Brands and Partners" width="175" height="151" />
        </div>
      </div>

      <div className={`z-40 m:max-w-[613px] space-y-8`}>
        <h3 className={`${styles.heading3} font-semibold text-[16px] pt-32`}>Tecnología de Vanguardia</h3>
        <p className={`${styles.paragraph}`}>Junto a nuestros aliados en tecnología y distribuidores ofrecemos soluciones IT de primer nivel y garantizamos un soporte técnico excepcional a cada cliente</p>

        <div className={`flex items-center space-x-4`}>
          <Image className={`h-11 w-11`} src={Ceo} alt="CEO" />
          <div className={``}>
            <h4 className={`${styles.paragraph} text-secondary opacity-80`}>Diego Pineda</h4>
            <p className={`${styles.paragraph} text-[14px]`}>CEO - Merlin Technology</p>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Partners
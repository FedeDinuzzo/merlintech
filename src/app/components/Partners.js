import React from 'react'
import Image from 'next/image'
import styles from '../constants/style'
import SpiralBlur from '../../public/SpiralBlur.png'
import hexagon0 from '../../public/hexagon0.png'
import hexagon1 from '../../public/hexagon1.png'
import hexagon2 from '../../public/hexagon2.png'
import hexagon3 from '../../public/hexagon3.png'
import hexagon4 from '../../public/hexagon4.png'
import hexagon5 from '../../public/hexagon5.png'
import hexagon6 from '../../public/hexagon6.png'
import hexagon7 from '../../public/hexagon7.png'
import hexagon8 from '../../public/hexagon8.png'
import hexagon9 from '../../public/hexagon9.png'
import hexagon10 from '../../public/hexagon10.png'

function Partners() {
  return (
    <section className={`min-h-[160vh] flex flex-col justify-center items-center`}>
      <div className={`flex z-10`}>
        <h3 className={`${styles.heading2Partners} text-gradient max-w-[305px] tracking-tighter `}>NUESTROS PARTNERS & RESELLERS</h3>
        <div className={`${styles.heading2Partners}  max-w-[305px] flex flex-col items-end mt-2`}>
          <h4 className={`text-[140px] text-gradient py-8`}>+24</h4>
          <p className={`text-[16px] text-dimWhite -mt-4`}>Socios desde 2000</p>
        </div>
      </div>

      <div className={`z-0 absolute w-full h-[1440px]`}>
        <iframe src='https://my.spline.design/distortedspiralcopy-d85ad473f4a28e665eaab8ae4f04118b/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
      <Image className={`absolute z-10 mt-64 m:-mt-14 opacity-60`} src={SpiralBlur} alt="gradient lights" width="1080" height="1080" />
      <div className={`bg-lines-partners mt-10 z-0`}></div>


      <div className={`grid grid-cols-4 max-w-[94vw] px-4 m:max-w-[613px] z-50`}>
        <div className={`mt-[56%] -mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={hexagon2} alt="Brands and Partners" width="175" height="151" />
          <Image src={hexagon6} alt="Brands and Partners" width="175" height="151" />
        </div>
        <div className={`-mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={hexagon1} alt="Brands and Partners" width="175" height="151" />
          <Image className={`mb-3`} src={hexagon4} alt="Brands and Partners" width="175" height="151" />
          <Image src={hexagon8} alt="Brands and Partners" width="175" height="151" />
        </div>
        <div className={`-mt-[56%] -mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={hexagon0} alt="Brands and Partners" width="175" height="151" />
          <Image className={`mb-3`} src={hexagon3} alt="Brands and Partners" width="175" height="151" />
          <Image className={`mb-3`} src={hexagon7} alt="Brands and Partners" width="175" height="151" />
          <Image src={hexagon10} alt="Brands and Partners" width="175" height="151" />
        </div>
        <div className={`mt-[112%] -mx-[8px] m:-mx-3`}>
          <Image className={`mb-3`} src={hexagon5} alt="Brands and Partners" width="175" height="151" />
          <Image src={hexagon9} alt="Brands and Partners" width="175" height="151" />
        </div>
      </div>

      <div className={`z-40 m:max-w-[613px]`}>
        <h3 className={`${styles.heading3} pt-32`}>Tecnologia de Vanguardia</h3>
        <p className={`${styles.paragraph}`}>Junto a nuestros aliados en tecnología y distribuidores ofrecemos soluciones IT de primer nivel y garantizamos un soporte técnico excepcional a cada cliente</p>

        <div className={``}>
          <Image className={``} src={SpiralBlur} alt="gradient lights" width="40" height="40" />
          <div className={``}>
            <h4 className={``}>Diego Pineda</h4>
            <p className={``}>CEO - Merlin Technology</p>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Partners
import styles from "@/app/constants/style"
import Image from 'next/image'
import supportIT from "@/public/supportIT.png"

const Hero = () => {

  return (
    <section id="home" className={`-m-6 flex m:flex-row flex-col ${styles.paddingY} m:mt-[56px] l:-mt-[48px] l:-mt-16`}>
      <div className={`flex-1 ${styles.flexStartHero} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="max-h-[40px] fadeTop flex flex-row items-center -mt-4 sm:mt-0 lg:mt-[28px] xl:mt-0 py-[3px] xl:py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={""} height="32px" width="32px" priority className="-ml-2" alt="autorizado" />

          <p className={`${styles.paragraph} flex`}>
            <span className="pr-1 text-white">{""}</span>
            {""} {" "}
            <span className="pl-1 text-white">{""}</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="fadeLeft flex-1 font-poppins font-semibold text-[42px] md:text-[52px] xl:text-[68px] text-white leading-[46px] md:leading-[70px] xl:leading-[90px]">
            {""} <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">{""}</span> {" "}
            <span className="block">{""}</span> {" "}
          </h1>
        </div>

        <div className="appear2">
          <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:hidden`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux.</p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 hidden md:block`}>Service en CABA y BUENOS AIRES de Heladeras y Lavarropas Electrolux. Desliza e infórmate acerca de nuestra forma de trabajo.</p>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} my-0 md:my-10 mb-10 md:mb-0 relative`}>
        <div className="w-[6%] sm:w-[34%] md:w-[14%]" />
        <div className="w-[94%] sm:w-[70%] md:w-[99%] xl:w-[100%] h-[100%] relative z-[5] pb-[400px] sm:pb-[500px] md:pb-[640px]">
          <Image src={""} height="767px" width="768px" priority className="absolute right-[12%] heroVector" alt='hero-bg-effect' />

          <Image src={""} height="652px" width="674px" priority className="absolute robotHand" alt="fondo degradado" />
        </div>
      </div>

    </section>
  )
}

export default Hero
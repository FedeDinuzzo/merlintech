import styles from "@/app/constants/style"
import Image from 'next/image'
import supportIT from "@/public/supportIT.png"

const Hero = ({ title, title2, button, content, icon }) => {

  return (
    <section id="home" className={`min-h-[100vh]`}>
      <div className={``}>
        <div className={``}>
          <h3 className={``}></h3>

        </div>

        <h1 className={`${styles.heading} text-gradient text-center p-4`}>{title}</h1>
        <h2 className={`${styles.heading} text-gradient text-center p-4`}>{title2}</h2>
        <p className={``}>{content}</p>
        <button className={``}>{button}</button>
      </div>

      <div className={``}>

      </div>
    </section>
  )
}

export default Hero
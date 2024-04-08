import Image from 'next/image'
import logo from '../../public/LogoMerlin.svg'
import { navLinks } from '@/app/constants/index'
import styles from "@/app/constants/style"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`w-full lg:max-w-[1280px] z-[100]`}>
        <nav className="w-full flex py-6 md:py-6 justify-between items-center navbar">
          <Image src={logo} width="auto" height="auto" priority alt="service electrolux" className="w-[160px] h-[100%] -mt-2 md:mt-0" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                <Link href={`/${nav.id}`} aria-label={`Ir a la sección ${nav.title}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:block fixed bottom-4 left-0 w-[100vw] ">
            <div className='blobWpp rounded-full absolute bottom-[4px] right-10 m-auto z-[100] h-[66px] w-[66px]'>
              <a href="https://api.whatsapp.com/send?phone=5491144469930&text=Hola%20👋%20service%20Electrolux%20🛠%EF%B8%8F%20tengo%20una%20consulta%3A%20">
                <Image src={""} alt="wppLogo" height="66px" width="66px" priority />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
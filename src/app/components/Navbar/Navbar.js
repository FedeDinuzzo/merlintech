import Image from 'next/image'
import logo from '../../../public/LogoMerlin.svg'
import { Menu } from './MenuIcons'
import { MenuClose } from './MenuIcons'
import styles from "@/app/constants/style"
import { useState, useEffect, useRef } from "react"
import NavItem from "./NavItem"
import { navLinks } from '@/app/constants/index'
import Link from 'next/link'

export default function Navbar() {

  //Mobile nav
  const [showNav, setShowNav] = useState(false);

  //Close navbar when clicking outside
  let menuRef = useRef()

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowNav(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <>
      <div className={`fixed top-0 h-[60px] w-full z-40 bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px]`}>
        <nav className={`z-30 p-4 w-[100%] h-[100%] border-b-[1px] broder-solid border-white border-opacity-10`}>
          <div className={`flex justify-center`}>
            <div className={`flex items-center justify-between w-[100vw] h-6 p-2 m:justify-normal m:w-[768px]`}>
              {/* <Link to="" smooth={true}> */}
              <Image className="w-32 h-8 cursor-pointer -ml-5" src={logo} alt="logo" />
              {/* </Link> */}
              <div className='m:hidden'>
                {showNav ? (
                  <MenuClose
                    OnClick={() => setShowNav(!showNav)}
                    className="m:hidden r-2 text-white block w-10 h-10 p-2 cursor-pointer hover:text-slate-600"
                  />
                ) : (
                  <Menu
                    OnClick={() => setShowNav(!showNav)}
                    className="m:hidden mr-2 text-secondary block w-10 h-10 p-2 cursor-pointer hover:text-slate-600"
                  />
                )}
              </div>
              <ul ref={menuRef} className={"s:hidden m:static fixed m:flex m:space-x-10 items-center m:text-white m:w-auto w-6/12 px-8"}>
                <li className={`font-inter font-medium cursor-pointer text-[14px]`}>
                  <Link href={`/`} aria-label={`Ir a la sección inicio`}>Inicio</Link>
                </li>
                <li className={`font-inter font-medium cursor-pointer text-[14px]`}>
                  <Link href={`/servicios`} aria-label={`Ir a la sección Servicios`}>Servicios</Link>
                </li>
                <li className={`font-inter font-medium cursor-pointer text-[14px]`}>
                  <Link href={`/nosotros`} aria-label={`Ir a la sección La empresa`}>Nosotros</Link>
                </li>
                <li className={`font-inter font-medium cursor-pointer text-[14px] m:pl-[140px]`}>
                  <Link href={`/testimonios`} aria-label={`Ir a los Testimonios`}>Testimonios</Link>
                </li>
                <li className={`font-inter font-medium cursor-pointer text-[14px] bg-button-three m:py-2 m:px-4`}>
                  <Link href={`/contacto`} aria-label={`Ir a Contacto`}>Contacto</Link>
                </li>
              </ul >
            </div>
          </div>
        </nav>
      </div>
      <ul ref={menuRef} className={(showNav ? "right-5" : "-right-full") + " m:hidden z-40 rounded-2xl text-secondary border-[1px] broder-solid border-white border-opacity-15 bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px] fixed bottom-0 top-[80px] items-center h-56 py-5 w-6/12 space-y-5 p-4 px-8"}>
        <li className={`font-inter font-medium cursor-pointer text-[15px]`}>
          <Link href={`/`} aria-label={`Ir a la sección inicio`}>Inicio</Link>
        </li>
        <li className={`font-inter font-medium cursor-pointer text-[15x]`}>
          <Link href={`/servicios`} aria-label={`Ir a la sección Servicios`}>Servicios</Link>
        </li>
        <li className={`font-inter font-medium cursor-pointer text-[15px]`}>
          <Link href={`/nosotros`} aria-label={`Ir a la sección La empresa`}>Nosotros</Link>
        </li>
        <li className={`font-inter font-medium cursor-pointer text-[15px]`}>
          <Link href={`/testimonios`} aria-label={`Ir a los Testimonios`}>Testimonios</Link>
        </li>
        <li className={`font-inter font-medium cursor-pointer text-[15px]`}>
          <Link href={`/contacto`} aria-label={`Ir a Contacto`}>Contacto</Link>
        </li>
      </ul>
    </>
  );
}
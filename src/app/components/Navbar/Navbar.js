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
            <div className={`flex justify-between items-center w-[100vw] m:w-[768px] h-6 px-[6px] `}>
              {/* <Link to="" smooth={true}> */}
              <Image className="w-32 h-8 cursor-pointer" src={logo} alt="logo" />
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

              <ul ref={menuRef} className={(showNav ? "right-0" : "-right-full") + " text-secondary m:static fixed bottom-0 top-[60px] m:flex m:space-x-7 items-center bg-card-contact h-56 py-5 m:py-0 rounded-l-lg m:bg-transparent m:text-white m:w-auto w-6/12 m:space-y-0 space-y-5 p-4 px-8 transition-right"}>
                {navLinks.map((nav, index) => (
                  <li key={nav.id} className={`font-inter font-medium cursor-pointer text-[14px] text-secondary`}>
                    <Link href={`/${nav.id}`} aria-label={`Ir a la sección ${nav.title}`}>{nav.title}</Link>
                  </li>
                ))}


                {/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
           {navLinks.map((nav, index) => (
               <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                 <Link href={`/${nav.id}`} aria-label={`Ir a la sección ${nav.title}`}>{nav.title}</Link>
               </li>
             ))}
           </ul> */}

                {/*if the navItem is not set inside the link, the dual functionality dont work*/}
                {/* <Link to="top" smooth={true}><button onClick={() => setShowNav(false)} className="text-lg block hover:underline hover:underline-offset-1"><NavItem content="HOME" to="/" /></button></Link>
            <Link to="shop" smooth={true}><button onClick={() => setShowNav(false)} className="text-lg block hover:underline hover:underline-offset-1"><NavItem content="SHOP" to="/" /></button></Link>
            <Link to="footer" smooth={true}><button onClick={() => setShowNav(false)} className="text-lg hover:underline hover:underline-offset-1">CONTACT</button></Link> */}
              </ul>
            </div>
          </div>
        </nav >
      </div>
    </>
  );
}
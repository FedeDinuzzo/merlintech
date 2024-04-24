import styles from "@/app/constants/style"
import Image from 'next/image'
import logo from '../../public/LogoMerlin.svg'
import FooterLine from '../../public/FooterLine.svg'
import Instagram from '../../public/IconInstagram.svg'
import Linkedin from '../../public/IconLinkedin.svg'
import Facebook from '../../public/IconFacebook.svg'
import DataFiscal from '../../public/DataFiscal.webp'
import ArrowUp from '../../public/ArrowUp.svg'
import { footerLinks } from '@/app/constants/index'
import { Fragment } from "react"
import Link from "next/link"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col m:px-5 px-0 mt-20`}>
    <div className={`${styles.boxWidth}`}>
      <div className={`flex-col mb-8 w-full`}>
        <div className="flex mx-auto justify-around flex-wrap w-full">
          <div className="mr-0 w-full px-4 mb-10 l:w-auto m:mr-96 l:px-0 l:mb-0">
            <Image src={logo} alt="logo" loading="lazy" width="123" height="32" />
          </div>
          {footerLinks.map((footerLink, link) => (
            <Fragment key={link}>
              <div link={footerLink.key} className="flex flex-col s:my-0 my-4 min-w-[150px]">
                <div className={`flex`}>
                  <Image src={FooterLine} alt='line' width={2} height={20} className="mr-2" />
                  <div className="ont-inter font-normal text-[15px] leading-[27px] text-white">
                    {footerLink.title}
                  </div>
                </div>
                <ul className="list-none mt-4 ml-2">
                  {footerLink.links.map((link, id, index) => (
                    <Fragment key={id} >
                      <li className={`font-inter font-normal text-[15px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                        <Link href={`/${link.link}`} aria-label={`Enlace a ${link.name}`}>{link.name}</Link>
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}

          <div className="flex flex-col">
            <div className="flex">
              <Image src={FooterLine} alt='line' width={2} height={20} className="mr-2" />
              <h3 className="font-inter font-normal text-[15px] leading-[27px] text-white">SEGUINOS</h3>
            </div>
            <div className="flex mt-4 px-2 -ml-4">
              <div className="-mr-1">
                <Image src={Instagram} alt='Social Icon' width={50} height={50} className="cursor-pointer" />
              </div>
              <div className="-mr-1">
                <Image src={Linkedin} alt='Social Icon' width={50} height={50} className="cursor-pointer" />
              </div>
              <div className="">
                <Image src={Facebook} alt='Social Icon' width={50} height={50} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m:mt-20 w-full flex justify-around m:justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45] m:-mb-8">
        <p className={`${styles.paragraph} flex w-1/2`}>Copyright © 2024 | merlin technology</p>
        
        <Link href={`/`} aria-label={`Enlace a AFIP data fiscal`}>
          <Image src={DataFiscal} alt='Social Icon' width={50} height={50} className="cursor-pointer m:hidden flex" />
        </Link>

        <Link className={`${styles.paragraph} hidden m:visible m:flex items-center`} href={`/`} aria-label={`Enlace a AFIP data fiscal`}>
          Data Fiscal
          <Image src={ArrowUp} alt='Tax Data Icon' width={36} height={36} className="cursor-pointer ml-4 border-[1px] border-white/20 rounded-full p-1.5 hidden m:block" />  
        </Link>
  
        <Link className={``} href={`/`} aria-label={`Top Of The Page`}>
          <Image src={ArrowUp} alt='' width={36} height={36} className="cursor-pointer ml-4 border-[1px] border-white/20 rounded-full p-1.5 hidden m:block" />  
        </Link>
      </div>
    </div>
  </section>

);

export default Footer;
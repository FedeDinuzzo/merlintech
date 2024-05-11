import styles from "@/app/constants/style"
import Image from 'next/image'
import logo from '../../public/LogoMerlin.svg'
import FooterLine from '../../public/FooterLine.svg'
import Instagram from '../../public/IconInstagram.svg'
import Linkedin from '../../public/IconLinkedin.svg'
import Facebook from '../../public/IconFacebook.svg'
import DataFiscal from '../../public/DataFiscal.webp'
import ArrowUp from '../../public/ArrowUp.svg'
import ChevronDown from '../../public/ChevronDown.svg'
import { footerLinks } from '@/app/constants/index'
import { Fragment } from "react"
import Link from "next/link"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-20 m:mt-36`}>
    <div className={`${styles.boxWidth}`}>
      <div className="mx-auto footer-line h-[1px] w-[360px] m:w-[819px]" />
      <div className="mx-auto footer-light -mb-24 l:-mb-12 w-[360px] m:w-[819px]" />
      <div className={`flex-col mb-8 w-full`}>
        <div className="flex mx-auto justify-around flex-wrap w-full">
          <div className="mr-0 w-full mb-5 m:mr-96 l:mb-0 l:w-auto px-5 l:px-0">
            <Image src={logo} alt="logo" loading="lazy" width="123" height="32" />
          </div>
          {footerLinks.map((footerLink, link) => (
            <Fragment key={link}>
              <div link={footerLink.key} className="flex flex-col s:my-0 my-4 min-w-[150px]">
                <div className={`flex mt-5 l:mt-0`}>
                  <Image src={FooterLine} alt='line' width={2} height={20} className="mr-2" />
                  <div className="font-inter font-normal text-[15px] leading-[27px] text-white">
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
            <div className="flex mt-5 l:mt-0 h-auto w-auto">
              <Image src={FooterLine} alt='line' width={2} height={20} className="mr-2 w-0.5 h-5" />
              <h3 className="font-inter font-normal text-[15px] leading-[27px] text-white">SEGUINOS</h3>
            </div>
            <div className="flex mt-4 px-2 -ml-4">
              <div className="-mr-1">
                <Link href="https://www.instagram.com/merlintechok/" target="_blank" aria-label={`Enlace a instagram merlintech`}>
                  <Image src={Instagram} alt='Social Icon' width={50} height={50} className="cursor-pointer" />
                </Link>
              </div>
              <div className="-mr-1">
                <Link href="https://www.linkedin.com/company/merlin-tech-it-support/" target="_blank" aria-label={`Enlace a linkedin merlintech`}>
                  <Image src={Linkedin} alt='Social Icon' width={50} height={50} className="cursor-pointer" />
                </Link>
              </div>
              <div className="">
                <Link href="https://www.facebook.com/merlintech" target="_blank" aria-label={`Enlace a facebook merlintech`}>
                  <Image src={Facebook} alt='Social Icon' width={50} height={50} className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m:mt-20 w-full flex justify-center m:justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45] px-8 l:px-0 m:mb-8 l:-mb-8">
        <p className={`${styles.paragraph} flex`}>&#169;​ 2024 | Merlin Technology</p>

        <Link className={`${styles.paragraph} hidden m:visible m:flex ml-72 items-center`} href="http://qr.afip.gob.ar/?qr=b3QEcW17fgrFdrGofVZ4kA,," target="_blank" aria-label={`Enlace a AFIP data fiscal`}>
          Data Fiscal
          <Image src={ChevronDown} alt='Tax Data Icon' width={20} height={20} className="cursor-pointer ml-5 hidden m:block" />
        </Link>

        <a href="#home">
          <Image src={ArrowUp} alt='' width={36} height={36} className="cursor-pointer border-[1px] border-white/20 rounded-full p-1.5 ml-4 m:ml-0" />
        </a>
      </div>
      <div className="m:hidden flex w-full h-16 mt-6 justify-center px-8 items-center">
        <Link href="http://qr.afip.gob.ar/?qr=b3QEcW17fgrFdrGofVZ4kA,," target="_blank" aria-label={`Enlace a AFIP data fiscal`}>
          <Image src={DataFiscal} alt='Social Icon' width={50} height={50} className="rounded cursor-pointer flex" />
        </Link>
      </div>
    </div>
  </section>

);

export default Footer;
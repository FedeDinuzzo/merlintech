import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../constants/style'
import WhatsappLogo from '../../public/Whatsapp.svg'

const Whatsapp = () => {
  return (
    <>
      <Link href="https://api.whatsapp.com/send?phone=541160173000&text=Hola%20Merlintech,%20💻%20Les%20escribo%20desde%20el%20sitio%20web%20" target="_blank" aria-label={`Enlace a whatsapp`}>
        <div className={`z-[1000] fixed flex justify-center items-center right-4 bottom-3 m:right-12 m:bottom-9 bg-button-four w-[68px] h-[68px] rounded-full`}>
          <Image src={WhatsappLogo} alt="Whatsapp Contact Button" width="40" height="38" priority />
        </div>
      </Link>
    </>
  )
}

export default Whatsapp
import React from 'react'
import Link from 'next/link'
import styles from '../../constants/style'
import ScrollText from './ScrollText'
import ServicesCard from './ServicesCard'
import { RingThree } from "../Ring"

function ScrollTwo() {
  return (
    <>
      <div className={`hidden m:flex h-[840px] relative`}>
        <Link href="/servicios">
          <div className="w-full h-[260px] absolute bottom-0 bg-gradient-to-b from-transparent to-black rounded-[23px] z-50"></div>
          <div className={`flex-none inset-0 overflow-hidden absolute min-h-[20px] w-full`}>
            <div className={`absolute bg-lights w-[calc(100%-48px)] h-1`}></div>
          </div>

          <ServicesCard />
        </Link>
      </div>
    </>
  )
}

export default ScrollTwo
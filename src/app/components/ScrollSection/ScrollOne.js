import React from 'react'
import Link from 'next/link'
import styles from '../../constants/style'
import ScrollText from './ScrollText'
import ServicesCard from './ServicesCard'
import { RingThree } from "../Ring"

function ScrollOne() {
  return (
    <>
      <div className={`-mt-20 m:mt-0 m:ml-0 flex-none inset-0 overflow-hidden p-40 absolute top-0 `}>
        <div className={`absolute bg-radial-white h-[700px] opacity-60 l:opacity-80`}></div>
        <div className={`absolute bg-radial-violet h-[500px] mt-[150px] ml-[5%] opacity-80 l:opacity-100`}></div>
      </div>

      <div className={`hidden m:flex absolute right-[0%] l:right-[38%] l:top-[400px] z-50`}>
        <RingThree />
      </div>

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

export default ScrollOne
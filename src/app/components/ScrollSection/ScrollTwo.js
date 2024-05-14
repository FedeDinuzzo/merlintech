import React from 'react'
import Link from 'next/link'
import styles from '../../constants/style'
import ScrollText from './ScrollText'
import ServicesCard from './ServicesCard'
import { RingThree } from "../Ring"
import { GlobeDemo } from './World'

function ScrollTwo() {
  return (
    <>
      <div className={`flex w-full relative`}>
        <GlobeDemo />
      </div>
    </>
  )
}

export default ScrollTwo
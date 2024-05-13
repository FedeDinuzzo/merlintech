import React from 'react'
import Link from 'next/link'
import styles from '../../constants/style'
import ScrollText from './ScrollText'
import ScrollOne from './ScrollOne'
import ScrollTwo from './ScrollTwo'
import ServicesCard from './ServicesCard'
import { Button } from "../Buttons"
import { RingThree } from "../Ring"
const DynamicScrollThree = dynamic(() => import('./ScrollThree '), { loading: () => <p>Loading...</p>, })

function Scroll() {
  return (
    <>
      {/* l:m:h-[auto] */}
      <section className={`min-h-[120vh] m:h-[220vh] l:h-[320vh] py-12 l:py-24 z-40`}>
        <div id="servicios" smooth="true" className={`-pt-20`} />
        <div className={`relative flex`}>
          <div className='w-1/2'>
            <ScrollText />

          </div>
          <div className='flex flex-col w-1/2 h-[300vh]'>
            <div className='h-[120vh]'>
              <ScrollOne />
            </div>
            <div className='h-[90vh]'>
              <ScrollTwo />
            </div>
            <div className='h-[90vh]'>
              <DynamicScrollThree />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Scroll
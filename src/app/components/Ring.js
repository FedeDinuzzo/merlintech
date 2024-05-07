import React from 'react'
import Image from 'next/image'
import RingX2 from '../../public/RingX2.svg'
import Ring1bg from '../../public/Ring1bg.svg'
import Ring1 from '../../public/Ring1.svg'
import Ring2 from '../../public/Ring2.svg'
import Ring3 from '../../public/Ring3.svg'

export function RingOne() {
  return (
    <div className='h-[144px] w-[144px] flex justify-center items-center'>
      <Image className='absolute z-50' src={Ring1} alt={Ring1} width="60" height="60" priority />
      <Image className='absolute z-50' src={Ring1bg} alt={Ring1bg} width="144" height="144" priority />
      <div className='absolute bg-circles h-[120px] w-[120px] rounded-full flex justify-center items-center border-solid border-secondary/25 border-[2px]'>
        <div className='h-28 w-28 rounded-full flex justify-center items-center border-solid border-secondary/25 border-[2px]'>
          <div className='flex justify-center items-center outline outline-primary/10 outline-[10px] h-[68px] w-[68px] rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export function RingTwo() {
  return (
    <div className=''>
      <div className='bg-circles h-32 w-32 rounded-full flex justify-center items-center border-solid border-secondary/25 border-[2px]'>
        <Image className='absolute' src={Ring2} alt={Ring2} width="60" height="60" />
        <Image className='absolute' src={RingX2} alt={RingX2} width="150" height="150" />
      </div>
    </div>
  )
}

export function RingThree() {
  return (
    <div className=''>
      <div className='bg-circles h-32 w-32 rounded-full flex justify-center items-center border-solid border-secondary/25 border-[2px]'>
        <Image className='absolute' src={Ring3} alt={Ring3} width="60" height="60" />
        <Image className='absolute' src={RingX2} alt={RingX2} width="150" height="150" />
      </div>
    </div>
  )
}
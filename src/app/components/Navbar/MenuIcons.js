import React from 'react'
import styles from '@/app/constants/style'

export function Menu({ OnClick }) {
  return (
    <button onClick={OnClick} className={`${styles.flexCenter} flex-wrap w-6 h-6 py-[3px]`}>
      <div className={`w-4 border-white border-solid h-[2px] border-[1px] rounded-lg`} />
      <div className={`w-4 border-white border-solid h-[2px] border-[1px] rounded-lg`} />
      <div className={`w-4 border-white border-solid h-[2px] border-[1px] rounded-lg`} />
    </button>
  )
}

export function MenuClose({ OnClick }) {
  return (
    <button onClick={OnClick} className={`${styles.flexCenter} flex-wrap w-6 h-6`}>
      <div className={`w-6 border-white border-solid border-[1px] rounded transform rotate-[45deg] origin-center`} />
      <div className={`w-6 border-white border-solid border-[1px] rounded rotate-[-45deg] origin-center absolute top-[calc(50% - 2px / 2)] left-[calc(50% - 16px / 2)]`} />
    </button>
  )
}
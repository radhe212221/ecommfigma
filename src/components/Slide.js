import React from 'react'
import HeartIcon from '../icons/heart-icon'
export default function Slide({ item }) {
  return (
    <div className="relative w-[261px] h-[410px] mr-[10px]">
      <img
        className='w-[261px] h-[410px] object-cover' src={item} 
        />

      <div className="flex items-center justify-between absolute bottom-0 left-0 w-full p-5">
        <div className="font-bold text-base bg-white p-2 px-4 rounded-full">$120.00</div>
        <div className="rounded-full  bg-white p-3"><HeartIcon /></div>
      </div>
    </div>
  )
}

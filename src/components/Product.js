import React from 'react'

export default function Product({onClick,src}) {
  return (
    <div onClick={onClick} className='inline-table w-1/2 mb-3'>
      <div className='relative'>
        <div className='flex items-center justify-center rounded-full bg-black text-white w-[27.51px] h-[27.51px] font-normal text-[10px] m-2 absolute top-0 left-0'>new</div>
        <img src={src} className='' />
      </div>
      <div className='font-normal text-xs text-center mt-1'>
        21WN reversible angora cardigan
      </div>
      <div className='font-bold text-base text-center'>
        $120
      </div>
    </div>
  )
}

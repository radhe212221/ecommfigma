import React from 'react'
import Slide from './Slide'
export default function Productslider() {
    let a = ["/product1.png", "/product2.png", "/product3.png", "/product4.png"]
    return (
        <div className='pl-3 mt-10 overflow-x-auto'>
            <div className='flex w-[1084px] h-[410px]'>
                {a.map(item => <Slide item={item} />)}
            </div>
        </div>
    )
}



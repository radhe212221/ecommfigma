import React from 'react'

export default function ChooseSize() {
    return (
        <>
            <div className='mx-3 py-5 flex items-center gap-20 border-b'>
                <div className='flex gap-2 text-base font-light'>
                    <span>size</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 6.5C13 10.0906 10.0896 13 6.5 13C2.9104 13 0 10.0906 0 6.5C0 2.91145 2.9104 0 6.5 0C10.0896 0 13 2.91145 13 6.5ZM6.67443 2.14919C5.24608 2.14919 4.33508 2.75089 3.61971 3.82027C3.52704 3.95881 3.55804 4.14566 3.69087 4.24639L4.60032 4.93596C4.73674 5.03941 4.93111 5.0148 5.03711 4.88035C5.50532 4.28649 5.82636 3.94212 6.539 3.94212C7.07444 3.94212 7.73673 4.28672 7.73673 4.80594C7.73673 5.19845 7.4127 5.40003 6.88402 5.69644C6.26747 6.04206 5.45161 6.47224 5.45161 7.54839V7.65323C5.45161 7.82692 5.59244 7.96774 5.76613 7.96774H7.23387C7.40756 7.96774 7.54839 7.82692 7.54839 7.65323V7.61829C7.54839 6.87231 9.72867 6.84125 9.72867 4.82258C9.72867 3.30237 8.15176 2.14919 6.67443 2.14919ZM6.5 8.64919C5.83519 8.64919 5.29435 9.19003 5.29435 9.85484C5.29435 10.5196 5.83519 11.0605 6.5 11.0605C7.16481 11.0605 7.70565 10.5196 7.70565 9.85484C7.70565 9.19003 7.16481 8.64919 6.5 8.64919Z" fill="black" fill-opacity="0.5" />
                    </svg>

                </div>
                <div className='flex gap-2'>
                    <div className='bg-gray-300 text-normal font-bold w-[37px] h-[37px] flex items-center justify-center rounded-full'>
                        XS
                    </div>
                    <div className='w-[37px] h-[37px] flex items-center justify-center rounded-full'>S</div>
                    <div className='w-[37px] h-[37px] flex items-center justify-center rounded-full'>M</div>

                    <div className='w-[37px] h-[37px] flex items-center justify-center rounded-full'>XL</div>
                    <div className='w-[37px] h-[37px] flex items-center justify-center rounded-full'>2XL</div>

                </div>
            </div>
        </>
    )
}

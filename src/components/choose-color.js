import React from 'react'

export default function ChooseColor() {
    return (
        <>
            <div className='mx-3 py-5 flex items-center gap-20 border-b'>
                <div className='text-base font-light'>color</div>
                <div className='flex gap-2'>
                    <div className='bg-black w-[37px] h-[37px] flex items-center justify-center rounded-full'>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.09467 11.7643L0.219661 6.53442C-0.0732203 6.22021 -0.0732203 5.71077 0.219661 5.39654L1.2803 4.25865C1.57318 3.94442 2.04808 3.94442 2.34096 4.25865L5.625 7.78174L12.659 0.235652C12.9519 -0.0785507 13.4268 -0.0785507 13.7197 0.235652L14.7803 1.37353C15.0732 1.68774 15.0732 2.19718 14.7803 2.51141L6.15533 11.7644C5.86242 12.0786 5.38755 12.0786 5.09467 11.7643Z" fill="white" />
                        </svg>
                    </div>
                    <div className='bg-gray-500 w-[37px] h-[37px] flex items-center justify-center rounded-full'>.</div>
                    <div className='bg-red-400 w-[37px] h-[37px] flex items-center justify-center rounded-full'>.</div>
                </div>
            </div>
        </>
    )
}

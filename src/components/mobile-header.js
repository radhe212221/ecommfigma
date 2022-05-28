import React from 'react'
import BackIcon from '../icons/back'
import CartIcon from '../icons/cart-icon'
import BagIcon from '../icons/bag-icon'

export default function MobileHeader() {
    return (
        <div className='px-3 py-5 flex justify-between items-center'>
            <div>
                <BackIcon />
            </div>
            <div>Oblong Bag</div>
            <div className='flex items-center gap-2 '>
                <div> <CartIcon /></div>
                <div><BagIcon /></div>
            </div>
        </div>
    )
}

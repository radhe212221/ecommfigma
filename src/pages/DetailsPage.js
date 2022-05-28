import React from 'react'
import MobileHeader from '../components/mobile-header'
import ProductSlider from '../components/product-slider'
import ChooseColor from '../components/choose-color'
import ChooseSize from '../components/choose-size'
import BasketIcon from '../icons/basket-icon'
export default function DetailsPage() {
  return (
    <div>
      <MobileHeader />
      <ProductSlider />
      <ChooseColor />
      <ChooseSize />
      <div className='border-2 mt-2 border-black rounded-full mx-5  py-2 flex items-center justify-center gap-2'>
        <div>
          <BasketIcon />
        </div>
        <div>Add to Cart</div>
      </div>
    </div>
  )
}

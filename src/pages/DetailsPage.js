import React from 'react'
import MobileHeader from '../components/mobile-header'
import ProductSlider from '../components/product-slider'
import ChooseColor from '../components/choose-color'
import ChooseSize from '../components/choose-size'
export default function DetailsPage() {
  return (
    <div>
      <MobileHeader />
      <ProductSlider />
      <ChooseColor/>
      <ChooseSize/>
    </div>
  )
}

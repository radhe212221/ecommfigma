import React from 'react'
import Product from '../components/Product'
export default function ProductsPage(props) {
  const a = [1, 2, 3, 4]
  const handleClick = () => {
    props.history.push("/details")
  }
  return (
    <div>
      <div className='flex items-center justify-center text-base font-normal p-5'>New Products</div>
      <div className='flex justify-around px-10 py-5'>
        <div className='text-trueGray-900 font-bold text-sm'>All</div>
        <div className='text-zinc-500 font-normal text-sm'>Apparel</div>
        <div className='text-zinc-500 font-normal text-sm'>Dress</div>
        <div className='text-zinc-500 font-normal text-sm'>Tshirt</div>
        <div className='text-zinc-500 font-normal text-sm'>Bag</div>
      </div>

      <div className='p-5'>
        {a.map(item => <Product src={`/product${item}.png`} onClick={handleClick} />)}
      </div>
    </div>
  )
}

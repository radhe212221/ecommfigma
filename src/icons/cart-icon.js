import * as React from "react"

const CartIcon = (props) => (
  <svg
    width={18}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.055 1.925-.693.725L9 3.03 8.64 2.65l-.693-.725C6.342.24 3.776 0 2.076 1.472c-1.99 1.724-2.097 4.83-.314 6.702l6.802 7.135a.59.59 0 0 0 .869 0l6.802-7.135c1.786-1.872 1.679-4.978-.31-6.702l-5.87.453Zm0 0C11.662.24 14.225 0 15.925 1.472l-5.87.453Z"
      stroke="#000"
    />
  </svg>
)

export default CartIcon

import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.544.82c-1.605-1.25-3.993-1.025-5.467.365l-.577.544-.577-.544C5.453-.205 3.062-.43 1.456.82c-1.84 1.435-1.936 4.012-.29 5.568l5.67 5.352a.98.98 0 0 0 1.326 0l5.67-5.352c1.648-1.556 1.552-4.133-.288-5.568Z"
      fill="red"
    />
  </svg>
)

export default SvgComponent

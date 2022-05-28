import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={21}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.401 11.25H7.714l.238 1.125h9.786c.562 0 .978.503.854 1.03l-.202.854c.682.32 1.152.993 1.152 1.772 0 1.097-.93 1.985-2.072 1.969-1.087-.015-1.981-.866-2.01-1.914a1.928 1.928 0 0 1 .612-1.461H8.428c.379.357.614.855.614 1.406 0 1.119-.967 2.02-2.14 1.967-1.04-.047-1.886-.858-1.94-1.86a1.953 1.953 0 0 1 1.022-1.814L3.423 2.25H.875C.392 2.25 0 1.872 0 1.406V.844C0 .378.392 0 .875 0h3.738c.416 0 .774.282.857.675l.334 1.575h14.32c.562 0 .978.503.854 1.03l-1.724 7.313a.869.869 0 0 1-.853.657Zm-3.526-5.344h-1.75V4.5a.573.573 0 0 0-.583-.563h-.584a.573.573 0 0 0-.583.563v1.406h-1.75a.573.573 0 0 0-.583.563v.562c0 .31.26.563.583.563h1.75V9c0 .31.261.563.583.563h.584A.573.573 0 0 0 13.125 9V7.594h1.75a.573.573 0 0 0 .583-.563V6.47a.573.573 0 0 0-.583-.563Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent

import React from 'react'
import classNames from 'classnames'

const SecondaryButton = ({children, className}) => {
  return (
    <div className={classNames("bg-ternary-color text-primary-color border-ternary-color border-2  inline-block py-1 px-4 rounded-[3px]  text-[1rem] font-sans font-semibold first-letter:uppercase lowercase cursor-pointer", className)}>
        {children}
    </div>
  )
}

export default SecondaryButton
import React from 'react'
import classNames from 'classnames'

const Divider = ({className}) => {
  return (
    <div className='flex justify-center'>
        <hr className={classNames('h-[3px] w-[90%] my-5 bg-primary-color', className)} />
    </div>
  )
}

export default Divider
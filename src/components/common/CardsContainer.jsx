import React from 'react'
import CourseCard from './CourseCard'

const CardsContainer = ({children}) => {
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-10 gap-5 justify-center justify-items-center'>
        {children}
    </div>
  )
}

export default CardsContainer
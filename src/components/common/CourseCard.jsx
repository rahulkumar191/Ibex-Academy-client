import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <Link to={'/course-details'} state={course} >
        <div className='bg-ternary-color shadow-lg md:p-7 p-3 border-[1px] border-gray-200 hover:shadow-secondary-color transition-all duration-150 ease-in-out max-w-md'>
        <div className='overflow-hidden bg-primary-color rounded-md mb-3'>
            <img className='w-full max-h-[200px]' src={course.image} alt="course.title" />
        </div>
        <div className='mt-3 font-bold text-xl'>
            {course.title}
        </div>
        <div className='my-1'>
            {course.teacher}
        </div>
        <div className='font-bold my-1 relative'>
        <i className="mr-1 fa-solid fa-indian-rupee-sign"></i>
            <span>{course.price}</span>
            <span className='mx-3 bg-[#898121] text-ternary-color p-1 px-2 rounded-sm absolute left-1/2 top-3 -rotate-12'>{course.offer} Off</span>
        </div>
        <div className='mt-3'>
            <span className='bg-red-500 text-ternary-color px-3 py-1 rounded-sm'>{course.type}</span>
        </div>
    </div>
    </Link>
  )
}

export default CourseCard
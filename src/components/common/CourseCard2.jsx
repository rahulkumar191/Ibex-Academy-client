import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard2 = ({ course }) => {
    return (
        <Link to={'/course-details'} state={course}>
            <div className='bg-ternary-color max-w-md shadow-md sm:shadow-lg md:p-7 p-3 border-[1px] border-gray-200 transition-all duration-150 ease-in-out hover:shadow-secondary-color  hover:scale-105'>
            <div className='overflow-hidden bg-primary-color rounded-md mb-3'>
                <img className='w-full max-h-[200px]' src={course.image} alt="course.title" />
            </div>
            <div className='mt-3 font-semibold text-lg'>
                {course.title}
            </div>
            <div>
                {course.teacher}
            </div>
            <div className='font-bold mb-2 relative flex items-center text-primary-color'>
                <i className="mr-2 fa-solid fa-indian-rupee-sign"></i>
                <p className=' mr-3 relative ' >{course.oldPrice} <span className='bg-black absolute h-[2px] w-[120%] sm:top-[50%] top-[45%] -left-[10%]' ></span></p>
                <p>{course.price}</p>
            </div>
            <div className=''>
                <span className='bg-red-500 text-ternary-color px-3 py-1 rounded-sm'>{course.type}</span>
            </div>
        </div>
        </Link>
    )
}

export default CourseCard2
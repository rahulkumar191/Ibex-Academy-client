import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton';

const CourseCard3 = ({ course }) => {
    return (
        <div className='max-w-sm bg-ternary-color shadow-md sm:shadow-lg md:p-7 p-3 border-[1px] border-gray-200 transition-all duration-150 ease-in-out hover:shadow-secondary-color'>
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
                    <i className="mr-1 fa-solid fa-indian-rupee-sign"></i>
                    <p>{course.price}</p>
                </div>
                <div className=' flex justify-center'>
                    <Link to={'/course-details'} state={course}>
                    <PrimaryButton>View Content</PrimaryButton>
                    </Link>
                </div>
            </div>
    )
}

export default CourseCard3
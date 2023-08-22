import React from 'react'
import CourseContentBox from './CourseContentBox';

const CourseContents = ({courseContents}) => {
    const courseContentKey = Object.keys(courseContents);
  return (
    <div className=''>
        {
            Object.keys(courseContents).map(topic => {
                return(
                    <CourseContentBox courseContent = {courseContents[topic]} topic= {topic} />
                )
            })   
        }
    </div>
  )
}

export default CourseContents
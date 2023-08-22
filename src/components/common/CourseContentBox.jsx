import React, { useState } from 'react'

const CourseContentBox = ({ courseContent, topic }) => {


    const [open, setOpen] = useState(false);

    return (
        // relative border-[1px] border-primary-color my-3 font-semibold px-3 py-3 rounded-md transition-all duration-500 ease-in-out ${open ? 'h-12' : 'h-fit bg-primary-color text-ternary-color'} overflow-hidden
        <div className={`relative border-[1px] border-primary-color rounded-md overflow-hidden m-3 transition-all duration-500 ease-in-out`}>
            <h3 className={`text-primary-color cursor-pointer py-3 px-2 transition-all duration-500 ease-in-out ${open? 'bg-primary-color text-ternary-color': ''} `}
                onClick={() => {
                    setOpen(!open);
                }}
            >{topic}</h3>
            {
                courseContent.map(content => {
                    return (
                        <p className={`flex gap-2 items-center text-primary-color mx-2 mb-1 ${open? 'block': 'hidden'}`}>
                            <span className='text-sm'>{content.contentType === 1 ? <i class="fa-solid fa-video"></i> : <i class="fa-solid fa-file"></i>}</span>
                            <span className=''>{content.title}</span>
                            <span className='grow text-end'>{content.time}</span>
                        </p>
                    )
                })
            }

            <i className={`m-4 absolute top-0 right-0 transition-all duration-500 ease-in-out ${open ? '-rotate-180' : 'rotate-0'}     fa-solid fa-angle-up`} ></i>
        </div>
    )
}

export default CourseContentBox
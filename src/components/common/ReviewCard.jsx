import React from 'react'

const ReviewCard = ({studentReview}) => {

    return (
        <div className='bg-transparent shrink-0 basis-[100%] flex justify-center items-center'>
            <div className='relative px-5 py-3 md:py-10 rounded-md bg-secondary-color md:max-w-[500px]'>
                <div className='flex justify-center'>
                    <img className='w-20 h-20 rounded-full mb-3' src={studentReview.image} alt="" />
                </div>
                <div className='my-2 text-md'>
                    {studentReview.content}
                </div>
                <div className=' text-right font-semibold'>
                    {studentReview.name}
                </div>
                {/* <div className='bg-primary-color absolute w-full h-full top-0 left-0 hover:bg-transparent -z-10 '></div> */}
            </div>
        </div>
    )
}

export default ReviewCard
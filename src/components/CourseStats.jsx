import React from 'react';
import companies_to_hire from '../images/companies_to_hire.jpg';
import Divider from './common/Divider';
import PrimaryButton from './common/PrimaryButton';

const CourseStats = () => {
    return (
        <div className='m-3'>
            <Divider/>

            <div>
                <div className='flex justify-center'>
                    <PrimaryButton className={'hover:bg-white hover:text-primary-color  '}>
                    Top Companies Want You!
                    </PrimaryButton>
                </div>

                <div className='overflow-hidden p-5 pb-3'>
                    <img className='rounded-md shadow-lg w-full h-auto' src={companies_to_hire} alt="Mang it Company" />
                </div>

                <div className='flex justify-around border-2 border-primary-color rounded text-primary-color font-semibold text-center'>
                    <div className='w-1/2 border-r-2 border-primary-color hover:bg-primary-color hover:text-white transition-all duration-150'>
                        <span>100+</span><br />
                        <span>Courses</span>
                    </div>
                    <div className='w-1/2 hover:bg-primary-color hover:text-white transition-all duration-150'>
                        <span>1000+</span><br />
                        <span>Students Enrolled</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseStats
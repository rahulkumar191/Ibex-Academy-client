import React from 'react'
import ReviewCard from './common/ReviewCard'
import Divider from './common/Divider'
import PrimaryButton from './common/PrimaryButton'
import { useState, useEffect } from 'react'

const Review = () => {

  const studentsReview = [
    {
      content: "This is the best course for all students for The Complete 2023 Web Development Bootcamp4 The Complete 2023 Web Development Bootcamp4",
      image: "https://avatars.githubusercontent.com/u/109514125?v=4",
      name: "Rahul Kumar",
    },
    {
      content: "This is the best course for all students for The Complete 2023 Web Development Bootcamp4 The Complete 2023 Web Development Bootcamp4",
      image: "https://avatars.githubusercontent.com/u/109514125?v=4",
      name: "Rahul Kumar",
    },
    {
      content: "This is the best course for all students for The Complete 2023 Web Development Bootcamp4 The Complete 2023 Web Development Bootcamp4",
      image: "https://avatars.githubusercontent.com/u/109514125?v=4",
      name: "Rahul Kumar",
    },
    {
      content: "This is the best course for all students for The Complete 2023 Web Development Bootcamp4 The Complete 2023 Web Development Bootcamp4",
      image: "https://avatars.githubusercontent.com/u/109514125?v=4",
      name: "Rahul Kumar",
    },
    {
      content: "This is the best course for all students for The Complete 2023 Web Development Bootcamp4 The Complete 2023 Web Development Bootcamp4",
      image: "https://avatars.githubusercontent.com/u/109514125?v=4",
      name: "Rahul Kumar",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const [slideFlag, setSlideFlag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      slideAutoMove();
    }, 3000);

    return () => clearInterval(interval);
  }, [studentsReview.length, currentIndex, slideFlag]);

  const slideAutoMove = () => {
    if (currentIndex === studentsReview.length - 1) setSlideFlag(false);
    if (currentIndex === 0) setSlideFlag(true);
    if (slideFlag) slideToNext();
    else slideToPrev();
  }

  const slideToNext = () => {
    if (currentIndex < studentsReview.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const slideToPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className=' p-5'>
      <div>
        <Divider />
      </div>
      <div className='text-center mb-6'>
        <PrimaryButton className={'font-bold cursor-default hover:bg-white hover:text-primary-color'}>Students Reviews</PrimaryButton>
      </div>
      <div className='relative  overflow-hidden '>
        <div className=" flex transition-transform duration-500 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {studentsReview.map((studentReview, index) => <ReviewCard studentReview={studentReview} />)}
        </div>
      </div>
    </div>
  )
}

export default Review


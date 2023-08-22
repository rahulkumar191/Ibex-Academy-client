
import React, { useState, useEffect } from 'react';
import SecondaryButton from './common/SecondaryButton';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [slideFlag, setSlideFlag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      slideAutoMove();
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length, currentIndex, slideFlag]);

  const slideAutoMove = () => {
    if (currentIndex === items.length - 1) setSlideFlag(false);
    if (currentIndex === 0) setSlideFlag(true);
    if (slideFlag) slideToNext();
    else slideToPrev();
  }

  const slideToNext = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const slideToPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className='relative bg-ternary-color overflow-hidden '>
      <div className=" flex transition-transform duration-500 " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => <Slide item={item} index={index} />)}
      </div>

      <i className="absolute top-1/2 left-0 transform -translate-y-1/2 fa-solid text-3xl  fa-chevron-left" onClick={slideToPrev}></i>
      <i className="absolute top-1/2 right-0 transform -translate-y-1/2 fa-solid text-3xl  fa-chevron-right" onClick={slideToNext}></i>
    </div>
  );
};

export default Carousel;


const Slide = ({ item, index }) => {
  return (
    <div key={index} className="w-full max-h-[90vh] sm:min-h-[80vh] flex-shrink-0 bg-gradient-to-b sm:bg-gradient-to-r from-indigo-100 via-transparent to-blue-500 py-3 md:flex gap-3">
      <div className='-z-10 relative '>
        <img src={item.image} alt={item.alt} className=" w-full h-full " />
      </div>

      <div className='text-2xl flex flex-col justify-center items-center gap-3 md:w-[40%] p-5'>
        <div className='text-ternary-color font-semibold'>{item.title}</div>
        <div className='text-ternary-color'>{item.description}</div>
        <SecondaryButton>{item.button}</SecondaryButton>
      </div>
    </div>
  )
}



{/* <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={slideToPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full z-10"
      >
        &lt;
      </button>
      <button
        onClick={slideToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full z-10"
      >
        &gt;
      </button> */}
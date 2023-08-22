import React from "react";
import PrimaryButton from "./common/PrimaryButton";
import CourseCard from "./common/CourseCard";
import CardsContainer from "./common/CardsContainer";
import Divider from "./common/Divider";

const TrendingCourse = () => {

  const courses = [
    {
        title: "The Complete 2023 Web Development Bootcamp1",
        description: "hi how are you i am fine , what about you, i hope you all and your family is well and i want specialy thank you for supporting me",
        image: "https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75",
        teacher: "Rahul Gupta",
        offer: '50%',
        price: 6000,
        oldPrice: 9000,
        language: "English",
        hilights: ['No Prerequisite Required','150+ Hours video content', 'MERN Stack basics to advanced', 'Real-World Projects'],
        lectures: 56,
        type: 'Recorded',
    },
    {
        title: "The Complete 2023 Web Development Bootcamp2",
        description: "hi how are you i am fine , what about you, i hope you all and your family is well and i want specialy thank you for supporting me",
        image: "https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75",
        teacher: "Rahul Gupta",
        offer: '50%',
        price: 6000,
        oldPrice: 9000,
        language: "English",
        hilights: ['No Prerequisite Required','150+ Hours video content', 'MERN Stack basics to advanced', 'Real-World Projects'],
        lectures: 56,
        type: 'Recorded',
    },
    {
        title: "The Complete 2023 Web Development Bootcamp3",
        description: "hi how are you i am fine , what about you, i hope you all and your family is well and i want specialy thank you for supporting me",
        image: "https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75",
        teacher: "Rahul Gupta",
        offer: '50%',
        price: 8000,
        oldPrice: 9000,
        language: "English",
        hilights: ['No Prerequisite Required','150+ Hours video content', 'MERN Stack basics to advanced', 'Real-World Projects'],
        lectures: 56,
        type: 'Live',
    },
    {
        title: "The Complete 2023 Web Development Bootcamp4",
        description: "hi how are you i am fine , what about you, i hope you all and your family is well and i want specialy thank you for supporting me",
        image: "https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75",
        teacher: "Rahul Gupta",
        offer: '50%',
        price: 6000,
        oldPrice: 9000,
        language: "English",
        hilights: ['No Prerequisite Required','150+ Hours video content', 'MERN Stack basics to advanced', 'Real-World Projects'],
        lectures: 56,
        type: 'Recorded',
    },
    {
        title: "The Complete 2023 Web Development Bootcamp5",
        description: "hi how are you i am fine , what about you, i hope you all and your family is well and i want specialy thank you for supporting me",
        image: "https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75",
        teacher: "Rahul Gupta",
        offer: '50%',
        price: 8000,
        oldPrice: 9000,
        language: "English",
        hilights: ['No Prerequisite Required','150+ Hours video content', 'MERN Stack basics to advanced', 'Real-World Projects'],
        lectures: 56,
        type: 'Live',
    },
]

  return (
    <div className="">
      <Divider />
      <div className="flex justify-center pb-3">
        <PrimaryButton className={'hover:bg-white hover:text-primary-color'}>Trending Courses</PrimaryButton>
      </div>
      <div className="p-3">
        <CardsContainer>
            {courses.map(course => <CourseCard course={course} />)}
        </CardsContainer>
      </div>
    </div>
  );
};

export default TrendingCourse;

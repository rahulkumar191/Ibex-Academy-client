import React, { useEffect } from "react";
import Divider from "./common/Divider";
import CardsContainer from "./common/CardsContainer";
import { useState } from "react";
import CourseCard from "./common/CourseCard";
import LRCourseSearch from "./common/LRCourseSearch";

const LiveRecordedCourses = () => {

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

  

  const [toRenderCourses, setToRenderCourses] = useState(null);


  return (
    <div className="m-1">
      <div>
        <Divider />
      </div>

      <div>
        <LRCourseSearch courses={courses} setToRenderCourses={setToRenderCourses} />
      </div>
      
      <div>
        <CardsContainer>
          {toRenderCourses && toRenderCourses.map(course => <CourseCard course={course} />)}
        </CardsContainer>
      </div>
    </div>
  );
};

export default LiveRecordedCourses;

import React from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import TrendingCourse from "./TrendingCourse";
import LiveRecorded from "./LiveRecordedCourses";
import LiveRecordedCourses from "./LiveRecordedCourses";
import ReviewCard from "./common/ReviewCard";
import Review from "./Review";
import CourseStats from "./CourseStats";
import Footer from "./Footer";
import Carousel from "./Carousel";
import img from '../images/IbexAcademybg.png'

const Home = () => {
  
  const items = [
    { image: img, alt: 'Image 1', title:"full stack cohort", description: "Let's learn how to develop full stack project using MERN", button: 'Click Here' },
    { image: img, alt: 'Image 2' , title:"full stack cohort", description: "Let's learn how to develop full stack project using MERN", button: 'Click Here'},
    { image: img, alt: 'Image 3' , title:"full stack cohort", description: "Let's learn how to develop full stack project using MERN", button: 'Click Here'},
    // Add more images as needed
  ];

  return (
    <div className="">
        
        <Carousel items={items} />
        <TrendingCourse/>
        <LiveRecordedCourses/>
        <Review/>
        <CourseStats/>
        <Footer/>
    </div>
  );
};



export default Home;

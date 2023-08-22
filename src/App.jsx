import React, { useState } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import Home from "./components/Home";
import Header from "./components/Header";
import Courses from "./components/Courses";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import MyCourses from "./components/MyCourses";
import SignUp from "./components/Signup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";

import { getAuthToken } from "./utils/authUtils";
import { useEffect } from "react";
import api from "./api";
import Logout from "./components/Logout";
import IsLoggedin from "./components/IsLoggedin";
import UserProtectedRoute from "./components/UserProtectedRoute";
import Dashboard from "./components/DashBoard";
import CreateCourse from "./components/CreateCourse";

function App() {

  const [isUser, setIsUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const token = getAuthToken();
    const checkToken = async(token) => {
      try{
        const user = await api.get("/user/me");
        setIsUser(user.data.email);
      }
      catch(err){
        setIsUser(null);
      }
    }
    checkToken(token);
  }, []);
  
  return (
    <div className="text-lg ">
      <ToastContainer/>
      <RecoilRoot>
        <div className="text-lg ">
        <Router>
                <Header isUser={isUser}></Header>
                <Routes>
                    <Route path="/" exact element= {<Home/>} />
                    <Route path="/admin/Dashboard" element= {<Dashboard isUser={isUser} />} />
                    <Route path="/user/courses" element= {<Courses/>} />
                    <Route path="user/about" element= {<About/>} />
                    <Route path="/user/myCourses" element= {
                    <UserProtectedRoute isUser={isUser} >
                      <MyCourses/>
                    </UserProtectedRoute>} />
                    <Route path="/course-details" element= {<CourseDetails/>} />
                    <Route path="/user/signup" element= {
                      <IsLoggedin isUser={isUser}>
                        <SignUp setIsUser={setIsUser} />
                      </IsLoggedin>
                    } />
                    <Route path="/user/login" element= {
                    <IsLoggedin isUser={isUser}>
                      <Login setIsUser={setIsUser}/>
                    </IsLoggedin>} />
                    <Route path="/user/logout" element= {<Logout setIsUser={setIsUser}/>} />

                    <Route path="/admin/create-course" element={<CreateCourse/>} />
                </Routes>
            </Router>
        </div>
    </RecoilRoot>
    </div>
  )
}

export default App;


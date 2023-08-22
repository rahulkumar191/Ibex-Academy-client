import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryButton from './common/SecondaryButton';
import Logo from './Logo';

const Dashboard = ({ isUser }) => {
    const [open, setOpen] = useState(true);
    return (
        <div className='relative'>
            <div className='flex justify-between bg-secondary-color p-5'>
                <i className={`text-3xl fa-solid fa-bars text-ternary-color cursor-pointer`}
                    onClick={() => {
                        setOpen(!open);
                    }}
                ></i>
                <Logo></Logo>
                <div>
                    {!isUser && <Link to={'/user/login'}>
                        <SecondaryButton>LOGIN</SecondaryButton>
                    </Link>}
                    {isUser && <Link to={'/user/logout'}>
                        <SecondaryButton>LOGOUT</SecondaryButton>
                    </Link>}
                </div>
            </div>

            <div className={`absolute top-0 text-primary-color bg-red-300 min-w-[200px] w-fit p-5 transition-all duration-300 ${open ? '-translate-x-full' : '-translate-x-0'}`}>
                <div className='absolute text-3xl top-0 right-5 cursor-pointer'
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <i className="fa-solid fa-caret-left"></i>
                </div>
                <ul >
                    <li>
                        <Link to={'/admin/all-courses'}>
                            All Courses
                        </Link>
                    </li>
                    <li>
                        <Link to={'/admin/my-courses'}>
                            My Courses
                        </Link>
                    </li>
                    <li>
                        <Link to={'/admin/create-course'}>
                            Create Course
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

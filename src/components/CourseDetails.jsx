
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import CourseContents from './common/CourseContents';
import Instructor from './common/Instructor';
import CardsContainer from './common/CardsContainer';
import Footer from './Footer';

const CourseDetails = () => {

    const course = useLocation().state;

    return (
        <div className='mt-5'>
            <div>
                <Top course={course} />
            </div>

            <div>
                <Bottom course={course} />
            </div>

            <div className='mt-5'>
                <Footer />
            </div>
        </div>
    );
}


const Top = ({ course }) => {
    return (
        <div className='relative bg-ternary-color shadow-lg rounded-md w-full md:px-10 md:py-36 pt-28 px-3 mb-20 flex flex-col items-center md:block'>
            <div className='md:w-[50%]'>
                <div className='mb-5 text-primary-color text-3xl font-bold'>
                    {course.title}
                </div>
                <div className='mb-1 p-3 font-semibold bg-primary-color text-ternary-color'>
                    {course.description}
                </div>
                <div className='flex gap-5 text-primary-color font-semibold'>
                    <div>
                        <i className="mr-2 fa-solid fa-globe"></i>
                        {course.language}
                    </div>
                    <div>
                        <i className="mr-2 fa-solid fa-video"></i>
                        {course.lectures}
                        <span>+ Lecture</span>
                    </div>
                </div>
            </div>

            <div className='md:absolute relative top-20 md:right-10 w-[420px] max-w-full p-5 pb-10 rounded-lg shadow-lg bg-primary-color text-ternary-color '>
                <div className='rounded-md overflow-hidden'>
                    <img className='w-full h-auto' src="https://dz8fbjd9gwp2s.cloudfront.net/courses/64b15e67e4b0c3a1bd122e75/64b15e67e4b0c3a1bd122e75_scaled_cover.jpg?v=1" alt="" />
                </div>

                <p className='font-semibold my-1'>
                    <i className="mr-1 fa-solid fa-indian-rupee-sign"></i>
                    <span>{course.price}</span>
                </p>

                <button className='w-full bg-green-500 text-ternary-color font-semibold px-3 py-2 mb-3 rounded-md '>Buy Now</button>

                <div className='px-3'>
                    <h2 className='font-bold'>Course Highlights :</h2>
                    <ul className='font-medium'>
                        {course.hilights.map(content => {
                            return (
                                <li className='mb-1'>
                                    <i className="mr-2  fa-solid fa-caret-right"></i>
                                    {content}
                                </li>
                            );
                        })}
                    </ul>
                </div>


            </div>
        </div>
    );
}

const Bottom = () => {

    const courseDetails = {
        learn: ['HTML, CSS, JavaScript', 'Tailwind CSS', 'CSS Animation', 'Core JavaScript', 'End to End React.js Project', '15+ Industry Grade Projects', 'No Pre requisite', 'Backend with Node.js and Express.js'],
        basicDetails: {
            'Mode of the Course': 'Online Recorded Lecture',
            'Technologies that you will Learn': 'HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js',
            'No. Of Lectures': 54,
            'Class Recording Provided': 'Yes',
            'Course Validity': '2 Years'
        },
        courseContents: {
            'HTML Basics': [
                {
                    contentType: 1,
                    title: 'Setting up tools, Introduction to Web Development, Basics of HTML',
                    time: '2 hours',
                },
                {
                    contentType: 1,
                    title: 'Setting up tools, Introduction to Web Development, Basics of HTML',
                    time: '2 hours',
                },
                {
                    contentType: 1,
                    title: 'Setting up tools, Introduction to Web Development, Basics of HTML',
                    time: '2 hours',
                }
            ],
            'JavaScript': [
                {
                    contentType: 1,
                    title: 'Setting up tools, Introduction to Web Development, Basics of HTML',
                    time: '2 hours',
                },
                {
                    contentType: 1,
                    title: 'Setting up tools, Introduction to Web Development, Basics of HTML',
                    time: '2 hours',
                },
                {
                    contentType: 1,
                    title: 'Setting up tools, Introduction to Web Development, Basics of HTML',
                    time: '2 hours',
                }
            ]
        }
    }

    const instructorsData = [
        {
            name: 'John Doe',
            image: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/64b15e67e4b0c3a1bd122e75/64b15e67e4b0c3a1bd122e75_scaled_cover.jpg?v=1',
            description: 'John Doe is a web development expert with years of experience.',
            socialLinks: [
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/johndoe',
                    icon: 'fab fa-twitter', // Font Awesome icon class for Twitter
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/johndoe',
                    icon: 'fab fa-linkedin', // Font Awesome icon class for LinkedIn
                },
                // Add more social links as needed
            ],
        },
        {
            name: 'Jane Smith',
            image: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/64b15e67e4b0c3a1bd122e75/64b15e67e4b0c3a1bd122e75_scaled_cover.jpg?v=1',
            description: 'Jane Smith is a frontend developer and design enthusiast.',
            socialLinks: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/janesmith',
                    icon: 'fab fa-github', // Font Awesome icon class for GitHub
                },
                {
                    name: 'Portfolio',
                    url: 'https://www.janesmith.com',
                    icon: 'fas fa-globe', // Font Awesome icon class for Portfolio
                },
                // Add more social links as needed
            ],
        },
    ];

    return (
        <div className='flex  justify-center m-auto mt-40'>
            <div className='md:w-[950px] '>
                <ul className='bg-primary-color text-ternary-color m-3 md:py-7 py-3  flex justify-around overflow-auto'>
                    <li className='shrink-0 px-2'>
                        <Link to={'/#overview'}>Overview</Link>
                    </li>
                    <li className='shrink-0 px-2'>
                        <Link to={'/#course-content'}>Course content</Link>
                    </li>
                    <li className='shrink-0 px-2'>
                        <Link to={'/#instructor'}>Instructor</Link>
                    </li>
                    <li className='shrink-0 px-2'>
                        <Link to={'/#f&q'}>F&Q</Link>
                    </li>
                </ul>

                <div>
                    <div id='overview'>
                        <h3 className='font-bold text-xl md:text-2xl my-7'>What you will learn</h3>
                        {
                            courseDetails.learn.map(content => {
                                return (
                                    <p className='py-1 px-3 font-semibold'>
                                        <i className="mr-2 text-primary-color  fa-solid fa-check"></i>
                                        {content}
                                    </p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3 className='font-bold text-xl md:text-2xl my-7'>Basics Details</h3>
                        {
                            Object.keys(courseDetails.basicDetails).map(key => {
                                return (
                                    <div className='flex justify-between my-1 px-3'>
                                        <p className='w-[30%] '>{key}</p>
                                        <p className='py-1 font-semibold w-[50%]'>{courseDetails.basicDetails[key]}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div id='course-content'>
                        <h3 className='font-bold text-xl md:text-2xl my-7'>Course Content</h3>
                        <CourseContents courseContents={courseDetails.courseContents} />
                    </div>

                    <div id='instructor'>
                        <h3 className='font-bold text-xl md:text-2xl my-7'>Instructor</h3>
                        <CardsContainer>
                            {instructorsData.map((instructor, index) => (
                                <Instructor key={index} {...instructor} />
                            ))}
                        </CardsContainer>
                    </div>

                    <div id='f&q'>
                        <h3 className='font-bold text-xl md:text-2xl my-7'>F&Q</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails
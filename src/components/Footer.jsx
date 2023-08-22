import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary-color py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex gap-8 flex-col sm:flex-row justify-around">
                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-4">Ibex Academy</h2>
                        <p className="text-sm mb-2">123 Main Street</p>
                        <p className="text-sm mb-2">City, State, Country</p>
                        <p className="text-sm mb-2">Phone: (123) 456-7890</p>
                        <p className="text-sm">Email: info@ibexacademy.com</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-white hover:text-secondary-color">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white hover:text-secondary-color">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-secondary-color">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white hover:text-secondary-color">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                        <Link to="/" className="block mb-2 text-sm hover:text-secondary-color">Home</Link>
                        <Link to="/courses" className="block mb-2 text-sm hover:text-secondary-color">Courses & Programs</Link>
                        <Link to="/about" className="block mb-2 text-sm hover:text-secondary-color">About Us</Link>
                        <Link to="/contact" className="block mb-2 text-sm hover:text-secondary-color">Contact</Link>
                        <Link to="/privacy-policy" className="block text-sm hover:text-secondary-color">Privacy Policy</Link>
                    </div>
                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-4">Popular Courses</h2>
                        <Link to="/courses/react" className="block mb-2 text-sm hover:text-secondary-color">React Development</Link>
                        <Link to="/courses/python" className="block mb-2 text-sm hover:text-secondary-color">Python for Beginners</Link>
                        <Link to="/courses/web-design" className="block mb-2 text-sm hover:text-secondary-color">Web Design Essentials</Link>
                        <Link to="/courses/data-science" className="block text-sm hover:text-secondary-color">Data Science Bootcamp</Link>
                    </div>
                </div>
            </div>
            <div className="text-white mt-8 text-center">
                <p>&copy; {new Date().getFullYear()} Ibex Academy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

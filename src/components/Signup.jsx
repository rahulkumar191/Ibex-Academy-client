import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './common/PrimaryButton';

import api from '../api';
import { setAuthToken } from '../utils/authUtils';

import { useFormik } from 'formik'
import { SignupSchema } from '../utils/yupSchemas'

import { toastSuccess, toastError } from "../utils/toastUtils";
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsUser }) => {

    const navigateTo = useNavigate();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: "user",
            },
            validationSchema: SignupSchema, // Use the signupSchema for form validation
            onSubmit: async (values, action) => {
                try {
                    console.log("signup clicked")
                    console.log(values);
                    const response = await api.post(`/${values.role}/signup`, values);
                    setAuthToken(response.data.token);
                    action.resetForm();
                    toastSuccess('SignUp successfully!');
                    setIsUser(values.email);
                    navigateTo('/')
                    console.log("signup finished")
                }
                catch (err) {
                    toastError('User Already exist');
                    setIsUser(null);
                }
            }
        });


    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6" onSubmit={handleSubmit}>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <div>
                        <label>
                            <input type="radio" name="role" value="user"
                                checked={values.role === "user"}
                                onChange={() => setFieldValue("role", "user")}
                            />
                            User
                        </label>
                        <label>
                            <input type="radio" name="role" value="admin" 
                                checked={values.role === "admin"}
                                onChange={() => setFieldValue("role", "admin")}
                            />
                            Admin
                        </label>
                        {touched.role && errors.role && (
                            <div className="text-red-500">{errors.role}</div>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        {touched.firstName && errors.firstName && (
                            <div className="text-red-500">{errors.firstName}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.lastName && errors.lastName && (
                            <div className="text-red-500">{errors.lastName}</div>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                    {touched.email && errors.email && (
                        <div className="text-red-500">{errors.email}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    // required
                    />
                    {touched.phone && errors.phone && (
                        <div className="text-red-500">{errors.phone}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    // required
                    />
                    {touched.password && errors.password && (
                        <div className="text-red-500">{errors.password}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    // required
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                        <div className="text-red-500">{errors.confirmPassword}</div>
                    )}
                </div>
                <PrimaryButton type="submit">
                    <button type="submit">SignUp</button>
                </PrimaryButton>

                <div className="text-center">
                    <span>Already have a Account ? </span>
                    <Link to={'/user/login'}>
                        <span>Login</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Signup;

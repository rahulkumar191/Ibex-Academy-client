import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginSchema } from '../utils/yupSchemas';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './common/PrimaryButton';
import api from '../api';
import { setAuthToken } from '../utils/authUtils';
import { toastSuccess, toastError } from '../utils/toastUtils';
import SwitchButton from './common/SwitchButton';


const Login = ({ setIsUser }) => {
  const navigateTo = useNavigate();
  const [role, setRole] = useState('user');

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        role: 'user'
      },
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        try {
          const response = await api.post(`${values.role}/login`, values);
          setAuthToken(response.data.token);
          toastSuccess('Logged in successfully!');
          setIsUser(values.email);
          navigateTo('/');
        } catch (err) {
          toastError('Invalid credentials');
          console.log('wrong')
          setIsUser(null);
        }
      },
    });

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
          />
          {touched.password && errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>
        <PrimaryButton type="submit">
          <button type='submit'>Login</button>
        </PrimaryButton>
        <div className='flex justify-around mt-5' >
          <p>If not account</p>
          <p>|</p>
          <Link to={'/user/signup'}>
            <p>SignUp</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

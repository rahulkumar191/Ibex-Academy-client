import React from 'react'
// import logo from '../images/IbexAcademy.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div >
        <Link to={'/'}>
        <h2 className='text-white font-bold text-xl font-sans uppercase px-5 py-1  rounded-md shadow-sm shadow-purple-400  '>Ibex Academy</h2>
        </Link>
    </div>
  )
}

export default Logo
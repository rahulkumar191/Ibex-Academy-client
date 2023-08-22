import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const IsLoggedin = ({isUser, children}) => {
    const navigateTo = useNavigate();
  return (
    <div>
        {isUser ? <Navigate to={'/'}/> : children}
    </div>
  )
}

export default IsLoggedin
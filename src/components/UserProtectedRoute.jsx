import React from 'react'
import { Navigate } from 'react-router-dom'
import Unauthorized from './common/Unauthorized';

const UserProtectedRoute = ({isUser, children}) => {
  return (
    <div>
        {isUser ? children : <Unauthorized/>}
    </div>
  )
}

export default UserProtectedRoute;
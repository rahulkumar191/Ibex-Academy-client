import React, { useEffect } from 'react';
import { removeAuthToken } from '../utils/authUtils';
import { useNavigate } from 'react-router-dom';
import { toastSuccess } from '../utils/toastUtils';

const Logout = ({setIsUser}) => {
  const navigateTo = useNavigate();

  useEffect(() => {
    // Remove authentication token
    removeAuthToken();

    setIsUser(null);

    // Show a toast or user feedback
    toastSuccess('You have been logged out.');

    // Delay the redirect
    const redirectTimer = setTimeout(() => {
      navigateTo('/');
    }, 3000); // Redirect after 3 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;

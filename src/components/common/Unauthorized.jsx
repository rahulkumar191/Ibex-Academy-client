import React from 'react';

const Unauthorized = () => {
  return (
    <div className='mt-24 md:w-1/2 text-red-500 font-semibold text-center'>
      <h2>Unauthorized Access</h2>
      <p>You do not have the necessary permissions to access this page.</p>
    </div>
  );
};

export default Unauthorized;

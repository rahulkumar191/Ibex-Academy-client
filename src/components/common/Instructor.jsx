import React from 'react';

const Instructor = ({ name, image, description, socialLinks }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <div className="flex justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Instructor;

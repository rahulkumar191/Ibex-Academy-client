import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eu metus ullamcorper blandit vel ac ante.',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Instructor',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio eu metus ullamcorper blandit vel ac ante.',
    },
    // Add more team members here...
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* About Company Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-700 mt-4">{member.bio}</p>
            </div>
          ))}
        </div> 

        {/* Call-to-Action (CTA) Section */}
        <div className="text-center mt-10">
          <h2 className="text-3xl font-semibold text-gray-800">Start Your Learning Journey Today!</h2>
          <p className="text-gray-600 mt-2">Explore our wide range of courses and boost your skills.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded">
            <Link to={'/courses'}>Browse Courses</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

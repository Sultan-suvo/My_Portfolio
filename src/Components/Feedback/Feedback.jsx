import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Avatar from '@mui/material/Avatar';
import person2 from '../../assets/person 2.png'
import person3 from '../../assets/person 3.png'

const Feedback = () => {
  return (
    <div className="bg-[#FDF8F7] py-16">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-8">Clients Are Satisfied With Our Work </h1>
      <div className=" mx-auto px-4 mt-2 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Slide direction="left">
            <div className="bg-white rounded-lg shadow p-6">
              <Avatar src="https://i.ibb.co/sHhyQkq/mominn-removebg-preview.png" alt="John Doe" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold mb-4">John Doe</h2>
              <p className="text-gray-700 mb-4">Great service! The team was responsive and delivered excellent results.</p>
              <p className="text-gray-500">5 stars</p>
            </div>
          </Slide>
          <Slide direction="up">
            <div className="bg-white rounded-lg shadow p-6">
              <Avatar src={person2} alt="Jane Smith" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Jane Smith</h2>
              <p className="text-gray-700 mb-4">I am impressed with the quality of their work. Highly recommended!</p>
              <p className="text-gray-500">4.5 stars</p>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="bg-white rounded-lg shadow p-6">
              <Avatar src={person3} alt="Mike Johnson" className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold mb-4">Mike Johnson</h2>
              <p className="text-gray-700 mb-4">The team exceeded my expectations. Will definitely work with them again</p>
              <p className="text-gray-500">5 stars</p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
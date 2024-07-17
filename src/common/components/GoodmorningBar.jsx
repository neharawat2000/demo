// GoodMorningBar.js

import React, { useState } from 'react';
import searchIcon from '../../data/Group 536.png';
import notification from '../../data/notification.png';
import NotificationModal from '../components/notification'; // import the modal component

const GoodMorningBar = ({ userName }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-between items-center pl-5 w-full">
      <div className="flex items-center space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPgwYYhHGntkkaWUE7g3jGjMkqSkSYbGq4g&s"
          alt="User Avatar"
          className="w-12 h-12 rounded-full border-2 border-gray-300"
        />
        <div className="text-good-morning-text font-semibold">
          👋 Good morning {userName}
        </div>
      </div>
      <div className='flex w-[31%] relative'>
        <div className="flex items-center bg-white rounded-3xl p-2 h-10 w-full mr-3">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-8 h-8 mr-2"
          />
          <input
            type="text"
            placeholder="Search information"
            className="bg-white focus:outline-none pl-3 w-full"
          />
        </div>
        <img
          src={notification}
          alt="Notification Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={toggleModal}
        />
        <NotificationModal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </div>
  );
};

export default GoodMorningBar;

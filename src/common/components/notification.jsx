// NotificationModal.js

import React from 'react';

const NotificationModal = ({ isOpen, onClose }) => {
  const notifications = [
    'Deal DNJD3 is ready to be sent to operations',
    'Deal DNJD3 is ready to be sent to operations',
    'Deal DNJD3 is ready to be sent to operations',
    'Deal DNJD3 is ready to be sent to operations',
    'Deal DNJD3 is ready to be sent to operations'
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute mt-14 right-2 bg-white border border-gray-300 rounded-lg shadow-lg py-4 px-6 w-[450px] z-40">
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg text-lender-green-text font-bold">Notifications</span>
        <button onClick={onClose} className="text-gray-600">&times;</button>
      </div>
      <div className="space-y-5 mb-5">
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-custom-green mr-4"></span>
              <p>{notification}</p>
            </div>
            {index < notifications.length - 1 && (
              <hr className="border-gray-300 my-2" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className='flex justify-center mt-10 mb-4'>
        <div className='bg-custom-green text-white text-center rounded-lg py-2 px-6 w-1/2'>
          Mark all as read
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;

import React from 'react';

const GreenDotWithText = ({ text }) => {
  return (
    <div className="flex items-center mr-5 mb-3">
      <div className="w-4 h-4 bg-custom-green rounded-full mr-3"></div>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default GreenDotWithText;

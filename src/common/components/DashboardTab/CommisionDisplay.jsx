import React from 'react';
import imageUrl from '../../../data/dashboardDollar.png'

const CommissionDisplay = ({ amount, description }) => {
  return (
    <div className="flex-1 flex flex-row items-center w-1.5  justify-between">
      <div className="flex flex-col  w-full  ">
        <div className="text-custom-green font-bold text-3xl"> 
          {amount}
        </div>
        <div className='text-green-text font-semibold text-sm '>
          {description}
        </div>
      </div>
      <img src={imageUrl} alt="Commission Image" style={{ maxWidth: '50px', maxHeight: '50px' }} />
    </div>
  );
};

export default CommissionDisplay;
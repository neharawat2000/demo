import React from 'react';
import imageUrl from '../../../data/Group 558.png'

const LeadUpperTab = ({title  , isSelected , onClick}) => {
  return (
    <div  onClick={onClick} className={`flex items-center ${isSelected ? 'bg-custom-green , text-white' :  'bg-white text-black'} font-semibold py-4 px-6 rounded-full cursor-pointer`}>
          {title}
    </div> 
  );
};

export default LeadUpperTab;
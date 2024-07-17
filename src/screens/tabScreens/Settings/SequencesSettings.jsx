// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import ChildNavigation from "../../../common/components/SecondaryNavigation/ChildNavigation/ChildNavigation";
import { useNavigate } from "react-router-dom";
import { LabeledDropdown, LabeledInput } from "../../../common/components/LeadComponent/CommonTextField";
import { MdEdit } from 'react-icons/md';
import ProfButton from '../../../data/profileupdate.png';

const SequenceSettings = () => {

  const navigate = useNavigate();

  const menuItems = [
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal",
  ];

  const LabeledTextarea = ({ label, placeholder, className }) => (
    <div className="flex flex-col w-full">
      <label className=" font-medium text-good-morning-text bg-white">{label}</label>
      <textarea 
        placeholder={placeholder} 
        className={`border border-gray-300 bg-white w-full  mt-3 h-56 resize-none rounded-md ${className}`} 
      />
    </div>
  );

  return (
    <div className="flex h-screen bg-black">
      <div className="flex space-x-24 w-80">
  <SecondaryNavigation items={menuItems} />
  <ChildNavigation items={["Account Settings", "Compliance Settings" , "Email templates settings" , "Sequences Settings"]} label={'Settings'}/>
</div>
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col ">
        <GoodMorningBar userName="Manish" />
        <div className="flex justify-between w-full mr-9 my-6 ">
        
        </div>
          <div className="flex-grow  mx-2 mb-5 overflow-y-auto">
          <div className="relative bg-white rounded-lg py-5 px-7 pb-8 mx-7">
  <div className="flex justify-between mb-3">
    <div className="text-lg font-semibold text-good-morning-text mb-2">
      First reminder
    </div>
  </div>
  <div className="space-y-7">
    <div className="flex space-x-4">
      <LabeledInput label={'Type'} placeholder={'SMS & Email'} />
    </div>
    <div className="flex space-x-4">
      <LabeledDropdown 
        label={'Daily'} 
        options={[
          { value: '', label: 'Daily' },
          { value: '', label: 'Weakly' },
          { value: '', label: 'Monthly' },
          // Add more options as needed
        ]}
      />
      <LabeledDropdown 
        label={'Time'} 
        options={[
          { value: '', label: '18:00' },
          // Add more options as needed
        ]}
      />
    </div>
  </div>
</div>

<div className="flex mr-[65%] justify-center flex">
    <div className="bg-custom-green w-1 h-[100px]"></div>
    <div className="bg-white rounded-lg px-4 py-1 h-auto my-8 ml-4">If the contact doesn't answer</div>
  </div>
<div className="relative">
  
  <div className="bg-white rounded-lg py-4 pb-8 px-7 mx-7 ">
    <div className="flex justify-between mb-3">
      <div className="text-lg font-semibold text-good-morning-text mb-2">
        Second reminder
      </div>
    </div>
    <div className="space-y-7">
      <div className="flex space-x-4">
        <LabeledInput label={'Type'} placeholder={'SMS & Email'} />
      </div>
      <div className="flex space-x-4">
        <LabeledDropdown 
          label={'Daily'} 
          options={[
            { value: '', label: 'Daily' },
            { value: '', label: 'Weakly' },
            { value: '', label: 'Monthly' },
            // Add more options as needed
          ]}
        />
        <LabeledDropdown 
          label={'Time'} 
          options={[
            { value: '', label: '18:00' },
            // Add more options as needed
          ]}
        />
      </div>
    </div>
  </div>
</div>

          </div>
      </main>
    </div>
  );
};

export default SequenceSettings;

// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import ChildNavigation from "../../../common/components/SecondaryNavigation/ChildNavigation/ChildNavigation";
import { useNavigate } from "react-router-dom";
import { LabeledDropdown, LabeledInput, LabeledInputIcons } from "../../../common/components/LeadComponent/CommonTextField";
import { MdEdit } from 'react-icons/md';
import ProfButton from '../../../data/profileupdate.png';

const EmailTemplateSettings = () => {
  const [selectedTab, setSelectedTab] = useState('Information');

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    console.log("Tab ---------------  " , tab)
    setSelectedTab(tab);
  };

  const menuItems = [
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal",
  ];

  const LabeledTextarea = ({ label, placeholder, className  , value}) => (
    <div className="flex flex-col w-full">
         <div className="text-lg font-bold text-lender-green-text mb-5" ml-7>
                  {label}
                </div>
      {/* <label className=" font-medium text-good-morning-text bg-white">{label}</label> */}
      <textarea 
      value= {value}
        placeholder={placeholder} 
        className={`border border-gray-300 bg-gray-200 w-full py-6 px-7  mt-3 h-96 resize-none rounded-md ${className}`} 
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
        <div className="flex w-full mr-9 my-6 ">
        
        </div>
          <div className="flex-grow  mx-5 mb-5 overflow-y-auto">
          <div className=" h-auto pb-8 mx-2">
          <div className="flex mb-3 space-x-4">
                
                <div className=" bg-white rounded-lg py-5 px-3 space-y-7 w-full ">
                <div className="w-full">
         <div className="relative  w-full ">
        <button className="absolute  right-2 bg-custom-green  text-white px-7 py-1  rounded-xl  mr-3">
           Edit
         </button>
         <div className="px-3 mt-5">
           <div className="">
           <div className="w-full flex">
          <LabeledTextarea 
            label={'Template for step 1'} 
            placeholder={'Enter template name'} 
            className=" h-32 w-full p-2 rounded-xl"
            value='Hello {First Name}
In order to receive the funding as discussed, we will need the following documents:
3 Months of your most recent bank statements
Application sent VIA SignWell
If you have any questions, or concerns please give me a call/ text!
Brandon Klein
CUO at Premium Capital
P - 917-331-6165'
          />
          </div>
           </div>
           </div>
           </div>
         
       </div>
       </div>
            <div className=" bg-white rounded-lg py-5 px-7 space-y-7 w-full">
            <div className="relative  w-full ">
        <button className="absolute  right-2 bg-custom-green  text-white px-7 py-1  rounded-xl  mr-3">
           Edit
         </button>
         <div className="px-3 mt-5">
           <div className="">
           <div className="w-full flex">
          <LabeledTextarea 
            label={'Template for step 2'} 
            placeholder={'Enter template name'} 
            className=" h-32 w-full p-2 rounded-xl"
            value='Hello {Lender Agent First Name }, please see attached deal.'
          />
          </div>
           </div>
           </div>
           </div>
                </div>
                </div>
              
          {/* <ReusableTable columns={columns} data={data} /> */}
          <div className="relative bg-white">
    <div className="absolute top-10 right-8 w-40 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
      Save
    </div>
  </div>
          </div>
          </div>
      </main>
    </div>
  );
};

export default EmailTemplateSettings;

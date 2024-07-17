// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import ChildNavigation from "../../../common/components/SecondaryNavigation/ChildNavigation/ChildNavigation";
import { useNavigate } from "react-router-dom";
import { LabeledInput, LabeledInputIcons } from "../../../common/components/LeadComponent/CommonTextField";
import { MdEdit } from 'react-icons/md';
import ProfButton from '../../../data/profileupdate.png';

const ComplianceSettings = () => {
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
        <div className="flex w-full mr-9 my-6 ">
        
        </div>
          <div className="flex-grow  mx-2 mb-5 overflow-y-auto">
          <div className=" h-auto pb-24 mx-10">
          <div className="flex mb-6 space-x-4">
                
                <div className=" bg-white rounded-lg py-5 px-7 space-y-7 w-full ">
                <div className="text-lg font-bold text-lender-green-text my-5">
                  Current required fields for compliance form
                </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Agent First Name'} placeholder={'Enter first name'} iconName={'delete'} />
                    
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Agent Last Name'} placeholder={'Enter last name'} iconName={'delete'} />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Phone Number '} placeholder={'9000000000'} iconName={'delete'} />
                    
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Address:'} placeholder={'Enter address'} iconName={'delete'} />
                  </div>
                </div>
                <div className=" bg-white rounded-lg py-5 px-7 space-y-7 w-full">
                <div className="text-lg font-bold text-lender-green-text my-5" ml-7>
                  Add more fields
                </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Agent First Name'} placeholder={'Enter first name'}  />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Agent Last Name'} placeholder={'Enter last name'} />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Phone Number '} placeholder={'9000000000'} />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInputIcons label={'Address:'} placeholder={'Enter address'} />
                    
                  </div>
                </div>
                </div>
              
          {/* <ReusableTable columns={columns} data={data} /> */}
          <div className="relative bg-white">
    <div className="absolute top-10 right-8 w-40 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
      Submit
    </div>
  </div>
          </div>
          </div>
      </main>
    </div>
  );
};

export default ComplianceSettings;

// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import ChildNavigation from "../../../common/components/SecondaryNavigation/ChildNavigation/ChildNavigation";
import { useNavigate } from "react-router-dom";
import { LabeledInput } from "../../../common/components/LeadComponent/CommonTextField";
import { MdEdit } from 'react-icons/md';
import ProfButton from '../../../data/profileupdate.png';
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const role = useSelector((state) => state.role);

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    console.log("Tab ---------------  " , tab)
    setSelectedTab(tab);
  };

  const menuItems= role == 'operations' ? 
  [
    "Dashboard",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ]
  :  [
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ];

  return (
    <div className="flex h-screen">
      <div className="flex space-x-24 w-80">
  <SecondaryNavigation items={menuItems} />
  <ChildNavigation items={["Account Settings", "Compliance Settings" , "Email templates settings" , "Sequences Settings"]} label={'Settings'}/>
</div>
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col ">
        <GoodMorningBar userName="Manish" />
        <div className="flex justify-between w-full mr-9 my-6 ">
        
        </div>
          <div className="flex-grow  mx-2 mb-5 overflow-y-auto">
          <div className="bg-white rounded-lg py-5 px-7 h-auto pb-24 mx-10">
          <div className="flex justify-between mb-6">
                </div>
                <div className="space-y-7 ">
                    <div className="flex">
                    <div className="relative inline-block mr-8">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPgwYYhHGntkkaWUE7g3jGjMkqSkSYbGq4g&s"
        alt="User Avatar"
        className="w-28 h-24 rounded-full border-2 border-custom-green"  // Adjust size and border color
      />
      <div className="absolute bottom-0 right-0  p-1 ">
        {/* <img src="../" className="text-green-500" size={20} />   */}
        <img
          src={ProfButton}
        //   alt="Background"
          className="object-cover h-8  mt-1"
        />
      </div>
    </div>
                <LabeledInput label={'Birthday'} placeholder={'Select Date'} />
                </div>
                  <div className="flex space-x-4">
                    <LabeledInput label={'Agent First Name'} placeholder={'Enter first name     '} />
                    <LabeledInput label={'Date'} placeholder={'09/12/23'} />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInput label={'Agent Last Name'} placeholder={'Enter last name'} />
                    <LabeledInput label={'Last Name'} placeholder={'Enter last name'} />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInput label={'Phone Number '} placeholder={'9000000000'} />
                    <LabeledInput label={'Email'} placeholder={'example@gmail.com'} />
                  </div>
                  <div className="flex space-x-4">
                    <LabeledInput label={'Address:'} placeholder={'Enter address'} />
                    <LabeledInput label={'Password'} placeholder={'**************'} />
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

export default AccountSettings;

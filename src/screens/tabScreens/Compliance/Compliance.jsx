// Dashboard.js
import React, { useState } from "react";
import CommissionDisplay from "../../../common/components/DashboardTab/CommisionDisplay";
import DualBarChartComponent from '../../../common/components/DualBarChart'   //  "./DualBarChart";
import Calendar from 'react-calendar';
import '../../../common/components/Calender.css';
import Bell from  "../../../data/Bell, Notifications.png";  // '../../data/Bell, Notifications.png';
import searchIcon from '../../../data/Group 536.png'; 
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { LabeledInput } from "../../../common/components/LeadComponent/CommonTextField";
import LeadGridSquare from "../../../common/components/LeadGridSquare";
import RemovedLeadGridSquare from "../../../common/components/removedLeadSquare";
import { useSelector } from "react-redux";

const Compliance = () => {
  const role = useSelector((state) => state.role);
  const removedLeads = [
    {
      comName: 'Construction',
      firstname: 'Michael',
      lastname: 'Jasek',
      email: 'mike@mjasek.com',
      phone: '9864689768',
      contractAmount: '792.372',
      paymentAmount: '935.006'
    },
    {
        comName: 'Volkswagen',
        firstname: 'Thomas Shelby',
        lastname: 'Jasek',
        email: 'tshelby@volkswagen.com',
        phone: '9864689768',
        contractAmount: '792.372',
        paymentAmount: '935.006'
      },
      {
        comName: 'Volkswagen',
        firstname: 'Thomas Shelby',
        lastname: 'Jasek',
        email: 'tshelby@volkswagen.com',
        phone: '9864689768',
        contractAmount: '792.372',
        paymentAmount: '935.006'
      }
     
]

    const RemovingQueueLeads = [
        {
          comName: 'Motorola',
          firstname: 'Luke',
          lastname: 'Skywalker',
          email: 'skywalker@motorola.com',
          phone: '9864689768',
          contractAmount: '792.372',
          paymentAmount: '935.006'
        },
        
    
    ]
    
  return (
    <div className="flex h-auto">
          <DashboardTab/>
      {/* </div> */}
      <main className="flex-1 bg-background-color p-6  h-full">
      <GoodMorningBar userName="Manish" />
      <div className="flex">
      <div className="flex-grow w-[50%] ">
        <div className="bg-white  mt-10 rounded-2xl p-10 ">
        <div className="text-lg font-bold text-lender-green-text mb-2">
                  Latest removed leads 
        </div>
        <LeadGridSquare leads={removedLeads} />
        <div className="text-lg font-bold text-lender-green-text mb-5 mt-5">
                  Leads in queue to be removed
        </div>
        <RemovedLeadGridSquare leads={RemovingQueueLeads} />
        </div>
        <div className="h-9"></div>
      </div>
      {/* Right Part */}
      {
        role == 'admin' ?  null :
      <div className="flex-grow ml-4 w-72 max-h-full bg-white mt-10 rounded-2xl py-8 h-[100%] px-8  items-center justify-center content-center">
        
        <div className="text-lg font-bold text-lender-green-text mb-5">
                  Remove Lead from masters
                </div>
        <div className="mb-4">
        <LabeledInput label={'Company Name'} placeholder={'Enter company name'} />
        </div>
        <div className="mb-4">
        <LabeledInput label={'First name'} placeholder={'Enter First name'} />
        </div>
        <div className="mb-4">
        <LabeledInput label={'Last name'} placeholder={'Enter last name'} />
        </div>                                                                                                                          
        <div className="mb-4">
        <LabeledInput label={'Email address'} placeholder={'Enter Email address'} />
        </div>
        <div className="mb-4">
        <LabeledInput label={'Phone Number'} placeholder={'Enter phone number'} />
        </div>
        <div className="mb-4">
        <LabeledInput label={'Contact Amount'} placeholder={'Enter contact amount'} />
        </div>
        <div className="mb-4">
        <LabeledInput label={'Payment Amount'} placeholder={'Enter contact amount'} />
        </div>
        <div className="mb-4">
        <LabeledInput label={'Lead ID'} placeholder={'Enter Lead ID'} />
        </div>
        <div className=" ml-[25%] mt-7 h-9 px-6 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer w-48 ">
          Submit for removal
        </div>
      </div>
}
      </div>
      </main>
    </div>
  );
};

export default Compliance;

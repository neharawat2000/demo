// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { Table } from "lucide-react";
import ReusableTable from "../../../common/tables/Table";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SubmissionTable = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <div className={`flex items-center space-x-2 px-2 py-1  ${value == 'Decline' ? 'bg-declined-bgcolor' :  value == "Approved" ? "bg-operation-green" : "bg-pending-background"} text-white rounded-2xl border w-28`}>
         <span className={`h-2 w-2 ${value == 'Decline' ? 'bg-red-600'  : value == "Approved" ? 'bg-green-500' :  'bg-pendingText'} rounded-full`}></span>
            <span className={` ${value == 'Decline' ? 'text-red-600'  :  value == "Approved" ? "text-approved-text" :"text-pendingText"} font-semibold`}>{value}</span>
          </div>
        ), 
      },
      {
        Header: 'Agent',
        accessor: 'agent',
        Cell: ({ value }) => (
            <span className="text-good-morning-text font-semibold">{value}</span>
        ), 
       
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Lead ID',
        accessor: 'leadId',
      },
      {
        Header: 'Lenders',
        accessor: 'lenders',
      },
      {
        Header: 'Open deal',
        accessor: 'openDeal',
        Cell: ({ value }) => <FiEye onClick={(() => {navigate('/dealtabs')})} alt="Open Deal" style={{ cursor:'pointer' ,  width: '20px', height: '20px' }} />, // Render the eye icon
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        status: 'Decline',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Decline',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Approved',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Approved',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        lenders: 'Update Lenders',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      // Add more data as needed
    ],
    []
  );


  const handleTabClick = (tab) => {
    console.log("Tab ---------------  " , tab)
    setSelectedTab(tab);
  };

  const LabeledTextarea = ({ label, placeholder, className }) => (
    <div className="flex flex-col w-full">
      <label className=" font-medium text-good-morning-text bg-white">{label}</label>
      <textarea 
        placeholder={placeholder} 
        className={`border border-gray-300 bg-white w-full  mt-3 h-56 resize-none rounded-md ${className}`} 
      />
    </div>
  );

  const users = [
    {'name' : 'Olivia Rhye',
     'img': 'https://cdn.theorg.com/5f6cf081-3715-4c11-863c-036782203c9b_thumb.jpg'
    },
    {'name' : 'Phoenix Baker',
    'img': 'https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg'
   },
   {'name' : 'Lana Steiner',
   'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTg7k5TDqDaaOl1gvZJLojqjPyVLdevAICDg&s'
  }];

  return (
    <div className="flex h-screen bg-black">
      <DashboardTab />
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col">
        <GoodMorningBar userName="Manish" />
        <div className="flex-grow overflow-y-auto mx-4 mb-5">
        <ReusableTable columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default SubmissionTable;

// Dashboard.js
import React, { useState } from "react";
import '../../../../common/components/Calender.css';
import searchIcon from '../../../../data/Group 536.png'; 
import { FiEye } from "react-icons/fi";
import LeadUpperTab from "../../../../common/components/LeadComponent/UpperTab";
import Table from "../../../../common/tables/Table";
import { useNavigate } from "react-router-dom";

const DealScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <div className="flex items-center space-x-2 px-2 py-1 bg-pending-background text-white rounded-2xl border ">
            <span className="h-2 w-2 bg-pendingText rounded-full"></span>
            <span className="text-pendingText">{value}</span>
          </div>
        ), 
      },
      {
        Header: 'Queue',
        accessor: 'queue',
        Cell: ({ value }) => (
          <div className="flex items-center space-x-2 px-2 py-1 font-semibold bg-operation-green text-white rounded-2xl border ">
            <span className="text-operaion-text-green">{value}</span>
          </div>
        ), 
      },
      {
        Header: 'Agent',
        accessor: 'agent',
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
        Header: 'Open deal',
        accessor: 'openDeal',
        Cell: ({ value }) => <FiEye onClick={(() => navigate('/deal'))} alt="Open Deal" style={{ cursor:'pointer' ,  width: '20px', height: '20px' }} />, // Render the eye icon
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
        agent: 'Olivia Rhye',
        company: 'SEA 2 ASIA LLC',
        date: '15/10/2023',
        leadId: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        status: 'Pending',
        queue: 'Operations',
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
    console.log("Tab ---------------  ", tab)
    setSelectedTab(tab);
  };

  const LabeledTextarea = ({ label, placeholder, className }) => (
    <div className="flex flex-col w-full">
      <label className="font-medium text-good-morning-text bg-white">{label}</label>
      <textarea 
        placeholder={placeholder} 
        className={`border border-gray-300 bg-white w-full mt-3 h-56 resize-none rounded-md ${className}`} 
      />
    </div>
  );

  const users = [
    {
      name: 'Olivia Rhye',
      img: 'https://cdn.theorg.com/5f6cf081-3715-4c11-863c-036782203c9b_thumb.jpg'
    },
    {
      name: 'Phoenix Baker',
      img: 'https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg'
    },
    {
      name: 'Lana Steiner',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTg7k5TDqDaaOl1gvZJLojqjPyVLdevAICDg&s'
    }
  ];

  return (
    <div className="col mx-4">
      <div className="flex h-full">
        <div className="flex-grow flex-shrink-0 space-x-6 h-full">
          <div className="h-9"></div>
          <div className="h-96">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealScreen;

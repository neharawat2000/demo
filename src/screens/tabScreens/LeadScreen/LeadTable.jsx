// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { Table } from "lucide-react";
import ReusableTable from "../../../common/tables/Table";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LeadTable = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company name',
        accessor: 'cname',
      },
      {
        Header: 'First name',
        accessor: 'fname',
      },
      {
        Header: 'Last name',
        accessor: 'lname',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone number',
        accessor: 'phone',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'Tag',
        accessor: 'tag',
      },
      {
        Header: 'Open Lead',
        accessor: 'openLead',
        Cell: ({ value }) => <FiEye onClick={(() => {navigate('/leadstabs')})} alt="Open Deal" style={{ cursor:'pointer' ,  width: '20px', height: '20px' }} />, // Render the eye icon
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        cname: 'Apple',
        fname: 'Steve',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        cname: 'Musimundo',
        fname: 'Marcelo',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        cname: 'Volkswagen',
        fname: 'Thomas',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        cname: 'Sony',
        fname: 'Han',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        cname: 'Apple',
        fname: 'Steve',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        cname: 'Apple',
        fname: 'Steve',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      },
      {
        cname: 'Apple',
        fname: 'Steve',
        lname: 'Jobs',
        email: 'stevejobs@apple.com',
        phone: '9098789678',
        city:  'New Yorkk',
        street: '$1090',
        tag: 'BV9897',
        openLead: 'DNJD3',
        openDeal: 'Eye Icon'
      }
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

export default LeadTable;

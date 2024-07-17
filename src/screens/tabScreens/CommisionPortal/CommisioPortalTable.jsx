// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { Table } from "lucide-react";
import ReusableTable from "../../../common/tables/Table";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CommisionPortalTable = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company name',
        accessor: 'compName',
      },
      {
        Header: 'Customer name',
        accessor: 'custName',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Lead tag',
        accessor: 'lTag',
      },
      {
        Header: 'Funded amount',
        accessor: 'fAmount',
      },
      
    ],
    []
  );

  const data = React.useMemo(
    () => [
    {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
      },
      {
        compName:  'Apple',
        custName: 'Thomas Carefour',
        date: '15/10/2023',
        lTag: 'BV9000',
        fAmount: '$8.000'
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

  return (
    <div className="flex h-screen bg-black">
      <DashboardTab />
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col">
        <GoodMorningBar userName="Manish" />
        <div className="flex justify-between w-full mr-9 my-6">
        <div className="flex items-center">
          <div className="mt-3 ml-8 text-lender-green-text font-bold text-xl">
            My commisions
          </div>
        </div>
        <div onClick={() => navigate('/createCommision')} className="mt-3 mr-8 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
          Submit new form
        </div>
      </div>
        <div className="flex-grow overflow-y-auto mx-4 mb-5">
        <ReusableTable columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default CommisionPortalTable;

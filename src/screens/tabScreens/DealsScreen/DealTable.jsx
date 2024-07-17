// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { Table } from "lucide-react";
import ReusableTable from "../../../common/tables/Table";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChildNavigation from "../../../common/components/SecondaryNavigation/ChildNavigation/ChildNavigation";
import SecondaryNavigation from "../../../common/components/SecondaryNavigation/SecondaryNavigation";
import DealNavigation from "../../../common/components/SecondaryNavigation/DealNavigation/DealNavigation";

const DealTable = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const role = useSelector((state) => state.role);
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <div className="flex items-center space-x-2 px-2 py-1 bg-pending-background text-white rounded-2xl border w-28 ">
            <span className="h-2 w-2 bg-pendingText rounded-full"></span>
            <span className="text-pendingText">{value}</span>
          </div>
        ), 
      },
      {
        Header: 'Queue',
        accessor: 'queue',
        Cell: ({ value }) => (
          <div className="flex items-center space-x-2 px-2 py-1 font-semibold bg-operation-green text-white rounded-2xl border w-28 ">
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
        Cell: ({ value }) => <FiEye onClick={(() => {navigate('/dealtabs')})} alt="Open Deal" style={{ cursor:'pointer' ,  width: '20px', height: '20px' }} />, // Render the eye icon
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

  return (
    <div className="flex h-screen">
      { role== 'operations' ?  <div className="flex space-x-24 w-80">
  <SecondaryNavigation />
  <DealNavigation items={["All Deals", "Operations queue" , "Underwriting queue" , "Sequences Settings"]} label={'Deals'}/>
</div> :
      <DashboardTab />
}
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col">
        <GoodMorningBar userName="Manish" />
        <div className="flex-grow overflow-y-auto mx-4 mb-5">
        <ReusableTable columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default DealTable;

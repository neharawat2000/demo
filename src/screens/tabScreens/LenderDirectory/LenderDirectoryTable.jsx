// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { Table } from "lucide-react";
import ReusableTable from "../../../common/tables/Table";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LenderDirectoryTable = () => {
  const [selectedTab, setSelectedTab] = useState('Information');
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Tier',
        accessor: 'tier',
      },
      {
        Header: 'Lender',
        accessor: 'lender',
        Cell: ({ value }) => (
          <div>
            <div className="text-good-morning-text font-semibold">{value.company}/{value.ceoFirstName}</div>
            <div>{value.ceoMail}</div>
          </div>
        ),
      },
      {
        Header: 'Max Funding Amount',
        accessor: 'mfamount',
      },
      {
        Header: 'Monthly Minimums',
        accessor: 'mMinimums',
      },
      {
        Header: 'Daily',
        accessor: 'daily',
      },
      {
        Header: 'Weekly',
        accessor: 'weekly',
      },
      {
        Header: 'Bi-weekly/Monthly',
        accessor: 'biweaklyMonthly',
      },
      {
        Header: 'NSF',
        accessor: 'nsf',
      },
      {
        Header: 'Avg Daily Balance',
        accessor: 'adBalance',
      },
      {
        Header: 'Position Willing ',
        accessor: 'positionWilling',
        },
    ],
    []
  );

  const data = React.useMemo(
    () => [
    ,
    {
        tier: 'A',
        lender: {
            company: 'Apple',
            ceo: 'Jeff Bezoz',
            ceoFirstName: 'Jeff',
            ceoLastName: 'Bezoz',
            ceoMail: 'jeff@apple.com'
        },
        mfamount: '$250.000',
        mMinimums: '$25.000',
        daily: 'Yes',
        weekly:  'Yes',
        biweaklyMonthly: 'Yes',
        nsf: '1',
        adBalance: '$5.000',
        positionWilling: '1st'
      },
      {
        tier: 'A',
        lender: {
            company: 'Ford',
            ceo: 'Jeff Bezoz',
            ceoFirstName: 'Phoenix',
            ceoLastName: 'Bezoz',
            ceoMail: 'jeff@apple.com'
        },
        mfamount: '$250.000',
        mMinimums: '$25.000',
        daily: 'Yes',
        weekly:  'Yes',
        biweaklyMonthly: 'Yes',
        nsf: '1',
        adBalance: '$5.000',
        positionWilling: '1st'
      },
      {
        tier: 'A',
        lender: {
            company: 'Coke',
            ceo: 'Jeff Bezoz',
            ceoFirstName: 'Lana',
            ceoLastName: 'Bezoz',
            ceoMail: 'jeff@apple.com'
        },
        mfamount: '$250.000',
        mMinimums: '$25.000',
        daily: 'Yes',
        weekly:  'Yes',
        biweaklyMonthly: 'Yes',
        nsf: '1',
        adBalance: '$5.000',
        positionWilling: '1st'
      },
      {
        tier: 'A',
        lender: {
            company: 'Coke',
            ceo: 'Jeff Bezoz',
            ceoFirstName: 'Lana',
            ceoLastName: 'Bezoz',
            ceoMail: 'jeff@apple.com'
        },
        mfamount: '$250.000',
        mMinimums: '$25.000',
        daily: 'Yes',
        weekly:  'Yes',
        biweaklyMonthly: 'Yes',
        nsf: '1',
        adBalance: '$5.000',
        positionWilling: '1st'
      },
      {
        tier: 'B-C',
        lender: {
            company: 'Amazon',
            ceo: 'Jeff Bezoz',
            ceoFirstName: 'Demi',
            ceoLastName: 'Bezoz',
            ceoMail: 'demi@amazon.com'
        },
        mfamount: '$250.000',
        mMinimums: '$25.000',
        daily: 'Yes',
        weekly:  'Yes',
        biweaklyMonthly: 'Yes',
        nsf: '1',
        adBalance: '$5.000',
        positionWilling: '1st'
      },
      {
        tier: 'A',
        lender: {
            company: 'Coke',
            ceo: 'Jeff Bezoz',
            ceoFirstName: 'Lana',
            ceoLastName: 'Bezoz',
            ceoMail: 'jeff@apple.com'
        },
        mfamount: '$250.000',
        mMinimums: '$25.000',
        daily: 'Yes',
        weekly:  'Yes',
        biweaklyMonthly: 'Yes',
        nsf: '1',
        adBalance: '$5.000',
        positionWilling: '1st'
      }
      // Add more data as needed
    ],
    []
  );

  return (
    <div className="flex h-screen bg-black">
      <DashboardTab />
      <main className="flex-1 bg-background-color p-6 h-full flex flex-col">
        <GoodMorningBar userName="Manish" />
        <div className="flex justify-between w-full mr-9 my-6">
        <div className="flex items-center">
          <div className="mt-3 ml-8 text-lender-green-text font-bold text-xl">
            Lenders
          </div>
        </div>
        <div className="mt-3 mr-8 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
          Add new lender
        </div>
      </div>
        <div className="flex-grow overflow-y-auto mx-4 mb-5">
        <ReusableTable columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default LenderDirectoryTable;

// Dashboard.js
import React, { useState } from "react";
import '../../../common/components/Calender.css';
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";
import { Table } from "lucide-react";
import ReusableTable from "../../../common/tables/Table";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { LabeledDropdown, LabeledInput } from "../../../common/components/LeadComponent/CommonTextField";

const CommisionPortalForm = () => {
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
      <main className="flex-1 bg-background-color p-6 h-auto flex flex-col ">
        <GoodMorningBar userName="Manish" />
        <div className="flex justify-between w-full mr-9 my-6 ">
        
      </div>
        <div className="flex-grow  mx-2 mb-5 overflow-y-auto">
        <div className="bg-white rounded-lg py-5 px-7 h-auto pb-24">
        <div className="flex justify-between mb-6">
                <div className="text-xl font-bold text-lender-green-text">
                  Commision Form
                </div>
              </div>
              <div className="space-y-7 ">
                <div className="flex space-x-4">
                  <LabeledInput label={'Company Name'} placeholder={'Enter company name'} />
                  <LabeledInput label={'Date'} placeholder={'09/12/23'} />
                </div>
                <div className="flex space-x-4">
                  <LabeledInput label={'First Name'} placeholder={'Enter first name'} />
                  <LabeledInput label={'Last Name'} placeholder={'Enter last name'} />
                </div>
                <div className="flex space-x-4">
                  <LabeledInput label={'Phone Number '} placeholder={'9000000000'} />
                  <LabeledInput label={'Email'} placeholder={'example@gmail.com'} />
                </div>
                <div className="flex space-x-4">
                  <LabeledInput label={'Lead Tag'} placeholder={'Enter Lead Tag'} />
                  <LabeledInput label={'Funded amount'} placeholder={'Enter amount'} />
                </div>
                <div className="flex space-x-4">
                  <LabeledInput label={'Lender'} placeholder={'Enter Lender'} />
                  <LabeledDropdown 
            label={'Agent'} 
            options={[
              { value: '', label: 'John Cena' },
              // Add more options as needed
            ]}
          />
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

export default CommisionPortalForm;

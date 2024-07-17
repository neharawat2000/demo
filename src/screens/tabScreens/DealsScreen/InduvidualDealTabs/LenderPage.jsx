// src/components/LenderScreen.js
import React from 'react';
import ReusableTable from '../../../../common/tables/Table';
import LenderTable from '../../../../common/tables/LenderTable';
import { FaPencilAlt } from 'react-icons/fa';
import { LabeledInput } from '../../../../common/components/LeadComponent/CommonTextField';
import { useSelector } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";

const LenderPage = () => {
  const role = useSelector((state) => state.role);
  const columns = React.useMemo(
    () => [
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
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <div className={`flex items-center space-x-2 px-2 py-1 ${value === 'Decline' ? 'bg-declined-bgcolor' : value === 'Approved' ? 'bg-operation-green' : 'bg-pending-background'} text-white rounded-2xl border w-28`}>
            <span className={`h-2 w-2 ${value === 'Decline' ? 'bg-red-600' : value === 'Approved' ? 'bg-green-500' : 'bg-pendingText'} rounded-full`}></span>
            <span className={`${value === 'Decline' ? 'text-red-600' : value === 'Approved' ? 'text-approved-text' : 'text-pendingText'} font-semibold`}>{value}</span>
          </div>
        ),
      },
      {
        Header: 'Comments',
        accessor: 'comments',
      },
      {
        Header: 'Edit',
        accessor: 'edit',
        Cell: () => (
          <div className="flex ">
            <FaPencilAlt className="text-gray-600 cursor-pointer" />
          </div>
        ),
      },
    ],
    []
  );

  const filterLenderColumns = React.useMemo(
    () => [
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
        Header: 'Positions',
        accessor: 'positions',
      },
      {
        Header: 'Credit',
        accessor: 'credit',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Monthly min',
        accessor: 'monthlyMin',
      },
      {
        Header: 'Add lender to deal',
        accessor: 'edit',
        Cell: () => (
          <div className="flex ">
            <IoIosAddCircleOutline className="text-gray-600 cursor-pointer" size={30} />
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
        status: 'Pending',
        comments: 'This is Comment '
      },
      {
        lender: {
          company: 'Coke',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Lana',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
        status: 'Pending',
        comments: 'This is Comment 2'
      },
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
        status: 'Pending',
        comments: 'This is Comment '
      },
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
        status: 'Pending',
        comments: 'This is Comment '
      },
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
        status: 'Pending',
        comments: 'This is Comment '
      },
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
        status: 'Pending',
        comments: 'This is Comment '
      },
     
      // Add more data as needed
    ],
    []
  );

  const lenderData = React.useMemo(
    () => [
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
      positions: '2',
        credit: '610',
        amount: '$10.000',
        monthlyMin: '$25.000'
      },
      {
        lender: {
          company: 'Coke',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Lana',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
      positions: '2',
        credit: '680',
        amount: '$10.000',
        monthlyMin: '$25.000'
      },
      {
        lender: {
          company: 'Amazon',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Demi',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
      positions: '2',
        credit: '700',
        amount: '$10.000',
        monthlyMin: '$25.000'
      },
      {
        lender: {
          company: 'Apple',
          ceo: 'Jeff Bezoz',
          ceoFirstName: 'Jeff',
          ceoLastName: 'Bezoz',
          ceoMail: 'jeff@apple.com'
      },
      positions: '2',
        credit: '740',
        amount: '$10.000',
        monthlyMin: '$25.000'
      },
      
     
      // Add more data as needed
    ],
    []
  );

  return (
    <div className=" my-5 rounded-lg  ml-1 ">
      {role == 'operations' ?
      <div>
       <div className="bg-white rounded-lg py-5 px-7 h-full">
                <div className="text-lg mb-6 font-semibold text-good-morning-text">
                  Filter lenders
               
              </div>
              <div className="space-y-7">
                <div className="flex space-x-4">
                  <LabeledInput label={'Positions'} placeholder={'Enter Positions'} />
                  <LabeledInput label={'Credit'} placeholder={'Enter credit'} />
                  <LabeledInput label={'Amount'} placeholder={'Enter Amount'} />
                  <LabeledInput label={'Monthly Minimum'} placeholder={'Enter monthly minimum '} />
                </div>
              </div>
              
            </div> 
            {/* <div className="h-96 "> */}
        <LenderTable columns={filterLenderColumns} data={lenderData} />
      {/* </div> */}
            </div> : null
   }
      <div className="bg-white flex justify-between w-full mr-14 my-6 py-5">
        <div className="flex items-center">
          <div className="ml-8 text-good-morning-text font-bold text-xl">
            Lenders
          </div>
        </div>
        <div className="mt-3 mr-8 h-9 px-14 py-1 rounded-lg text-white bg-custom-green font-semibold cursor-pointer">
          Add new lender
        </div>
      </div>
      <div className="h-96 ">
        <LenderTable columns={columns} data={data} />
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default LenderPage;

import React from "react";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";

const LeadGridSquare = ({ leads }) => {
  const role = useSelector((state) => state.role);
  return (
    <div className="flex-grow flex flex-col ">
      <div className={`grid ${role == 'admin' ?  'grid-cols-3' : 'grid-cols-2'  } :  gap-x-[7%] gap-y-7 p-4`}>
        {leads.map((lead, index) => (
          <div key={index} className={`relative bg-declined-bgcolor rounded-lg shadow p-2 ${role == 'admin' ?'w-80' : 'w-72' } pl-12 py-3 flex flex-col items-start`}>
            <MdCancel color="red" size={26} className="absolute top-3 left-2 rounded-full" />
            <div className="text-lg font-semibold text-red-600">{lead.comName}</div>
            <div className="text-sm  font-semibold text-red-600">{lead.firstname}</div>
            <div className="text-sm  font-semibold text-red-600">{lead.lastname}</div>
            <div className="text-sm  font-semibold text-red-600">{lead.email}</div>
            <div className="text-sm  font-semibold text-red-600">{lead.phone}</div>
            <div className="text-sm  font-semibold text-red-600">{'$'  +  lead.contractAmount}</div>
            <div className="text-sm  font-semibold text-red-600">{'$'  + lead.paymentAmount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadGridSquare;

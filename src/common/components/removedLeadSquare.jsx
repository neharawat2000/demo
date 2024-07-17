import React from "react";
import { MdCancel } from "react-icons/md";

const RemovedLeadGridSquare = ({ leads }) => {
  return (
    <div className="flex-grow flex flex-col ">
      <div className="grid grid-cols-2 gap-x-[10%] gap-y-7 p-4 ">
        {leads.map((lead, index) => (
          <div key={index} className="relative bg-pending-background rounded-lg shadow p-2 w-72 pl-12 py-3 flex flex-col items-start">
             <span className="h-2 w-2 bg-pendingText rounded-full absolute top-5 left-5"></span>
            <div className="text-lg font-semibold text-pendingText">{lead.comName}</div>
            <div className="text-sm  font-semibold text-pendingText">{lead.firstname}</div>
            <div className="text-sm  font-semibold text-pendingText">{lead.lastname}</div>
            <div className="text-sm  font-semibold text-pendingText">{lead.email}</div>
            <div className="text-sm  font-semibold text-pendingText">{lead.phone}</div>
            <div className="text-sm  font-semibold text-pendingText">{'$'  +  lead.contractAmount}</div>
            <div className="text-sm  font-semibold text-pendingText">{'$'  + lead.paymentAmount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemovedLeadGridSquare;

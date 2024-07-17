// Dashboard.js
import React, { useState } from "react";
import DashboardTab from "../../../common/components/DashboardTab/DashboardTabs";
import GoodMorningBar from "../../../common/components/GoodmorningBar";

const BusinessAnalytics = () => {
    
  return (
    <div className="flex h-screen bg-black">
      <DashboardTab />
      <main className="flex-1 bg-background-color p-6 h-auto flex flex-col">
        <GoodMorningBar userName="Manish" />
      
     
    </main>
    </div>
  );
};

export default BusinessAnalytics;

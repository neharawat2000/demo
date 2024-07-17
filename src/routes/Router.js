import React from 'react';
import {Route, Routes,} from 'react-router-dom';
import LoginPage from '../auth/Login';
import IndividualDeal from '../screens/tabScreens/DealsScreen/IndividualDeal';
import Dashboard from '../screens/tabScreens/DashboardScreen';
import LenderPage from '../screens/tabScreens/DealsScreen/InduvidualDealTabs/LenderPage';
import LeadTable from '../screens/tabScreens/LeadScreen/LeadTable';
import LeadScreen from '../screens/tabScreens/LeadScreen/LeadScreen';
import DealTable from '../screens/tabScreens/DealsScreen/DealTable';
import SubmissionTable from '../screens/tabScreens/SubmissionBoard/SubmissionTable';
import LenderDirectoryTable from '../screens/tabScreens/LenderDirectory/LenderDirectoryTable';
import CommisionPortalTable from '../screens/tabScreens/CommisionPortal/CommisioPortalTable';
import Compliance from '../screens/tabScreens/Compliance/Compliance';
import CommisionPortalForm from '../screens/tabScreens/CommisionPortal/CommisionPortalForm';
import AccountSettings from '../screens/tabScreens/Settings/Account Settings';
import ComplianceSettings from '../screens/tabScreens/Settings/ComplianceSetting';
import EmailTemplateSettings from '../screens/tabScreens/Settings/EmailTemplateSettings';
import SequenceSettings from '../screens/tabScreens/Settings/SequencesSettings';
import BusinessAnalytics from '../screens/AdminScreens/BusinessAnalytics/BusinessAnalytics';

export default function Router() {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/leads" element={<LeadTable />} />
    <Route path="/leadstabs" element={<LeadScreen />} />
    <Route path="/deals" element={<DealTable />} />
    <Route path="/dealtabs" element={<IndividualDeal />} />
    <Route path="/submission-board" element={<SubmissionTable/>} />
    <Route path="/commision-portal" element={<CommisionPortalTable/>} />
    <Route path="/lender-directory" element={<LenderDirectoryTable/>} />
    <Route path="/compliance" element={<Compliance/>} />
    <Route path="/createCommision" element={<CommisionPortalForm/>} />
    <Route path="/settings" element={<AccountSettings/>} />
    <Route path="/account-settings" element={<AccountSettings/>} />
    <Route path="/compliance-settings" element={<ComplianceSettings/>} />
    <Route path="/email-templates settings" element={<EmailTemplateSettings/>} />
    <Route path="/sequences-settings" element={<SequenceSettings/>} />
    <Route path="/business-analytics" element={<BusinessAnalytics/>} />
    </Routes>
  )
}

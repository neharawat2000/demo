import React, { useEffect } from 'react';
import './DashboardTabs.css';
import { MdOutlineDashboard } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { TiFolderDelete } from "react-icons/ti";
import { TbBasketDollar } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import Logo from "../../../data/Group 553.png";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from '../../../redux/action';
import { useNavigate } from 'react-router-dom';
import { BsGraphDown } from "react-icons/bs";


const iconMapping = {
  'Dashboard': MdOutlineDashboard,
  'Business Analytics' : BsGraphDown,
  'Leads': LiaNotesMedicalSolid,
  'Deals': GrNotes,
  'Submission Board': LiaNotesMedicalSolid,
  'Lender directory': CgNotes,
  'Compliance': TiFolderDelete,
  'Commision portal': TbBasketDollar,
  'Settings': IoSettingsOutline,
  'Logout': VscSignOut,
};

const DashboardTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSelected = useSelector(state => state.selectedTab);
  const role = useSelector((state) => state.role);
  const items = (role == 'operations') ? 
 ( [
    "Dashboard",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ])
  :   (role == 'admin') ? 
  ( [
     "Business Analytics",
     "Leads",
     "Submission Board",
     "Lender directory",
     "Compliance",
     "Commision portal"
   ])
   :  ([
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ]);

  const bottomItems = ["Settings", "Logout"];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('-', ' ');
      if (hash) {
        const capitalizedHash = hash.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        dispatch(setSelectedTab(capitalizedHash));
      } else {
        dispatch(setSelectedTab('Dashboard'));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [dispatch]);

  const handleSelect = (item) => {
    const formattedItem = item.toLowerCase().replace(' ', '-');
    navigate(`/${formattedItem}`, { replace: true });
    dispatch(setSelectedTab(item));
  };

  return (
    <div className="w-[278px] bg-custom-green text-white">
      <div className="dashboard-sidebar fixed">
        <img
          src={Logo}
          alt="Background"
          className="ml-11 h-full w-36 mt-3"
        />
        <div className="menuuu cursor-pointer">
          {items.map((item, index) => {
            const IconComponent = iconMapping[item];
            const isSelected = currentSelected === item;
            return (
              <a
                key={index}
                className={`menuuu-item ${isSelected ? 'selected text-black bg-background-color' : ''}`}
                style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', paddingInline: '30px' }}
                id={item.toLowerCase().replace(' ', '-')}
                onClick={() => handleSelect(item)}>
                <IconComponent size={24} />
                <span style={{ fontSize: 13, marginLeft: '16px' }}>
                  {item}
                </span>
              </a>
            );
          })}
        </div>
        <div className="absolute bottom-0 menuuu cursor-pointer">
          {bottomItems.map((item, index) => {
            const IconComponent = iconMapping[item];
            const isSelected = currentSelected === item;
            return (
              <a
                key={index}
                className={`menuuu-item ${isSelected ? 'selected text-black bg-background-color' : ''}`}
                style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', paddingInline: '30px' }}
                id={item.toLowerCase().replace(' ', '-')}
                onClick={() => handleSelect(item)}>
                <IconComponent size={24} />
                <span style={{ fontSize: 13, marginLeft: '16px' }}>
                  {item}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;

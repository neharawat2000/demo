import React, { useEffect, useState } from 'react';
import './SecondaryNavigation.css';
import { MdOutlineDashboard } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { TiFolderDelete } from "react-icons/ti";
import { TbBasketDollar } from "react-icons/tb";
import ChildNavigation from './ChildNavigation/ChildNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from '../../../redux/action';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../../../data/favicon.ico"
import { IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";

const iconMapping = {
  'Dashboard': MdOutlineDashboard,
  'Leads': LiaNotesMedicalSolid,
  'Deals': GrNotes,
  'Submission Board': LiaNotesMedicalSolid,
  'Lender directory': CgNotes,
  'Compliance': TiFolderDelete,
  'Commision portal': TbBasketDollar,
  'Settings': IoSettingsOutline,
  'Logout': VscSignOut,
};



const bottomItems = ["Settings", "Logout"];

const SecondaryNavigation = (items) => {
  const role = useSelector((state) => state.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSelected = useSelector(state => state.selectedTab);

  const item = role == 'operations' ? 
  [
    "Dashboard",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ]
  :  [
    "Dashboard",
    "Leads",
    "Deals",
    "Submission Board",
    "Lender directory",
    "Compliance",
    "Commision portal"
  ];
 
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
    <div className='flex'>
      <nav className= {"w-24 bg-custom-green text-white"}>
          <div className="flex">
          <div className="p-4">
        <img
          src={Logo2}
          alt="Background"
          className="ml-2 object-cover h-12  mt-3"
        />
    <div className="Secmenuuu cursor-pointer">
      {item.map((item, index) => {
        const IconComponent = iconMapping[item];
        const isSelected = currentSelected === item;
        return (
          <a
            key={index}
            className={`Secmenuuu-item ${isSelected ? 'selected text-black bg-background-color' : ''}`}
            style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' , paddingLeft: 20 }}
            id={item.toLowerCase().replace(' ', '-')}
            onClick={() => handleSelect(item)}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
    <div className="absolute top-[80%] Secmenuuu cursor-pointer">
          {bottomItems.map((item, index) => {
            const IconComponent = iconMapping[item];
            const isSelected = currentSelected === item;
            return (
              <a
                key={index}
                className={`Secmenuuu-item ${isSelected ? 'selected text-black bg-background-color' : ''}`}
                style={{ display: 'flex', justifyContent: 'start', alignItems: 'center',paddingLeft: 20 }}
                id={item.toLowerCase().replace(' ', '-')}
                onClick={() => handleSelect(item)}>
                <IconComponent size={24} />
               
              </a>
            );
          })}
        </div>
    </div>
    </div>
    </nav>
    {/* <ChildNavigation
            items={ [
                "All Leads",
                "My Leads"]}
            selected={selected}
            onSelect={handleSelect}
          /> */}
    </div>
  );
};

export default SecondaryNavigation;

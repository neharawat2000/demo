import React, { useEffect, useState } from 'react';
import '../ChildNavigation/ChildNavigation.css';
import { MdOutlineDashboard } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';


const DealNavigation = ({ items, label, onSelect }) => {

  const navigate = useNavigate();
  const [currentSelected, setCurrentSelected] = useState(() => {
    const hash = window.location.hash.replace('#', '').replace('-', ' ');
    if (hash) {
      return hash.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } else {
      return items[0]; // Select the first item by default
    }
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('-', ' ');
      if (hash) {
        const capitalizedHash = hash.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        navigate(`/${capitalizedHash}`)
        console.log('Capitalized Hash --- ' +  capitalizedHash);
      } else {
        setCurrentSelected(items[0]); // Select the first item if no hash is present
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [items]);

  const handleSelect = (item) => {
    setCurrentSelected(item);
    // const formattedItem = item.toLowerCase().replace(' ', '-');
    // console.log('Formatted Item --- ' , formattedItem)
    // navigate(`/${formattedItem}`);
  };

  return (
    <div className="Childmenuuu cursor-pointer pt-20 pl-1">
      <div className="text-white pl-3 font-semibold text-xl">
        {label}
      </div>
      {items.map((item, index) => {
        // const IconComponent = iconMapping[item];
        const isSelected = currentSelected === item;
        return (
          <a
            key={index}
            className={`Childmenuuu-item ${isSelected ? 'selected text-black bg-background-color' : ''}`}
            style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', paddingInline: '30px' }}
            id={item.toLowerCase().replace(' ', '-')}
            onClick={() => handleSelect(item)}
          >
            {/* <IconComponent size={24} /> */}
            <span style={{ fontSize: 13, marginLeft: '16px' }}>
              {item}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default DealNavigation; // Ensure export default is used correctly

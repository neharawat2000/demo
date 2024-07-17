import React from 'react';
import './authTab.css'

const AuthTab =({ items, selected, onSelect }) => {
    return (
        <div className="menu ">
        {items.map((item, index) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={index}
            id={item.toLowerCase()}
            className={`menu-item ${
              selected === item ? 'selected text-black bg-background-color' : ''
            }`}
            onClick={() => onSelect(item)}
          >
            {item}
          </a>
        ))}
      </div>
    );
  };
  

export default AuthTab;

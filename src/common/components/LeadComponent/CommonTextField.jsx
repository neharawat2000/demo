import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAdd } from "react-icons/md";

export const LabeledInput = ({ label, placeholder }) => {
    return (
      <div className="w-full px-2">
        <div className="text-good-morning-text font-semibold">{label}</div>
        <input placeholder={placeholder} className="border border-2 border-gray-300  rounded-lg px-6 py-2 mt-2 w-full h-12" type="text" />
      </div>
    );
  };

  export const LabeledDropdown = ({ label, options }) => {
    return (
      <div className="w-full px-2">
        <div className="text-good-morning-text font-semibold">{label}</div>
        <div className="relative mt-2">
          <select className="border border-2 border-gray-300 rounded-lg px-6 py-2 w-full h-12 appearance-none pr-10 bg-white text-gray-700 focus:bg-blue-50 focus:text-blue-700">
            {options.map((option, index) => (
              <option key={index} value={option.value} className="text-gray-700 bg-white hover:bg-gray-200">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  };

  export const LabeledInputIcons = ({ label, placeholder , iconName }) => {
    return (
      <div className="w-full px-2">
        <div className="text-good-morning-text font-semibold">{label}</div>
        <div className='flex w-full items-center'>
        <div className="flex items-center mt-2 border border-2 border-gray-300 rounded-lg h-12 w-full ">
          <input
            // placeholder={placeholder}
            className="px-6 py-2 w-full h-full rounded-lg outline-none bg-gray-100"
            type="text"
          />
        </div>
        {
          iconName == 'delete' ?  <RiDeleteBinLine className="ml-4 text-gray-500" size={22} />: 
        <div className="ml-4 bg-custom-green text-white rounded-full flex items-center content-center justify-center w-9 h-8">
        <MdAdd  className="text-white" size={22} />
        </div>
         }
        </div>
      </div>
    );
  };
  
  
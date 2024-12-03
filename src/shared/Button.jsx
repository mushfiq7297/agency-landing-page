import React from "react";

const Button = ({ text, Icon }) => {
  return (
    <a href="#_" className="relative inline-block text-md group">
      <span className="relative z-10 flex gap-2 px-5 py-3 overflow-hidden font-medium leading-tight text-gray-900 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#f79426] group-hover:-rotate-180 ease"></span>
        {Icon && <Icon className="relative w-5 h-5 text-gray-900 group-hover:text-white" />}
        <span className="relative">{text}</span>
      </span>
      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#f79426] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
  );
};

export default Button;

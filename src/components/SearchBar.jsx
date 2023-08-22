import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-[3px]">
      <input type="text" name="" id="" 
      className="flex-grow border-none outline-none bg-transparent" />

      <i className="text-primary-color fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;

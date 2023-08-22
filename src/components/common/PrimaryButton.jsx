import React from "react";
import classNames from "classnames";

const PrimaryButton = ({ children, className, onClick, ...rest }) => {
  return (
    <div
      className={classNames(
        "min-w-[150px] text-center inline-block px-5 py-2 rounded-full  transition-all duration-300 bg-primary-color text-white border-2 border-primary-color font-semibold",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;

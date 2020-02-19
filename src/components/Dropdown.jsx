import React from "react";
import { useShow, useCloseDropDown } from "../hooks";

const Dropdown = () => {
  const { isShown, toggle } = useShow();
  useCloseDropDown(isShown, toggle);

  return (
    <div className="relative px-4 py-5 sm:py-0 sm:px-0 sm:ml-4">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full mr-3 border-2 border-gray-600 xl:border-gray-300 sm:h-8 sm:w-8"
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
          alt="avatar"
          onClick={toggle}
        />
        <span className="text-gray-200 font-semibold  sm:hidden">
          Mourad Aouinat
        </span>
      </div>
      <div className={isShown ? "" : "sm:hidden"}>
        <button
          type="button"
          onClick={toggle}
          className="sm:fixed sm:opacity-0 sm:inset-0 sm:cursor-default sm:h-full sm:w-full hidden sm:block sm:z-30"
        ></button>
        <div className="mt-4 sm:mr-4 sm:mt-3 sm:bg-white sm:rounded-lg sm:absolute sm:right-0 sm:w-48 sm:shadow-xl sm:py-2 sm:z-40 xl:border">
          <a
            href="/#"
            className="text-gray-400 hover:text-white font-semibold block sm:text-gray-800 sm:px-4 sm:m-0 sm:py-2 hover:bg-indigo-500 hover:text-white"
          >
            Account Settings
          </a>
          <a
            href="/#"
            className="text-gray-400 hover:text-white font-semibold block mt-3 sm:text-gray-800 sm:px-4 sm:m-0 sm:py-2 hover:bg-indigo-500 hover:text-white"
          >
            Support
          </a>
          <a
            href="/#"
            className="text-gray-400 hover:text-white font-semibold block mt-3 sm:text-gray-800 sm:px-4 sm:m-0 sm:py-2 hover:bg-indigo-500 hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

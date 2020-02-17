import React from "react";
import { ReactComponent as Search } from "../../assets/search.svg";

const Navigation = ({ isShown }) => {
  return (
    <nav
      className={`sm:flex sm:items-center xl:flex-1 xl:justify-between ${
        isShown ? "hidden" : "block"
      }`}
    >
      <div className="hidden xl:block xl:ml-6">
        <div className="relative w-full max-w-xs">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Search className="h-5 w-5 fill-current text-gray-600" />
          </div>
          <input
            className="block w-full bg-gray-200 text-white xl:text-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 rounded-lg py-2 pl-8 pr-4"
            placeholder="Search by keywords"
          />
        </div>
      </div>

      <div className="sm:flex sm:items-center">
        <div className="px-4 pt-3 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
          <a
            href="/#"
            className="block px-3 sm:px-2 py-1 leading-tight  font-semibold text-white xl:text-gray-900"
          >
            List your property
          </a>
          <a
            href="/#"
            className="block sm:mt-0 mt-1 px-3 sm:px-2 py-1  leading-tight font-semibold text-white xl:text-gray-900"
          >
            Trips
          </a>
          <a
            href="/#"
            className="block sm:mt-0 mt-1 px-3 sm:px-2 py-1  leading-tight font-semibold text-white xl:text-gray-900"
          >
            Messages
          </a>
        </div>
        <div className="px-4 py-5 sm:py-0 sm:px-0 sm:ml-4">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full mr-3 border-2 border-gray-600 xl:border-gray-300 sm:h-8 sm:w-8"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
              alt="avatar"
            />
            <span className="text-gray-200 font-semibold  sm:hidden">
              Mourad Aouinat
            </span>
          </div>
          <div className="mt-4  sm:hidden">
            <a
              href="/#"
              className="text-gray-400 hover:text-white font-semibold block"
            >
              Account Settings
            </a>
            <a
              href="/#"
              className="text-gray-400 hover:text-white font-semibold block mt-3"
            >
              Support
            </a>
            <a
              href="/#"
              className="text-gray-400 hover:text-white font-semibold block mt-3"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";

const Navigation = ({ isShown }) => {
  return (
    <nav className={`sm:flex sm:items-center ${isShown ? "hidden" : "block"}`}>
      <div className="px-4 pt-3 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
        <a
          href="/#"
          className="block px-3 sm:px-2 py-1 leading-tight  font-semibold text-white"
        >
          List your property
        </a>
        <a
          href="/#"
          className="block sm:mt-0 mt-1 px-3 sm:px-2 py-1  leading-tight font-semibold text-white"
        >
          Trips
        </a>
        <a
          href="/#"
          className="block sm:mt-0 mt-1 px-3 sm:px-2 py-1  leading-tight font-semibold text-white"
        >
          Messages
        </a>
      </div>
      <div className="px-4 py-5 sm:py-0 sm:px-0 sm:ml-4">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full mr-3 border-2 border-gray-600 sm:h-8 sm:w-8"
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
    </nav>
  );
};

export default Navigation;

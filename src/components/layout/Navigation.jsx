import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className="px-4 pt-3 pb-5 border-b border-gray-800">
        <a href="/#" className="block leading-tight  font-semibold text-white">
          List your property
        </a>
        <a
          href="/#"
          className="block mt-4  leading-tight font-semibold text-white"
        >
          Trips
        </a>
        <a
          href="/#"
          className="block mt-4  leading-tight font-semibold text-white"
        >
          Messages
        </a>
      </div>
      <div className="px-4 py-5">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full mr-3 border-2 border-gray-600"
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
            alt="avatar"
          />
          <span className="text-gray-200 font-semibold">Mourad Aouinat</span>
        </div>
        <div className="mt-4">
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

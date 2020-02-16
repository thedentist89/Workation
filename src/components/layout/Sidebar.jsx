import React from "react";
import { useShow } from "../../hooks";
import SearchFilter from "../SearchFilter";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Filter } from "../../assets/filter.svg";

const SideBar = () => {
  const { isShown, toggle } = useShow();

  return (
    <section className="bg-gray-800 ">
      <div className="px-4 py-3 flex justify-between">
        <div className="relative w-full max-w-xs">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Search className="h-5 w-5 fill-current text-gray-600" />
          </div>
          <input
            className="block w-full bg-gray-900 text-white focus:outline-none focus:bg-white focus:text-gray-900 rounded-lg py-2 pl-8 pr-4"
            placeholder="Search by keywords"
          />
        </div>
        <button
          className="ml-4 inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-600 rounded-lg shadow pr-4 pl-3"
          onClick={toggle}
        >
          <Filter className="h-6 w-6 fill-current text-gray-500 mr-2" />
          <span className="text-white font-medium">Filters</span>
        </button>
      </div>
      {isShown && <SearchFilter />}
    </section>
  );
};

export default SideBar;

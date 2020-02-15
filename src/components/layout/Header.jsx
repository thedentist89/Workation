import React from "react";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-900 px-4 py-3">
      <div>
        <Logo className="h-8 w-auto" />
      </div>
      <div className="flex">
        <button className="">
          <Burger className="h-6 w-6 fill-current text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;

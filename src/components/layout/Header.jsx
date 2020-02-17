import React from "react";
import { useShow } from "../../hooks";
import Navigation from "./Navigation";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Exit } from "../../assets/exit.svg";

const Header = () => {
  const { isShown, toggle } = useShow();

  return (
    <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:flex-shrink-0 xl:bg-white">
      <div className="flex justify-between xl:justify-center px-4 py-3 xl:py-5 xl:w-72 xl:bg-gray-900">
        <div>
          <Logo className="h-8 w-auto" />
        </div>
        <div className="flex sm:hidden">
          <button
            onClick={toggle}
            type="button"
            className="px-2 text-gray-500 focus:outline-none"
          >
            {isShown ? (
              <Burger className="h-6 w-6 fill-current" />
            ) : (
              <Exit className="h-6 w-6 fill-current" />
            )}
          </button>
        </div>
      </div>
      <Navigation isShown={isShown} />
    </header>
  );
};

export default Header;

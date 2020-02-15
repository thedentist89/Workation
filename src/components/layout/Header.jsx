import React from "react";
import { useShow } from "../../hooks";
import Navigation from "./Navigation";
import { ReactComponent as Burger } from "../../assets/burger.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Exit } from "../../assets/exit.svg";

const Header = () => {
  const { isShown, toggle } = useShow();

  return (
    <header className="bg-gray-900">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <Logo className="h-8 w-auto" />
        </div>
        <div className="flex">
          <button
            onClick={toggle}
            type="button"
            className="px-2 text-gray-500 focus:outline-none"
          >
            {isShown ? (
              <Exit className="h-6 w-6 fill-current" />
            ) : (
              <Burger className="h-6 w-6 fill-current" />
            )}
          </button>
        </div>
      </div>
      {isShown && <Navigation />}
    </header>
  );
};

export default Header;

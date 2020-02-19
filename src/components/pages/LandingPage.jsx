import React from "react";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import hero from "../../assets/beach-work.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-8 py-12 max-w-xl mx-auto lg:max-w-full lg:px-0 lg:relative lg:min-h-screen">
        <div className="lg:w-7/12 lg:pl-12 lg:pr-8 lg:py-12">
          <Logo className="h-10 w-auto " />
          <img
            className="mt-8 rounded-lg shadow-xl sm:h-56 w-full object-cover object-center lg:object-left lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:h-full lg:m-0 lg:rounded-none lg:shadow-none"
            src={hero}
            alt="woman workationing on beach"
          />
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:h-full">
            <svg
              className="hidden lg:block w-32 h-full -ml-1"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <polygon
                className="text-gray-100"
                fill="currentColor"
                points="0,0 0,100, 100,0"
              />
            </svg>
          </div>
          <h1 className="mt-8 text-3xl font-bold text-gray-900 leading-tight sm:text-4xl lg:mt-12">
            You can work from anywhere. <br className="hidden sm:inline" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you’re not on
            vacation.
          </p>
          <Link
            to="/home"
            className="mt-6 bg-indigo-500 inline-block text-white uppercase font-semibold shadow-lg tracking-wide py-3 px-5 rounded-lg hover:bg-indigo-400"
          >
            book your escape
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

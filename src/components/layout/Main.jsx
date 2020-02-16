import React from "react";
import Listings from "../Listings";

const Main = () => {
  return (
    <main className="bg-gray-200 py-6 px-4 sm:px-0">
      <div className="sm:px-4">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600">
          Live like the stars in these luxurious Southern Califorrnia estates.
        </p>
      </div>
      <div className="sm:flex sm:overflow-x-scroll pb-8 sm:px-4">
        <Listings />
        <Listings />
        <Listings />
        <Listings />
      </div>
    </main>
  );
};

export default Main;

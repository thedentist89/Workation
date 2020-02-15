import React from "react";
import Listings from "../Listings";

const Main = () => {
  return (
    <main className="bg-gray-200 px-4 py-6">
      <h3 className="text-gray-900 text-xl">Los Angeles</h3>
      <p className="text-gray-600">
        Live like the stars in these luxurious Southern Califorrnia estates.
      </p>
      <Listings />
    </main>
  );
};

export default Main;

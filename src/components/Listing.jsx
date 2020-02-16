import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";

const Listing = () => {
  return (
    <div className="mt-6">
      <div className="relative pb-5/6">
        <img
          className="absolute inset-0 h-full object-cover rounded-lg shadow-md h-64"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Villa"
        />
      </div>
      <div className="px-4 -mt-16 relative">
        <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
          <div className="flex">
            <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs">
              Plus
            </span>
            <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
              3 beds &bull; 2 baths
            </div>
          </div>
          <h4 className="my-1 text-gray-900 font-semibold text-lg">
            Modern home in city center
          </h4>
          <div>
            <span className="text-gray-900">$1,400</span>
            <span className="ml-1 text-sm text-gray-600">/wk</span>
          </div>
          <div className="text-gray-600 text-sm flex items-center mt-1">
            <Star className="text-teal-500 fill-current h-4 w-4 mr-1" />
            <Star className="text-teal-500 fill-current h-4 w-4 mr-1" />
            <Star className="text-teal-500 fill-current h-4 w-4 mr-1" />
            <Star className="text-teal-500 fill-current h-4 w-4 mr-1" />
            <Star className="text-teal-500 fill-current h-4 w-4 mr-1" />
            <span className="ml-2">34 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

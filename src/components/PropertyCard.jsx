import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";
import { range } from "lodash";

const PropertyCard = ({ property }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <div className="sm:max-w-sm sm:w-full sm:flex-shrink-0 sm:px-2">
      <div className="mt-6">
        <div className="relative pb-5/6">
          <img
            className="absolute inset-0 h-full object-cover rounded-lg shadow-md h-64"
            src={property.imgUrl}
            alt={property.title}
          />
        </div>
        <div className="px-4 -mt-16 relative">
          <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
            <div className="flex">
              <span className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs">
                Plus
              </span>
              <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                {property.beds} {property.beds > 1 ? "beds" : "bed"} &bull;{" "}
                {property.baths} {property.baths > 1 ? "baths" : "bath"}
              </div>
            </div>
            <h4 className="my-1 text-gray-900 font-semibold text-lg">
              {property.title}
            </h4>
            <div>
              <span className="text-gray-900">
                {formatter.format(property.rent)}
              </span>
              <span className="ml-1 text-sm text-gray-600">/wk</span>
            </div>
            <div className="text-gray-600 text-sm flex items-center mt-1">
              {range(5).map(star => (
                <Star
                  key={star}
                  className={`${
                    star < property.stars ? "text-teal-500" : "text-gray-400"
                  } fill-current h-4 w-4 mr-1`}
                />
              ))}
              <span className="ml-2">{property.reviews} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

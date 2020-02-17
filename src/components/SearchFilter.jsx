import React from "react";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

const SearchFilter = ({ isShown }) => {
  return (
    <form className="xl:flex xl:flex-col xl:justify-between xl:h-full xl:w-72">
      <div
        className={`${
          isShown ? "lg:flex" : "hidden"
        } xl:flex-col xl:flex xl:overflow-y-auto`}
      >
        <div className="px-4 py-4 border-t border-gray-900 sm:flex lg:block lg:w-2/3 lg:border-r lg:border-gray-900 xl:border-0 xl:w-full">
          <div className="flex -mx-2 sm:w-1/2 sm:mx-0 lg:w-full">
            <div className="w-1/2 px-2">
              <label
                htmlFor="bedrooms"
                className="block text-gray-500 text-small font-semibold"
              >
                Bedrooms
              </label>
              <select
                className="form-select w-full mt-1"
                name="bedrooms"
                id="bedrooms"
              >
                <option>4</option>
              </select>
            </div>
            <div className="w-1/2 px-2">
              <label
                htmlFor="bathrooms"
                className="block text-gray-500 text-small font-semibold"
              >
                Bathrooms
              </label>
              <select
                className="form-select w-full mt-1"
                name="bathrooms"
                id="bathrooms"
              >
                <option>2</option>
              </select>
            </div>
          </div>
          <div className="mt-4 sm:w-1/2 sm:mt-0 sm:px-2 lg:w-full lg:mt-4">
            <label
              htmlFor="price"
              className="block text-gray-500 text-small font-semibold"
            >
              Price Range
            </label>
            <select className="form-select w-full mt-1" name="price" id="price">
              <option>Up to $2000 /wk</option>
            </select>
          </div>
        </div>
        <div className="px-4 py-4 border-t border-gray-900 lg:w-2/3 lg:border-r lg:border-gray-900 xl:border-t xl:border-r-0 xl:border-gray-900 xl:w-full">
          <span className="block text-gray-500 text-small font-semibold">
            Property Type
          </span>
          <div className="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <RadioButton label="House" value="house" />
            <RadioButton label="Apartment" value="apartement" />
            <RadioButton label="Loft" value="loft" />
            <RadioButton label="Townhouse" value="townhouse" />
          </div>
        </div>
        <div className="px-4 py-4 border-t border-gray-900 lg:w-auto">
          <span className="block text-gray-500 text-small font-semibold">
            Amenities
          </span>
          <div className="sm:flex sm:-mx-2 sm:flex-wrap xl:flex-col">
            <Checkbox name="balcony" label="Balcony" />
            <Checkbox name="airConditioning" label="AC" />
            <Checkbox name="pool" label="Pool" />
            <Checkbox name="beach" label="Beach" />
            <Checkbox name="petFriendly" label="Pet Friendly" />
            <Checkbox name="kidFriendly" label="Kid Friendly" />
            <Checkbox name="parking" label="Parking" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 px-4 py-4 sm:text-right">
        <button
          type="button"
          className="sm:w-auto sm:inline-block block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:w-full"
        >
          Update results
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;

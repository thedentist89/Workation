import React from "react";

const SearchFilter = () => {
  return (
    <div>
      <fieldset className="px-4 py-4 border-t border-gray-900">
        <div className="flex -mx-2">
          <div className=" w-1/2 px-2">
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
          <div className=" w-1/2 px-2">
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
        <div className="mt-4">
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
      </fieldset>
      <fieldset className="px-4 py-4 border-t border-gray-900">
        <span className="block text-gray-500 text-small font-semibold">
          Property Type
        </span>
        <label className="mt-3 flex items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="propertyType"
            value="house"
          />
          <span className="ml-2 text-white">House</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="propertyType"
            value="apartment"
          />
          <span className="ml-2 text-white">Apartment</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="propertyType"
            value="loft"
          />
          <span className="ml-2 text-white">Loft</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="propertyType"
            value="townhouse"
          />
          <span className="ml-2 text-white">Townhouse</span>
        </label>
      </fieldset>
      <fieldset className="px-4 py-4 border-t border-gray-900">
        <span className="block text-gray-500 text-small font-semibold">
          Amenities
        </span>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="balcony"
          />
          <span className="ml-2 text-white">Balcony</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="airConditioning"
          />
          <span className="ml-2 text-white">Air conditioning</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="pool"
          />
          <span className="ml-2 text-white">Pool</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="beach"
          />
          <span className="ml-2 text-white">Beach</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="petFriendly"
          />
          <span className="ml-2 text-white">Pet friendly</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="kidFriendly"
          />
          <span className="ml-2 text-white">Kid friendly</span>
        </label>
        <label className="mt-3 flex items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="parking"
          />
          <span className="ml-2 text-white">Parking</span>
        </label>
      </fieldset>
      <div className="bg-gray-900 px-4 py-4">
        <button
          type="button"
          className="block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg"
        >
          Update results
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

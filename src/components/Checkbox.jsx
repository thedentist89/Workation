import React from "react";

const Checkbox = ({ label, name }) => {
  return (
    <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2">
      <input
        className="form-checkbox text-indigo-500"
        type="checkbox"
        name={name}
      />
      <span className="ml-2 text-white">{label}</span>
    </label>
  );
};

export default Checkbox;

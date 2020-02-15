import React from "react";

const RadioButton = ({ label, value }) => {
  return (
    <label className="mt-3 flex items-center">
      <input
        className="form-radio text-indigo-500"
        type="radio"
        name="propertyType"
        value={value}
      />
      <span className="ml-2 text-white">{label}</span>
    </label>
  );
};

export default RadioButton;

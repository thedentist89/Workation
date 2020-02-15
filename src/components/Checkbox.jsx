import React from "react";

const Checkbox = ({ label, name }) => {
  return (
    <label className="mt-3 flex items-center">
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

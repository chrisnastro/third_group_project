import React from 'react';

const SignupDropdown = ({ label, options, onChange, value }) => {
  return (
    <div>
      <select name={label.toLowerCase()} value={value} onChange={onChange}>
        <option value="">Select a {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );  
};

export default SignupDropdown;

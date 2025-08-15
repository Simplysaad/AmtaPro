import React from 'react';

const Select = ({ 
  label, 
  options = [], 
  error, 
  className = '', 
  required = false,
  placeholder = 'Select an option',
  ...props 
}) => {
  const selectClasses = `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C13E] focus:border-transparent transition-colors ${
    error ? 'border-red-500' : 'border-gray-300'
  } ${className}`;
  
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select className={selectClasses} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;
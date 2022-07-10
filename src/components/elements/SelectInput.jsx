import React, { useId } from 'react';

const SelectInput = ({ options, name, value, onChange, title }) => {
  const id = useId();

  return (
    <select
      className='block appearance-none w-full bg-transparent border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm'
      id='grid-state'
      onChange={onChange}
      name={name}
    >
      <option value=''>{title.toUpperCase()}</option>
      {options.map(({ name, value }) => (
        <option value={value} key={`${id}_${value}`}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;

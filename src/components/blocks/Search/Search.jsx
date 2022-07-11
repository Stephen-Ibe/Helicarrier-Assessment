import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearch }) => {
  return (
    <div className='flex items-center px-2 w-full border-2 '>
      <MdSearch size='20px' className='ml-2' />
      <input
        type='text'
        className='block py-2 pl-2 w-full focus:outline-none text-base placeholder:text-sm'
        placeholder='Search'
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;

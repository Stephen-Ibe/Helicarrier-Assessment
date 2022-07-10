import React from 'react';
import Filter from './components/blocks/Filter/Filter';
import Search from './components/blocks/Search/Search';
import { statusOptions, typeOptions } from './utils/elementOptions';

const App = () => {
  return (
    <div className=' mx-auto w-10/12 sm:w-6/12 h-screen pt-10'>
      <Search />
      <div className='filter flex flex-row my-7 space-x-4 overflow-x-auto sm:overflow-auto'>
        <Filter title='status' options={statusOptions} />
        <Filter title='type' options={typeOptions} />
      </div>
    </div>
  );
};

export default App;

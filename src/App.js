import { useQuery } from '@apollo/client';
import React from 'react';
import Filter from './components/blocks/Filter/Filter';
import History from './components/blocks/History';
import Search from './components/blocks/Search/Search';
import GET_HISTORIES from './graphQl/histories.queries';
import { statusOptions, typeOptions } from './utils/elementOptions';

const App = () => {
  const { loading, error, data } = useQuery(GET_HISTORIES);

  if (loading) return 'Loading...';
  if (error) return 'Something Went Error';

  return (
    <div className=' mx-auto w-10/12 sm:w-6/12 h-screen pt-10'>
      <Search />
      <div className='filter flex flex-row my-7 space-x-4 overflow-x-auto sm:overflow-auto'>
        <Filter title='status' options={statusOptions} />
        <Filter title='type' options={typeOptions} />
      </div>
      {!loading && !error && (
        <div className='history__container'>
          <History data={data.histories} />
        </div>
      )}
    </div>
  );
};

export default App;

import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Filter from './components/blocks/Filter/Filter';
import History from './components/blocks/History';
import Search from './components/blocks/Search/Search';
import GET_HISTORIES from './graphQl/histories.queries';
import { statusOptions, typeOptions } from './utils/elementOptions';

function App() {
  const { loading, error, data } = useQuery(GET_HISTORIES);
  const [transactions, setTransactions] = useState([]);

  if (loading) return 'Loading...';
  if (error) return 'Something Went Error';

  const handleFilter = (filterName, filterValue) => {
    setTransactions([]);
    if (filterValue === '') {
      return setTransactions(data);
    } else {
      const res = data.transactions.filter(
        (e) => e[filterName] === filterValue
      );
      setTransactions(res);
    }
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    let result = [];
    result = data.transactions.filter((e) => e.wallet_address.includes(value));
    setTransactions(result);
  };

  return (
    <div className=' mx-auto w-10/12 sm:w-6/12 h-screen pt-10'>
      <Search handleSearch={handleSearch} />
      <div className='filter flex flex-row my-7 space-x-4 overflow-x-auto sm:overflow-auto'>
        <Filter
          title='status'
          options={statusOptions}
          handleFilter={handleFilter}
        />
        <Filter
          title='type'
          options={typeOptions}
          handleFilter={handleFilter}
        />
      </div>
      {!loading && !error && (
        <div className='history__container'>
          <History data={data.transactions} filtered={transactions} />
        </div>
      )}
    </div>
  );
}

export default App;

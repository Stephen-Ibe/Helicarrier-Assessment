import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Filter from './components/blocks/Filter/Filter';
import History from './components/blocks/History';
import Search from './components/blocks/Search/Search';
import { statusOptions, typeOptions } from './utils/elementOptions';
import GET_HISTORIES from './graphQl/histories.queries';

function App() {
  const { loading, error, data } = useQuery(GET_HISTORIES);

  const [transactions, setTransactions] = useState([]);

  if (loading) return 'Loading...';
  if (error) return 'Something Went Error';

  const handleFilter = (filterName, filterValue) => {
    let test = [];
    for (let i = 0; i < data.histories.length; i++) {
      const res = data.histories[i].transactions.filter(
        (e) => e[filterName] === filterValue
      );

      res.map((e) =>
        test.push({ date: data.histories[i].date, transactions: res })
      );
    }

    return setTransactions(test);
  };

  return (
    <div className=' mx-auto w-10/12 sm:w-6/12 h-screen pt-10'>
      <Search />
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
        {/* <Filter title='type'/>
        <Filter /> */}
      </div>
      {!loading && !error && (
        <div className='history__container'>
          <History data={data.histories} filtered={transactions} />
        </div>
      )}
    </div>
  );
}

export default App;

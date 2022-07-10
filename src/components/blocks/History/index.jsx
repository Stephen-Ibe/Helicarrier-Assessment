import React, { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/formatDate';

const History = ({ data }) => {
  const [allTransactions, setAllTransactions] = useState([]);

  const sortHistories = (histories) => {
    const sortData = histories
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setAllTransactions(sortData);
    console.log(sortData);
  };

  useEffect(() => {
    sortHistories(data);
  }, []);

  return (
    <div>
      {allTransactions.length > 0 ? (
        allTransactions.map(({ date, transactions }) => (
          <div className='mb-12'>
            <div className='heading w-fit px-6 py-2 text-sm my-4 bg-amber-900 text-slate-100'>
              {formatDate(date)}
            </div>
          </div>
        ))
      ) : (
        <div className='text-center'>No Records Found ... </div>
      )}
    </div>
  );
};

export default History;

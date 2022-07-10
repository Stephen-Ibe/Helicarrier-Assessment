import React, { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { formatNumber } from '../../../utils/formatNumber';

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
  }, [data]);

  return (
    <div>
      {allTransactions.length > 0 ? (
        allTransactions.map(({ date, transactions }) => (
          <div className='mb-12'>
            <div className='heading w-fit px-6 py-2 text-sm my-4 bg-amber-900 text-slate-100'>
              {formatDate(date)}
            </div>
            {transactions.length > 0 &&
              transactions.map((e) => (
                <div className='main mb-4'>
                  <div className='flex flex-row space-x-6 items-center'>
                    <h4 className='w-2/6 sm:w-1/6 border-2 text-center px-2 py-6 sm:py-4 sm:px-2 text-xs sm:text-sm '>
                      {formatNumber(e.amount)} <br /> {e.currency}
                    </h4>
                    <div className='transaction__details border-2 text-xs sm:text-sm py-6 sm:py-4 px-2 sm:px-4 sm:w-full break-all space-y-2'>
                      <p>
                        Sent to:
                        <span className='text-slate-500 font-bold'>
                          {' '}
                          {e.wallet_address}
                        </span>
                      </p>
                      <p
                        className={
                          (e.status === 'failed' && 'text-red-400') ||
                          (e.status === 'successful' && 'text-green-600') ||
                          (e.status === 'pending' && 'text-blue-600')
                        }
                      >
                        {e.type} {e.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))
      ) : (
        <div className='text-center'>No Records Found ... </div>
      )}
    </div>
  );
};

export default History;

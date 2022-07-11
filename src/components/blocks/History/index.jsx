import React, { useEffect, useId, useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { formatNumber } from '../../../utils/formatNumber';

const History = ({ data, filtered }) => {
  const id = useId();
  const [allTransactions, setAllTransactions] = useState([]);

  const groupArrayOfObjects = (list, key) => {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const sortTransactions = (data) => {
    let res = groupArrayOfObjects(data, 'date');
    setAllTransactions(res);
  };

  const sortFiltered = (data) => {
    let res = groupArrayOfObjects(data, 'date');
    setAllTransactions(res);
  };

  useEffect(() => {
    sortTransactions(data);
    if (filtered.length > 0) {
      sortFiltered(filtered);
    }
  }, [data, filtered]);

  // console.log(allTransactions);

  return (
    <div>
      {Object.entries(allTransactions).map(([key, value], index) => (
        <div className='mb-12' key={`${id}_${index}`}>
          <div className='heading w-fit px-6 py-2 text-sm my-4 bg-amber-900 text-slate-100'>
            {formatDate(key)}
          </div>
          {value.map((e) => (
            <div className='main mb-4' key={`${id}_${e.wallet_address}`}>
              <div className='flex flex-row space-x-6 items-center'>
                <h4 className='w-2/6 sm:w-1/6 border-2 text-center px-2 py-6 sm:py-4 sm:px-2 text-xs sm:text-sm '>
                  {formatNumber(e.amount)} <br /> {e.currency}
                </h4>
                <div className='transaction__details border-2 text-xs sm:text-sm py-6 sm:py-4 px-2 sm:px-4 sm:w-full break-all space-y-2'>
                  <p>
                    Sent to:
                    <span className='text-slate-500 font-bold'>
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
      ))}
    </div>
  );
};

export default History;

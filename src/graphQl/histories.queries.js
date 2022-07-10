import { gql } from '@apollo/client';

const GET_HISTORIES = gql`
  query getHistories {
    histories {
      date
      transactions {
        id
        amount
        wallet_address
        type
        status
        currency
      }
    }
  }
`;

export default GET_HISTORIES;

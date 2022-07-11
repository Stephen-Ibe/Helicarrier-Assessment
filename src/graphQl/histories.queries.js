import { gql } from '@apollo/client';

const GET_HISTORIES = gql`
  query getHistories {
    transactions {
      id
      amount
      wallet_address
      type
      status
      currency
      date
    }
  }
`;

export default GET_HISTORIES;

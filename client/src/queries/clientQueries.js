import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  {
    clients {
      name
      _id
      email
      phone
    }
  }
`;

export default GET_CLIENTS;
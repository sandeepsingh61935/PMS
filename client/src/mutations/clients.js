import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      _id
      name
      email
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($_id: ID!) {
    deleteClient(_id: $_id) {
      _id
      name
      email
      phone
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT };
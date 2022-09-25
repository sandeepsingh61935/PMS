import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      _id
      name
      description
      status
      client {
        _id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation DeleteProject($_id: ID!) {
    deleteProject(_id: $_id) {
      _id
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $_id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      _id: $_id
      name: $name
      description: $description
      status: $status
    ) {
      _id
      name
      description
      status
      client {
        _id
        name
        email
        phone
      }
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
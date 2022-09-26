import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($_id: ID!) {
    project(_id: $_id) {
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

export { GET_PROJECTS, GET_PROJECT };
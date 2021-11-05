import gql from 'graphql-tag';

export const charactersQuery = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

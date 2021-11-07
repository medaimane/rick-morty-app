import gql from 'graphql-tag';

export const charactersQuery = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        status
        created
        gender
        type
        species
      }
    }
  }
`;

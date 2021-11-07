import {GraphQLClient} from '../../src/services/networking/GraphQLClient';

export class ApolloGraphQLClientStub implements GraphQLClient {
  query = jest.fn();
}

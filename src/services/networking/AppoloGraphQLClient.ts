import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  NormalizedCacheObject,
  QueryOptions,
} from '@apollo/client';
import {from, Observable, tap} from 'rxjs';
import {GraphQLClient} from './GraphQLClient';
import {NetworkingConfiguration} from './NetworkingConfiguration';

export class ApolloGraphQLClient implements GraphQLClient {
  private readonly apolloClient: ApolloClient<NormalizedCacheObject>;

  constructor(private readonly configuration: NetworkingConfiguration) {
    this.apolloClient = new ApolloClient({
      uri: `${this.configuration.baseUrl}/graphql`,
      cache: new InMemoryCache(),
      defaultOptions: {watchQuery: {fetchPolicy: 'no-cache'}},
    });
  }

  query<Data>(query: QueryOptions): Observable<ApolloQueryResult<Data>> {
    return from(this.apolloClient.query<Data>(query)).pipe(
      tap((res) => console.log(res))
    );
  }
}

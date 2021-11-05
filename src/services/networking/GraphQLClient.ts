import {ApolloQueryResult, QueryOptions} from '@apollo/client';
import {Observable} from 'rxjs';

export interface GraphQLClient {
  query<Data>(query: QueryOptions): Observable<ApolloQueryResult<Data>>;
}

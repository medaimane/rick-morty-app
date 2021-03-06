import {map, Observable} from 'rxjs';
import {CharacterJSON} from '../models/CharacterJSON';
import {CharactersQueryJSON} from '../models/CharactersQueryJSON';
import {GraphQLClient} from '../networking/GraphQLClient';
import {CharactersGateway} from './CharactersGateway';
import {charactersQuery} from './charactersQuery';

export class CharactersService implements CharactersGateway {
  constructor(private readonly graphQLClient: GraphQLClient) {}

  fetchCharacters(page?: number): Observable<CharacterJSON[]> {
    return this.graphQLClient
      .query<CharactersQueryJSON>({
        query: charactersQuery,
        variables: {
          page,
        },
      })
      .pipe(map(({data: {characters}}) => characters.results));
  }
}

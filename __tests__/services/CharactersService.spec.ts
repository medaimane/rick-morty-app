import {QueryOptions} from '@apollo/client';
import {of, throwError} from 'rxjs';
import {charactersQuery} from '../../src/services/api/charactersQuery';
import {CharactersService} from '../../src/services/api/CharactersService';
import {CharactersQueryJSON} from '../../src/services/models/CharactersQueryJSON';
import {ApolloGraphQLClientStub} from '../stubs/ApolloGraphQLClientStub';
import {charactersJSONStub} from '../stubs/charactersStub';

describe('CharactersService', () => {
  let sut: CharactersService;
  let graphQlClient: ApolloGraphQLClientStub;

  beforeEach(() => {
    graphQlClient = new ApolloGraphQLClientStub();
    graphQlClient.query.mockReturnValue(of(void 0));

    sut = new CharactersService(graphQlClient);
  });

  describe('fetchCharacters', () => {
    it('sends query', () => {
      sut.fetchCharacters().subscribe();

      expect(graphQlClient.query).toBeCalledWith(
        expect.objectContaining<QueryOptions>({
          query: charactersQuery,
          variables: {
            page: void 0,
          },
        })
      );
    });

    describe('happy flow when query succeed', () => {
      it('returns the results', () => {
        const next = jest.fn();
        const res: CharactersQueryJSON = {
          characters: {
            results: charactersJSONStub,
          },
        };
        graphQlClient.query.mockReturnValue(of({data: res}));

        sut.fetchCharacters().subscribe(next);

        expect(next).toBeCalledWith(charactersJSONStub);
      });
    });

    describe('when query failed', () => {
      it('throws error', () => {
        const next = jest.fn();
        const error = jest.fn();

        const err = new Error('any error');
        graphQlClient.query.mockReturnValue(throwError(() => err));

        sut.fetchCharacters().subscribe(next, error);

        expect(next).not.toBeCalled();
        expect(error).toBeCalledWith(err);
      });
    });
  });
});

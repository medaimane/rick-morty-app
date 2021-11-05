import {CharactersGateway} from '../../src/services/api/CharactersGateway';

export class CharactersServiceStub implements CharactersGateway {
  fetchCharacters = jest.fn();
}

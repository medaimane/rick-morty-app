import {CharactersGateway} from '../../src/services/api/CharactersGateway';

export class CharactersServiceStub implements CharactersGateway {
  fetchCharacter = jest.fn();
  fetchCharacters = jest.fn();
}

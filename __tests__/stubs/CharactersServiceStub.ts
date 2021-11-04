import {CharactersGateway} from '../../src/services/api/CharactersService/CharactersGateway';

export class CharactersServiceStub implements CharactersGateway {
  fetchCharacters = jest.fn();
}

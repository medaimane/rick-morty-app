import {CharactersGateway} from '../services/api/CharactersService/CharactersGateway';
import {CharactersService} from '../services/api/CharactersService/CharactersService';

export interface Dependencies {
  gateway: CharactersGateway;
}

export const dependencies: Dependencies = {
  gateway: new CharactersService(),
};

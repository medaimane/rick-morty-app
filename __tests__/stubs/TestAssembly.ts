import {Dependencies} from '../../src/dependencies/Dependencies';
import {CharactersServiceStub} from './CharactersServiceStub';

export class TestAssembly implements Dependencies {
  gateway: CharactersServiceStub;

  constructor() {
    this.gateway = new CharactersServiceStub();
  }
}

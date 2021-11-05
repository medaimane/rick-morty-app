import {CharacterJSON} from './CharacterJSON';

export interface CharactersQueryJSON {
  characters: {
    results: CharacterJSON[];
  };
}

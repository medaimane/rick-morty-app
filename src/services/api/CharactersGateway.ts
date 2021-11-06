import {Observable} from 'rxjs';
import {CharacterJSON} from '../models/CharacterJSON';

export interface CharactersGateway {
  fetchCharacters(page?: number): Observable<CharacterJSON[]>;
}

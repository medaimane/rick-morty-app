import {Observable, of} from 'rxjs';
import {CharacterJSON} from '../../models/CharacterJSON';
import {CharactersGateway} from './CharactersGateway';

export class CharactersService implements CharactersGateway {
  fetchCharacters(): Observable<CharacterJSON[]> {
    const dummy: CharacterJSON[] = [{name: 'Aa'}, {name: 'Bb'}];
    return of(dummy);
  }
}

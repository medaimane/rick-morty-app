import {CharacterPresentable} from '../../src/screens/HomeScreen/CharacterPresentable';
import {
  CharacterGender,
  CharacterJSON,
  CharacterStatus,
  NullCharacterJSON,
} from '../../src/services/models/CharacterJSON';

export const charactersJSONStub: CharacterJSON[] = [
  {
    ...NullCharacterJSON,
    name: 'A',
    id: '1',
    image: 'any url',
  },
  {
    ...NullCharacterJSON,
    name: 'B',
    id: '2',
    image: 'any url',
    status: CharacterStatus.Alive,
    gender: CharacterGender.Male,
  },
];

export const charactersPresentableStub: CharacterPresentable[] = [
  {
    name: 'A',
    image: 'any url',
    gender: null,
    status: null,
  },
  {
    name: 'B',
    image: 'any url',
    status: CharacterStatus.Alive,
    gender: CharacterGender.Male,
  },
];

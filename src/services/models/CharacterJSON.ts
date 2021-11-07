export enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}

export enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
export interface CharacterJSON {
  name: string;
  image: string;
  id: string;
  species: string;
  status: CharacterStatus;
  type: string;
  gender: CharacterGender;
  created: string;
}

export const NullCharacterJSON: CharacterJSON = {
  name: '',
  id: '',
  image: '',
  status: CharacterStatus.Unknown,
  species: '',
  type: '',
  created: '',
  gender: CharacterGender.Unknown,
};

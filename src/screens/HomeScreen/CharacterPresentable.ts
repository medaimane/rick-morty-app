import {
  CharacterGender,
  CharacterJSON,
  CharacterStatus,
} from '../../services/models/CharacterJSON';

export interface CharacterPresentable {
  name: string;
  image: string;
  status: CharacterStatus | null;
  gender: CharacterGender | null;
}

export function buildCharaterPresentable(
  c: CharacterJSON
): CharacterPresentable {
  return {
    name: c.name,
    image: c.image,
    status: c.status === CharacterStatus.Unknown ? null : c.status,
    gender: c.gender === CharacterGender.Unknown ? null : c.gender,
  };
}

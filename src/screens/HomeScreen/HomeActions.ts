import {CharacterJSON} from '../../services/models/CharacterJSON';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('HOME');

export const HomeActions = {
  fetchCharacter: {
    success: actionCreator<CharacterJSON[]>('FETCH_CHARACTER_SUCCESS'),
    failure: actionCreator('FETCH_CHARACTER_FAILURE'),
  },
};

export const HomeViewActions = {
  start: actionCreator('START'),
};

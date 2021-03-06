import {CharacterJSON} from '../../services/models/CharacterJSON';
import {actionCreatorFactory} from '../../store/ActionCreatorFactory';

const actionCreator = actionCreatorFactory('HOME');

export const HomeActions = {
  fetchCharacters: {
    success: actionCreator<CharacterJSON[]>('FETCH_CHARACTER_SUCCESS'),
    failure: actionCreator('FETCH_CHARACTER_FAILURE'),
  },
};

export const HomeViewActions = {
  fetchCharacters: actionCreator('FETCH_CHARACTERS'),
  showDetails: actionCreator<string>('SHOW_DETAILS'),
};

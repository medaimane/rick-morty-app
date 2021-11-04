import {CharacterJSON} from '../../services/models/CharacterJSON';
import {Action, ActionWithPayload} from '../../store/Action';
import {ViewState} from '../../store/ViewState';
import {HomeActions} from './HomeActions';

export interface HomeState {
  characters: CharacterJSON[];

  viewState: ViewState;
}

export const initialHomeState: HomeState = {
  characters: [],
  viewState: ViewState.Loading,
};

export function homeReducer(
  state: HomeState = initialHomeState,
  action: Action | ActionWithPayload
): HomeState {
  switch (action.type) {
    case HomeActions.fetchCharacter.success.type: {
      const characters: CharacterJSON[] = action.payload;

      return {
        ...state,
        characters,
        viewState: characters.length > 0 ? ViewState.Data : ViewState.Empty,
      };
    }

    case HomeActions.fetchCharacter.failure.type: {
      return {
        ...state,
        viewState: ViewState.Error,
      };
    }
  }

  return state;
}

import {CharacterJSON} from '../../services/models/CharacterJSON';
import {ViewState} from '../../store/ViewState';
import {
  buildCharaterPresentable,
  CharacterPresentable,
} from './CharacterPresentable';
import {HomeState} from './homeReducer';

export interface HomeViewState {
  characters: CharacterPresentable[];
  viewState: ViewState;
}

export function getHomeViewState(state: HomeState): HomeViewState {
  return {
    characters: mapCharactersToPresentables(state.characters),
    viewState: state.viewState,
  };
}

function mapCharactersToPresentables(
  characters: CharacterJSON[]
): CharacterPresentable[] {
  return characters.map(buildCharaterPresentable);
}

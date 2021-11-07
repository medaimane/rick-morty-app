import {charactersJSONStub} from '../stubs/charactersStub';
import {ViewState} from '../../src/store/ViewState';
import {HomeActions} from '../../src/screens/HomeScreen/HomeActions';
import {
  homeReducer as sut,
  HomeState,
  initialHomeState,
} from '../../src/screens/HomeScreen/homeReducer';

describe('homeReducer', () => {
  it('has initial state', () => {
    expect(initialHomeState).toEqual(
      expect.objectContaining<HomeState>({
        characters: [],
        viewState: ViewState.Loading,
      })
    );
  });

  describe('when HOME/FETCH_CHARACTERS_SUCCESS action received', () => {
    it('sets carachters to the action payload', () => {
      const action = HomeActions.fetchCharacters.success(charactersJSONStub);
      const state: HomeState = {
        ...initialHomeState,
        characters: [],
      };

      const newState = sut(state, action);

      expect(newState.characters).toEqual(charactersJSONStub);
    });

    it('sets viewState to Empty when charaters are empty otherwise to Data', () => {
      const cases = [
        {
          characters: [],
          expectedViewState: ViewState.Empty,
        },
        {
          characters: charactersJSONStub,
          expectedViewState: ViewState.Data,
        },
      ];

      cases.forEach(({characters, expectedViewState}) => {
        const action = HomeActions.fetchCharacters.success(characters);
        const state: HomeState = {
          ...initialHomeState,
          viewState: ViewState.Loading,
        };

        const newState = sut(state, action);

        expect(newState.viewState).toBe(expectedViewState);
      });
    });
  });

  describe('when HOME/FETCH_CHARACTERS_FAILURE action received', () => {
    it('sets viewState to Error', () => {
      const state: HomeState = {
        ...initialHomeState,
        viewState: ViewState.Data,
      };

      const newState = sut(state, HomeActions.fetchCharacters.failure());

      expect(newState.viewState).toBe(ViewState.Error);
    });
  });
});

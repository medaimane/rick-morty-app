import {ViewState} from '../../src/store/ViewState';
import {getHomeViewState as sut} from '../../src/screens/HomeScreen/homeSelectors';
import {
  HomeState,
  initialHomeState,
} from '../../src/screens/HomeScreen/homeReducer';
import {charactersStub} from '../stubs/charactersStub';

describe('homeSelectors', () => {
  describe('viewState', () => {
    it('passes it as it is', () => {
      const state: HomeState = {
        ...initialHomeState,
        viewState: ViewState.Data,
      };

      const viewState = sut(state);

      expect(viewState.viewState).toBe(ViewState.Data);
    });
  });

  describe('characters', () => {
    describe('returns mapped charachters presentable', () => {
      const state: HomeState = {
        ...initialHomeState,
        characters: charactersStub,
      };

      const viewState = sut(state);

      expect(viewState.characters).toEqual(charactersStub);
    });
  });
});

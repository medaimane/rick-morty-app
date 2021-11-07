import {StateObservable} from 'redux-observable';
import {of, throwError} from 'rxjs';
import {charactersJSONStub} from '../stubs/charactersStub';
import {TestAssembly} from '../stubs/TestAssembly';
import {RootState} from '../../src/store/rootState';
import {
  HomeActions,
  HomeViewActions,
} from '../../src/screens/HomeScreen/HomeActions';
import {homeEpics as sut} from '../../src/screens/HomeScreen/homeEpics';

describe('homeEpics', () => {
  const next = jest.fn();

  let state$: StateObservable<RootState>;
  let dependencies: TestAssembly;

  beforeEach(() => {
    dependencies = new TestAssembly();
    dependencies.gateway.fetchCharacters.mockReturnValue(of(void 0));
  });

  describe('when HOME/FETCH_CHARACTERS action received', () => {
    const action$ = of(HomeViewActions.fetchCharacters());

    it('fetchs characters using gateway', () => {
      sut(action$, state$, dependencies).subscribe();

      expect(dependencies.gateway.fetchCharacters).toBeCalled();
    });

    describe('when success', () => {
      it('emits HOME/FETCH_CHARACTERS_SUCCESS action', () => {
        dependencies.gateway.fetchCharacters.mockReturnValue(
          of(charactersJSONStub)
        );

        sut(action$, state$, dependencies).subscribe(next);

        expect(next).toBeCalledWith({
          type: HomeActions.fetchCharacters.success.type,
          payload: charactersJSONStub,
        });
      });
    });

    describe('when failure', () => {
      it('emits HOME/FETCH_CHARACTERS_FAILURE action', () => {
        dependencies.gateway.fetchCharacters.mockReturnValue(
          throwError(() => new Error('any error'))
        );

        sut(action$, state$, dependencies).subscribe(next);

        expect(next).toBeCalledWith({
          type: HomeActions.fetchCharacters.failure.type,
        });
      });
    });
  });
});

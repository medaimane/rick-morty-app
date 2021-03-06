import {combineEpics, ofType} from 'redux-observable';
import {catchError, map, mergeMap, of} from 'rxjs';
import {EpicType} from '../../store/EpicType';
import {HomeActions, HomeViewActions} from './HomeActions';

const start: EpicType = (action$, _state$, {gateway}) =>
  action$.pipe(
    ofType(HomeViewActions.fetchCharacters.type),
    mergeMap(() =>
      gateway.fetchCharacters().pipe(
        map(HomeActions.fetchCharacters.success),
        catchError(() => of(HomeActions.fetchCharacters.failure()))
      )
    )
  );

export const homeEpics = combineEpics(start);

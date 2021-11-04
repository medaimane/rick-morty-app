import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {dependencies, Dependencies} from '../dependencies/Dependencies';
import {Action, ActionWithPayload} from './Action';
import {rootEpic} from './rootEpic';
import {rootReducer} from './rootReducer';
import {RootState} from './rootState';

export function configureStore() {
  const epicMiddleware = createEpicMiddleware<
    Action | ActionWithPayload,
    Action | ActionWithPayload,
    RootState,
    Dependencies
  >({dependencies});

  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore();

import {combineEpics} from 'redux-observable';
import {homeEpics} from '../screens/HomeScreen/homeEpics';

export const rootEpic = combineEpics(homeEpics);

import {combineReducers} from 'redux';
import {homeReducer} from '../screens/HomeScreen/homeReducer';

export const rootReducer = combineReducers({
  home: homeReducer,
});

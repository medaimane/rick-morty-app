import {HomeState, initialHomeState} from '../screens/HomeScreen/homeReducer';

export interface RootState {
  home: HomeState;
}

export const initialRootState: RootState = {
  home: initialHomeState,
};

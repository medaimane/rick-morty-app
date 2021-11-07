import {ParamListBase} from '@react-navigation/routers';
import {CharacterPresentable} from '../screens/HomeScreen/CharacterPresentable';
import {Screens} from './Screens';

export interface RootStackParamList extends ParamListBase {
  [Screens.Home]: undefined;
  [Screens.Details]: {item: CharacterPresentable};
}

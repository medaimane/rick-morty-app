import {TextStyle} from 'react-native';
import {Colors} from './Colors';

export enum FontSize {
  TinyText = 8,
  SmallText = 12,
  Normal = 14,
  Header3 = 16,
  Header2 = 18,
  Header1 = 22,
  Header0 = 28,
}

export const Fonts = {
  Regular: (size = FontSize.Normal): TextStyle => ({
    // fontFamily: '-----------Regular',
    fontSize: size,
    fontWeight: 'normal',
    color: Colors.Black,
  }),
  Bold: (size = FontSize.Normal): TextStyle => ({
    // fontFamily: '-----------Bold',
    fontSize: size,
    fontWeight: 'bold',
    color: Colors.Black,
  }),
  Italic: (size = FontSize.Normal): TextStyle => ({
    // fontFamily: '-----------Italic',
    fontSize: size,
    fontStyle: 'italic',
    color: Colors.Black,
  }),
  Light: (size = FontSize.Normal): TextStyle => ({
    // fontFamily: '-----------Light',
    fontSize: size,
    fontWeight: '100',
    color: Colors.Black,
  }),
  SemiBold: (size = FontSize.Normal): TextStyle => ({
    // fontFamily: '-----------SemiBold',
    fontWeight: '500',
    fontSize: size,
    color: Colors.Black,
  }),
};

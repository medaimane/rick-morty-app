import React from 'react';
import {StyleSheet} from 'react-native';
import {local} from '../localization/Localization';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {TextView} from './TextView';

export const Header = () => (
  <TextView
    text={local.characters}
    textStyle={styles.titleText}
    style={styles.title}
  />
);

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    paddingVertical: 16,
  },
  titleText: {
    ...Fonts.Bold(FontSize.Header2),
    color: Colors.PrimarySoft,
  },
});

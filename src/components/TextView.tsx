import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Fonts} from '../theme/Fonts';

interface Props {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function TextView(props: Props) {
  return (
    <View style={props.style}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Fonts.Regular(),
  },
});

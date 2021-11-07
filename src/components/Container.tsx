import React, {ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../theme/Colors';

export function Container({
  children,
  style,
}: {
  children?: ReactNode;
  style?: ViewStyle;
}) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});

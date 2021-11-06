import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme/Colors';

export function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: Colors.PrimarySoft,
    borderBottomWidth: 0.5,
  },
});

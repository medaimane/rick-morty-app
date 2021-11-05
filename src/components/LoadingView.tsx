import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from '../theme/Colors';

export function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.PrimarySoft} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import store from './src/store/store';
import {Colors} from './src/theme/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.wrapper}>
        <HomeScreen />
        <StatusBar style="light" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.Black,
    paddingHorizontal: 16,
  },
});

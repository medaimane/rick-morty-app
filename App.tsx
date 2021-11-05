import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import store from './src/store/store';
import {Colors} from './src/theme/Colors';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

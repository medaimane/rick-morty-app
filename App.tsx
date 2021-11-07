import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {Navigation} from './src/navigation/Navigation';
import {Container} from './src/components/Container';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Container>
          <Navigation />
        </Container>
        <StatusBar style="dark" />
      </Provider>
    </SafeAreaProvider>
  );
}

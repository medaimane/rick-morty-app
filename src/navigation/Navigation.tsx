import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './Screens';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {local} from '../localization/Localization';
import {RootStackParamList} from './RootStackParamList';
import {Colors} from '../theme/Colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Home}>
        <Stack.Screen
          name={Screens.Home}
          component={HomeScreen}
          options={{
            title: local.appLogo,
            headerTitleStyle: {
              color: Colors.Primary,
            },
          }}
        />
        <Stack.Screen name={Screens.Details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
